/**
 * PriceDisplay Component Styles
 */

import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../constants/trading.constants';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  price: {
    fontSize: 36,
    fontWeight: '700',
    color: COLORS.textPrimary,
    letterSpacing: 0.5,
  },
  changeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  changeText: {
    fontSize: 15,
    fontWeight: '500',
  },
  positiveChange: {
    color: COLORS.primary,
  },
  negativeChange: {
    color: COLORS.secondary,
  },
});
