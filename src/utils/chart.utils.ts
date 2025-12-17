/**
 * Chart Utility Functions
 * Professional helper functions for chart data processing and path generation
 */

import { Dimensions } from 'react-native';
import { ChartDataPoint } from '../types/trading.types';

// Chart dimension constants
const SCREEN_WIDTH = Dimensions.get('window').width;
export const CHART_CONFIG = {
  width: SCREEN_WIDTH - 40,
  height: 150,
  paddingHorizontal: 5,
  paddingVertical: 15,
  lineColor: '#00D26A',
  lineWidth: 2,
  dotRadius: 4,
  dotGlowRadius: 6,
} as const;

interface ChartPoint {
  x: number;
  y: number;
}

interface ChartPathData {
  linePath: string;
  areaPath: string;
  lastPoint: ChartPoint | null;
}

interface NormalizedPoint {
  x: number;
  y: number;
}

/**
 * Converts normalized data (0-100 range) to actual pixel coordinates
 */
export function normalizeToPixels(
  normalizedData: NormalizedPoint[],
  config = CHART_CONFIG
): ChartPoint[] {
  const effectiveWidth = config.width - config.paddingHorizontal * 2;
  const effectiveHeight = config.height - config.paddingVertical * 2;

  return normalizedData.map(point => ({
    x: config.paddingHorizontal + (point.x / 100) * effectiveWidth,
    y: config.paddingVertical + effectiveHeight - (point.y / 100) * effectiveHeight,
  }));
}

/**
 * Generates a smooth SVG path using quadratic bezier curves
 * Creates a natural-looking curve through all data points
 */
export function generateSmoothPath(points: ChartPoint[]): string {
  if (points.length === 0) return '';
  if (points.length === 1) return `M ${points[0].x} ${points[0].y}`;

  let pathData = `M ${points[0].x} ${points[0].y}`;

  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const midX = (prev.x + curr.x) / 2;
    const midY = (prev.y + curr.y) / 2;
    pathData += ` Q ${prev.x} ${prev.y}, ${midX} ${midY}`;
  }

  // Connect to final point
  const lastPoint = points[points.length - 1];
  const secondLast = points[points.length - 2];
  
  if (secondLast) {
    pathData += ` Q ${secondLast.x} ${secondLast.y}, ${lastPoint.x} ${lastPoint.y}`;
  }

  return pathData;
}

/**
 * Generates the area path for gradient fill beneath the chart line
 */
export function generateAreaPath(
  linePath: string,
  points: ChartPoint[],
  config = CHART_CONFIG
): string {
  if (points.length === 0) return '';

  const firstPoint = points[0];
  const lastPoint = points[points.length - 1];
  const bottomY = config.height - config.paddingVertical;

  return `${linePath} L ${lastPoint.x} ${bottomY} L ${firstPoint.x} ${bottomY} Z`;
}

/**
 * Main function to generate all chart path data from normalized points
 */
export function generateChartPaths(normalizedData: NormalizedPoint[]): ChartPathData {
  if (normalizedData.length === 0) {
    return { linePath: '', areaPath: '', lastPoint: null };
  }

  const pixelPoints = normalizeToPixels(normalizedData);
  const linePath = generateSmoothPath(pixelPoints);
  const areaPath = generateAreaPath(linePath, pixelPoints);
  const lastPoint = pixelPoints[pixelPoints.length - 1];

  return { linePath, areaPath, lastPoint };
}

/**
 * Normalizes raw chart data to 0-100 range for consistent rendering
 */
export function normalizeChartData(chartData: ChartDataPoint[]): NormalizedPoint[] {
  if (chartData.length === 0) return [];

  const prices = chartData.map(point => point.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const priceRange = maxPrice - minPrice || 1;

  return chartData.map((point, index) => ({
    x: (index / (chartData.length - 1)) * 100,
    y: ((point.price - minPrice) / priceRange) * 100,
  }));
}

