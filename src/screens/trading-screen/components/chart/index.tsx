/**
 * Chart Component
 * Displays price chart with connected line visualization
 */

import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { styles } from './styles';

interface ChartProps {
  normalizedData: { x: number; y: number }[];
  isLoading: boolean;
}

const CHART_WIDTH = Dimensions.get('window').width - 32;
const CHART_HEIGHT = 160;

export function Chart({ normalizedData, isLoading }: ChartProps) {
  if (isLoading) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  // Convert percentage to pixel positions
  const points = normalizedData.map(point => ({
    x: (point.x / 100) * CHART_WIDTH,
    y: CHART_HEIGHT - (point.y / 100) * CHART_HEIGHT,
  }));

  const lastPoint = points[points.length - 1];

  return (
    <View style={styles.container}>
      <View style={styles.chartArea}>
        {/* Draw connected line segments */}
        {points.map((point, index) => {
          const nextPoint = points[index + 1];
          if (!nextPoint) return null;

          const dx = nextPoint.x - point.x;
          const dy = nextPoint.y - point.y;
          const length = Math.sqrt(dx * dx + dy * dy);
          const angle = Math.atan2(dy, dx) * (180 / Math.PI);

          return (
            <View
              key={index}
              style={[
                styles.chartLine,
                {
                  position: 'absolute',
                  left: point.x,
                  top: point.y - 1,
                  width: length + 1,
                  transform: [{ rotate: `${angle}deg` }],
                  transformOrigin: 'left center',
                },
              ]}
            />
          );
        })}

        {/* Highlight dot at the last point */}
        {lastPoint && (
          <View
            style={[
              styles.highlightDot,
              {
                position: 'absolute',
                left: lastPoint.x - 7,
                top: lastPoint.y - 7,
              },
            ]}
          />
        )}
      </View>
    </View>
  );
}
