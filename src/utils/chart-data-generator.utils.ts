/**
 * Chart Data Generator
 * Professional utility for generating realistic price chart data
 */

import { ChartDataPoint } from '../types/trading.types';

interface TimeframeConfig {
  dataPoints: number;
  volatility: number;
  trendStrength: number;
  noiseFrequency: number;
}

// Configuration for each timeframe - affects chart appearance
const TIMEFRAME_CONFIGS: Record<string, TimeframeConfig> = {
  '1': {  // 1 minute
    dataPoints: 60,
    volatility: 0.002,
    trendStrength: 0.0001,
    noiseFrequency: 0.5,
  },
  '2': {  // 15 minutes
    dataPoints: 50,
    volatility: 0.004,
    trendStrength: 0.0003,
    noiseFrequency: 0.4,
  },
  '3': {  // 1 hour
    dataPoints: 45,
    volatility: 0.006,
    trendStrength: 0.0005,
    noiseFrequency: 0.35,
  },
  '4': {  // 1 day
    dataPoints: 40,
    volatility: 0.012,
    trendStrength: 0.001,
    noiseFrequency: 0.3,
  },
  '5': {  // 1 week
    dataPoints: 35,
    volatility: 0.025,
    trendStrength: 0.002,
    noiseFrequency: 0.25,
  },
  '6': {  // 1 month
    dataPoints: 30,
    volatility: 0.05,
    trendStrength: 0.004,
    noiseFrequency: 0.2,
  },
};

const DEFAULT_CONFIG = TIMEFRAME_CONFIGS['2'];
const BASE_PRICE = 90467;
const PRICE_FLOOR_MULTIPLIER = 0.85;
const PRICE_CEILING_MULTIPLIER = 1.05;

/**
 * Generates deterministic noise based on position and seed
 * Uses combination of sine waves for natural-looking movement
 */
function generateNoise(index: number, seed: number, frequency: number): number {
  const wave1 = Math.sin(index * frequency + seed) * 0.5;
  const wave2 = Math.cos(index * (frequency * 0.6) + seed * 2) * 0.3;
  const wave3 = Math.sin(index * (frequency * 1.6) + seed * 0.5) * 0.2;
  
  return wave1 + wave2 + wave3;
}

/**
 * Calculates price change based on noise, volatility, and trend
 */
function calculatePriceChange(
  noise: number,
  volatility: number,
  trendStrength: number,
  progress: number
): number {
  const volatilityComponent = noise * volatility * BASE_PRICE;
  const trendComponent = trendStrength * BASE_PRICE * progress;
  
  return volatilityComponent + trendComponent;
}

/**
 * Clamps price within realistic bounds
 */
function clampPrice(price: number): number {
  const floor = BASE_PRICE * PRICE_FLOOR_MULTIPLIER;
  const ceiling = BASE_PRICE * PRICE_CEILING_MULTIPLIER;
  
  return Math.max(floor, Math.min(ceiling, price));
}

/**
 * Rounds price to 2 decimal places
 */
function roundPrice(price: number): number {
  return Math.round(price * 100) / 100;
}

/**
 * Generates realistic chart data for a specific timeframe
 * Each timeframe produces unique but deterministic data
 */
export function generateChartDataForTimeframe(timeframeId: string): ChartDataPoint[] {
  const config = TIMEFRAME_CONFIGS[timeframeId] || DEFAULT_CONFIG;
  const seed = parseInt(timeframeId, 10) * 12345;
  
  // Calculate starting price with slight variation per timeframe
  const startingPriceOffset = (seed % 100) / 1000;
  let currentPrice = BASE_PRICE * (0.94 + startingPriceOffset);
  
  const dataPoints: ChartDataPoint[] = [];

  for (let i = 0; i < config.dataPoints; i++) {
    const progress = i / config.dataPoints;
    const noise = generateNoise(i, seed, config.noiseFrequency);
    const priceChange = calculatePriceChange(
      noise,
      config.volatility,
      config.trendStrength,
      progress
    );

    currentPrice = clampPrice(currentPrice + priceChange);

    dataPoints.push({
      timestamp: i + 1,
      price: roundPrice(currentPrice),
    });
  }

  // Ensure final point reaches target price for consistency
  dataPoints[dataPoints.length - 1].price = BASE_PRICE;

  return dataPoints;
}

/**
 * Gets the configuration for a specific timeframe
 * Useful for debugging or displaying timeframe info
 */
export function getTimeframeConfig(timeframeId: string): TimeframeConfig {
  return TIMEFRAME_CONFIGS[timeframeId] || DEFAULT_CONFIG;
}

