/**
 * Header Component
 * Reusable header with back button, centered title, and action buttons
 */

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface HeaderProps {
  title: string;
  showCryptoIcon?: boolean;
  onBackPress: () => void;
  onSettingsPress: () => void;
}

export function Header({
  title,
  showCryptoIcon = true,
  onBackPress,
  onSettingsPress,
}: HeaderProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.leftButton}
        onPress={onBackPress}
        accessibilityLabel="Go back"
        accessibilityRole="button"
      >
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>

      <View style={styles.titleContainer}>
        {showCryptoIcon && (
          <View style={styles.cryptoIcon}>
            <Text style={styles.cryptoIconText}>₿</Text>
          </View>
        )}
        <Text style={styles.title}>{title}</Text>
      </View>

      <TouchableOpacity
        style={styles.rightButton}
        onPress={onSettingsPress}
        accessibilityLabel="Settings"
        accessibilityRole="button"
      >
        <Text style={styles.settingsIcon}>⊞</Text>
      </TouchableOpacity>
    </View>
  );
}
