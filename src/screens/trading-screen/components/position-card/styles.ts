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
    marginBottom: 10,
  },
  cryptoIcon: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#F7931A',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  cryptoIconText: {
    color: COLORS.textPrimary,
    fontSize: 11,
    fontWeight: '700',
  },
  pairText: {
    color: COLORS.textPrimary,
    fontSize: 13,
    fontWeight: '600',
    marginRight: 8,
  },
  badge: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  longBadge: {
    backgroundColor: COLORS.primary,
  },
  shortBadge: {
    backgroundColor: COLORS.secondary,
  },
  badgeText: {
    color: COLORS.textPrimary,
    fontSize: 10,
    fontWeight: '600',
  },
  leverageBadge: {
    backgroundColor: COLORS.inputBackground,
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 4,
  },
  leverageText: {
    color: COLORS.textSecondary,
    fontSize: 10,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  label: {
    color: COLORS.textSecondary,
    fontSize: 11,
  },
  value: {
    color: COLORS.textPrimary,
    fontSize: 11,
    fontWeight: '500',
  },
  profitValue: {
    color: COLORS.primary,
  },
  lossValue: {
    color: COLORS.secondary,
  },
});
