/**
 * PriceDisplay Component
 * Shows current crypto price with percentage change
 */

import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { CryptoPrice } from '../../../../types/trading.types';
import { formatCurrency } from '../../../../utils/format.utils';

interface PriceDisplayProps {
  priceData: CryptoPrice;
}

export function PriceDisplay({ priceData }: PriceDisplayProps) {
  const { price, changePercent, isPositive } = priceData;

  const arrow = isPositive ? '↑' : '↓';
  const changeFormatted = `${arrow} ${Math.abs(changePercent).toFixed(2)}%`;

  return (
    <View style={styles.container}>
      <Text style={styles.price}>{formatCurrency(price)}</Text>
      <View style={styles.changeContainer}>
        <Text
          style={[
            styles.changeText,
            isPositive ? styles.positiveChange : styles.negativeChange,
          ]}
        >
          {changeFormatted}
        </Text>
      </View>
    </View>
  );
}
