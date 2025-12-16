/**
 * PositionCard Component
 * Displays position information in a card format
 */

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Position } from '../../../../types/trading.types';
import { formatNumber, formatPnl, formatSize } from '../../../../utils/format.utils';

interface PositionCardProps {
  position: Position;
  onPress: (position: Position) => void;
  showFullDetails?: boolean;
}

export function PositionCard({
  position,
  onPress,
  showFullDetails = false,
}: PositionCardProps) {
  const {
    pair,
    type,
    leverage,
    unrealizedPnl,
    unrealizedPnlPercent,
    size,
    sizeUsd,
    marginCross,
    entryPrice,
    liqPrice,
    isProfit,
  } = position;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(position)}
      activeOpacity={0.7}
    >
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.cryptoIcon}>
          <Text style={styles.cryptoIconText}>₿</Text>
        </View>
        <Text style={styles.pairText}>{pair}</Text>
        <View style={[styles.badge, type === 'Long' ? styles.longBadge : styles.shortBadge]}>
          <Text style={styles.badgeText}>{type}</Text>
        </View>
        <View style={styles.leverageBadge}>
          <Text style={styles.leverageText}>{leverage}</Text>
        </View>
      </View>

      {/* Unrealized PNL */}
      <View style={styles.row}>
        <Text style={styles.label}>Unrealized PNL</Text>
        <Text style={[styles.value, isProfit ? styles.profitValue : styles.lossValue]}>
          {formatPnl(unrealizedPnl, unrealizedPnlPercent)}
        </Text>
      </View>

      {/* Size */}
      <View style={styles.row}>
        <Text style={styles.label}>Size</Text>
        <Text style={styles.value}>{formatSize(size, sizeUsd, 'BTC')}</Text>
      </View>

      {/* Margin */}
      <View style={styles.row}>
        <Text style={styles.label}>Margin(Cross)</Text>
        <Text style={styles.value}>${formatNumber(marginCross)} USDT</Text>
      </View>

      {/* Entry Price & Liq Price - only show in full details mode */}
      {showFullDetails && (
        <>
          <View style={styles.row}>
            <Text style={styles.label}>Entry Price</Text>
            <Text style={styles.value}>{formatNumber(entryPrice)}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Liq. Price</Text>
            <Text style={styles.value}>{formatNumber(liqPrice)}</Text>
          </View>
        </>
      )}
    </TouchableOpacity>
  );
}

