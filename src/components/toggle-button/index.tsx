/**
 * ToggleButton Component
 * Buy/Sell toggle switch
 */

import React from 'react';
import { View, TouchableOpacity, Text, ViewStyle } from 'react-native';
import { styles } from './styles';

interface ToggleOption {
  id: string;
  label: string;
}

interface ToggleButtonProps {
  options: ToggleOption[];
  activeId: string;
  onToggle: (id: string) => void;
  isSellMode?: boolean;
  style?: ViewStyle;
}

export function ToggleButton({
  options,
  activeId,
  onToggle,
  isSellMode = false,
  style,
}: ToggleButtonProps) {
  return (
    <View style={[styles.container, style]}>
      {options.map(option => {
        const isActive = option.id === activeId;
        const isSellActive = isActive && isSellMode && option.id === 'sell';

        return (
          <TouchableOpacity
            key={option.id}
            style={[
              styles.button,
              isActive
                ? isSellActive
                  ? styles.sellActiveButton
                  : styles.activeButton
                : styles.inactiveButton,
            ]}
            onPress={() => onToggle(option.id)}
            accessibilityRole="button"
            accessibilityState={{ selected: isActive }}
          >
            <Text
              style={[
                styles.text,
                isActive ? styles.activeText : styles.inactiveText,
              ]}
            >
              {option.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

