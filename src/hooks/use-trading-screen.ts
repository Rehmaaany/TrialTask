/**
 * useTradingScreen Hook
 * Main hook that combines all trading screen logic
 * This is the single source of truth for the trading screen
 */

import { useCallback } from 'react';
import { useChartData } from './use-chart-data';
import { usePositions } from './use-positions';
import { useTrading } from './use-trading';

export function useTradingScreen() {
  const chartData = useChartData();
  const positions = usePositions();
  const trading = useTrading();

  const handleGoBack = useCallback(() => {
    // Handle navigation back
    console.log('Navigate back');
  }, []);

  const handleOpenSettings = useCallback(() => {
    // Handle settings navigation
    console.log('Open settings');
  }, []);

  return {
    // Chart related
    ...chartData,

    // Positions related
    ...positions,

    // Trading related
    ...trading,

    // Navigation
    handleGoBack,
    handleOpenSettings,
  };
}

export type TradingScreenState = ReturnType<typeof useTradingScreen>;

