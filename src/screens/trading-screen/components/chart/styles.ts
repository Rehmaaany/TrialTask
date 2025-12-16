/**
 * Chart Component Styles
 */

import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../constants/trading.constants';

export const styles = StyleSheet.create({
  container: {
    height: 180,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  chartArea: {
    flex: 1,
    position: 'relative',
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    color: COLORS.textSecondary,
    fontSize: 14,
  },
  chartLine: {
    position: 'absolute',
    height: 2,
    backgroundColor: COLORS.chartLine,
  },
  highlightDot: {
    position: 'absolute',
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: COLORS.chartLine,
    borderWidth: 3,
    borderColor: COLORS.textPrimary,
  },
});
