/**
 * Chart Component Styles
 * Styling for the price chart container and loading state
 */

import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../constants/trading.constants';

export const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginBottom: 16,
    alignItems: 'center',
  },
  loadingContainer: {
    height: 150,
    justifyContent: 'center',
  },
  loadingText: {
    color: COLORS.textSecondary,
    fontSize: 14,
  },
});
