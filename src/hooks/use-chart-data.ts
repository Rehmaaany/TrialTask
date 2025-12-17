/**
 * useChartData Hook
 * Handles chart data fetching and time filter management
 */

import { useState, useCallback, useMemo } from 'react';
import { ChartDataPoint, TimeFilter } from '../types/trading.types';
import { MOCK_CHART_DATA, TIME_FILTERS } from '../constants/trading.constants';

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

export function useChartData(): UseChartDataReturn {
  // Default to 15m filter (id: '2')
  const [activeFilter, setActiveFilter] = useState<string>('2');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [chartData] = useState<ChartDataPoint[]>(MOCK_CHART_DATA);

  const handleFilterChange = useCallback((filterId: string) => {
    setIsLoading(true);
    setActiveFilter(filterId);
    // Simulate API call delay
    setTimeout(() => setIsLoading(false), 300);
  }, []);

  const { minPrice, maxPrice } = useMemo(() => {
    const prices = chartData.map(point => point.price);
    return {
      minPrice: Math.min(...prices),
      maxPrice: Math.max(...prices),
    };
  }, [chartData]);

  const normalizedData = useMemo(() => {
    const priceRange = maxPrice - minPrice;
    return chartData.map((point, index) => ({
      x: (index / (chartData.length - 1)) * 100,
      y: ((point.price - minPrice) / priceRange) * 80 + 10,
    }));
  }, [chartData, minPrice, maxPrice]);

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
