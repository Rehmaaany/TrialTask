/**
 * InputField Component
 * Reusable input field with optional suffix/dropdown
 */

import React from 'react';
import { View, TextInput, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { styles } from './styles';
import { COLORS } from '../../constants/trading.constants';

interface InputFieldProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  suffixText?: string;
  showDropdown?: boolean;
  onSuffixPress?: () => void;
  keyboardType?: 'default' | 'numeric' | 'decimal-pad';
  style?: ViewStyle;
}

export function InputField({
  value,
  onChangeText,
  placeholder = 'Enter Amount',
  suffixText,
  showDropdown = false,
  onSuffixPress,
  keyboardType = 'decimal-pad',
  style,
}: InputFieldProps) {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={COLORS.textSecondary}
        keyboardType={keyboardType}
        accessibilityLabel={placeholder}
      />

      {suffixText && (
        <TouchableOpacity
          style={styles.suffix}
          onPress={onSuffixPress}
          disabled={!onSuffixPress}
        >
          <Text style={styles.suffixText}>{suffixText}</Text>
          {showDropdown && <Text style={styles.dropdownIcon}>▼</Text>}
        </TouchableOpacity>
      )}
    </View>
  );
}

