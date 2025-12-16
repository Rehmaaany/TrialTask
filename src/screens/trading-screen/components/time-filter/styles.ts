/**
 * TimeFilter Component Styles
 */

import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../constants/trading.constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    minWidth: 50,
    alignItems: 'center',
  },
  activeFilter: {
    backgroundColor: '#F0B90B',
  },
  inactiveFilter: {
    backgroundColor: 'transparent',
  },
  filterText: {
    fontSize: 14,
    fontWeight: '600',
  },
  activeText: {
    color: '#000000',
  },
  inactiveText: {
    color: COLORS.textSecondary,
  },
});
