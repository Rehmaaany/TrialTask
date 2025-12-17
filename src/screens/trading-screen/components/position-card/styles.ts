/**
 * PositionCard Component Styles
 */

import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../constants/trading.constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.cardBackground,
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  cryptoIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#F7931A',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  cryptoIconText: {
    color: COLORS.textPrimary,
    fontSize: 12,
    fontWeight: '700',
  },
  pairText: {
    color: COLORS.textPrimary,
    fontSize: 14,
    fontWeight: '600',
    marginRight: 8,
  },
  badge: {
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 4,
    marginRight: 6,
  },
  longBadge: {
    backgroundColor: '#00D26A',
  },
  shortBadge: {
    backgroundColor: COLORS.secondary,
  },
  badgeText: {
    color: COLORS.textPrimary,
    fontSize: 11,
    fontWeight: '600',
  },
  leverageBadge: {
    backgroundColor: COLORS.inputBackground,
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  leverageText: {
    color: COLORS.textSecondary,
    fontSize: 11,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  label: {
    color: COLORS.textSecondary,
    fontSize: 12,
  },
  value: {
    color: COLORS.textPrimary,
    fontSize: 12,
    fontWeight: '500',
  },
  profitValue: {
    color: '#00D26A',
  },
  lossValue: {
    color: COLORS.secondary,
  },
});
