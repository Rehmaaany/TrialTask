/**
 * AmountSlider Component
 * Percentage slider for trade amount selection
 */

import React from 'react';
import { View, TouchableOpacity, ViewStyle } from 'react-native';
import { styles } from './styles';
import { SLIDER_STEPS } from '../../constants/trading.constants';

interface AmountSliderProps {
  value: number;
  onValueChange: (value: number) => void;
  steps?: number[];
  style?: ViewStyle;
}

export function AmountSlider({
  value,
  onValueChange,
  steps = SLIDER_STEPS,
  style,
}: AmountSliderProps) {
  const activeIndex = steps.findIndex(step => step >= value);
  const currentActiveIndex = value === 0 ? 0 : activeIndex === -1 ? steps.length - 1 : activeIndex;

  // Calculate active line width percentage
  const activeLineWidth = `${(currentActiveIndex / (steps.length - 1)) * 100}%`;

  return (
    <View style={[styles.container, style]}>
      <View style={styles.track}>
        {/* Background line */}
        <View style={styles.lineBackground} />

        {/* Active line */}
        <View style={[styles.lineActive, { width: activeLineWidth as any }]} />

        {/* Dots */}
        <View style={styles.dotsContainer}>
          {steps.map((step, index) => {
            const isFilled = index <= currentActiveIndex;
            const isActive = index === currentActiveIndex;

            return (
              <TouchableOpacity
                key={step}
                onPress={() => onValueChange(step)}
                accessibilityRole="adjustable"
                accessibilityLabel={`${step}%`}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              >
                <View
                  style={[
                    styles.dot,
                    isFilled && styles.filledDot,
                    isActive && styles.activeDot,
                  ]}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
}
