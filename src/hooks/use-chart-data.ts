/**
 * useChartData Hook
 * Manages chart data state and time filter selection
 * Delegates data generation and processing to utility functions
 */

import { useState, useCallback, useMemo } from 'react';
import { ChartDataPoint, TimeFilter } from '../types/trading.types';
import { TIME_FILTERS } from '../constants/trading.constants';
import { generateChartDataForTimeframe } from '../utils/chart-data-generator.utils';
import { normalizeChartData } from '../utils/chart.utils';

interface UseChartDataReturn {
  chartData: ChartDataPoint[];
  timeFilters: TimeFilter[];
  activeFilter: string;
  isLoading: boolean;
  handleFilterChange: (filterId: string) => void;
  minPrice: number;
  maxPrice: number;
  normalizedData: { x: number; y: number }[];
}

const DEFAULT_FILTER_ID = '2'; // 15m
const LOADING_DELAY_MS = 200;

export function useChartData(): UseChartDataReturn {
  const [activeFilter, setActiveFilter] = useState<string>(DEFAULT_FILTER_ID);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Generate chart data when filter changes
  const chartData = useMemo<ChartDataPoint[]>(() => {
    return generateChartDataForTimeframe(activeFilter);
  }, [activeFilter]);

  // Calculate price range for normalization
  const { minPrice, maxPrice } = useMemo(() => {
    const prices = chartData.map(point => point.price);
    return {
      minPrice: Math.min(...prices),
      maxPrice: Math.max(...prices),
    };
  }, [chartData]);

  // Normalize data to 0-100 range for chart rendering
  const normalizedData = useMemo(() => {
    return normalizeChartData(chartData);
  }, [chartData]);

  // Handle filter selection with loading state
  const handleFilterChange = useCallback((filterId: string) => {
    setIsLoading(true);
    setActiveFilter(filterId);
    
    // Simulate network delay for realistic UX
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, LOADING_DELAY_MS);

    return () => clearTimeout(timeoutId);
  }, []);

  return {
    chartData,
    timeFilters: TIME_FILTERS,
    activeFilter,
    isLoading,
    handleFilterChange,
    minPrice,
    maxPrice,
    normalizedData,
  };
}
