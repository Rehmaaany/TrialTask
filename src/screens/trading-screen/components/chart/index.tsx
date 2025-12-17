/**
 * Chart Component
 * Renders an interactive price chart using SVG
 * Uses utility functions for path generation and data processing
 */

import React, { useMemo } from 'react';
import { View, Text } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop, Circle } from 'react-native-svg';
import { styles } from './styles';
import { generateChartPaths, CHART_CONFIG } from '../../../../utils/chart.utils';

interface ChartProps {
  normalizedData: { x: number; y: number }[];
  isLoading: boolean;
}

// Gradient configuration for area fill
const GRADIENT_STOPS = [
  { offset: '0%', opacity: 0.25 },
  { offset: '60%', opacity: 0.08 },
  { offset: '100%', opacity: 0 },
] as const;

export function Chart({ normalizedData, isLoading }: ChartProps) {
  // Generate SVG paths from normalized data
  const { linePath, areaPath, lastPoint } = useMemo(
    () => generateChartPaths(normalizedData),
    [normalizedData]
  );

  if (isLoading) {
    return <LoadingState />;
  }

  return (
    <View style={styles.container}>
      <Svg width={CHART_CONFIG.width} height={CHART_CONFIG.height}>
        <GradientDefinition />
        <AreaFill path={areaPath} />
        <ChartLine path={linePath} />
        {lastPoint && <EndpointIndicator point={lastPoint} />}
      </Svg>
    </View>
  );
}

// Sub-components for better organization

function LoadingState() {
  return (
    <View style={[styles.container, styles.loadingContainer]}>
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
}

function GradientDefinition() {
  return (
    <Defs>
      <LinearGradient id="chartAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        {GRADIENT_STOPS.map(({ offset, opacity }) => (
          <Stop
            key={offset}
            offset={offset}
            stopColor={CHART_CONFIG.lineColor}
            stopOpacity={opacity}
          />
        ))}
      </LinearGradient>
    </Defs>
  );
}

interface PathProps {
  path: string;
}

function AreaFill({ path }: PathProps) {
  return <Path d={path} fill="url(#chartAreaGradient)" />;
}

function ChartLine({ path }: PathProps) {
  return (
    <Path
      d={path}
      stroke={CHART_CONFIG.lineColor}
      strokeWidth={CHART_CONFIG.lineWidth}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
}

interface EndpointIndicatorProps {
  point: { x: number; y: number };
}

function EndpointIndicator({ point }: EndpointIndicatorProps) {
  return (
    <>
      {/* Outer glow effect */}
      <Circle
        cx={point.x}
        cy={point.y}
        r={CHART_CONFIG.dotGlowRadius}
        fill={CHART_CONFIG.lineColor}
        opacity={0.3}
      />
      {/* Inner dot with border */}
      <Circle
        cx={point.x}
        cy={point.y}
        r={CHART_CONFIG.dotRadius}
        fill={CHART_CONFIG.lineColor}
        stroke="#FFFFFF"
        strokeWidth={2}
      />
    </>
  );
}
