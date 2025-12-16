/**
 * TradingScreen Styles
 * Main screen layout styles
 */

import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/trading.constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  chartSection: {
    paddingBottom: 4,
  },
  tradePanelSection: {
    borderTopWidth: 0,
  },
  positionsSection: {
    flex: 1,
    minHeight: 200,
  },
});
