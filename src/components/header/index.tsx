/**
 * Header Component
 * Reusable header with back button, centered title, and action buttons
 */

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { ArrowBackIcon, WalletIcon } from '../icons/index';

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
        <ArrowBackIcon size={24} color="#FFFFFF" />
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
        accessibilityLabel="Wallet"
        accessibilityRole="button"
      >
        <WalletIcon size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}
