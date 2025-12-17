/**
 * TimeFilter Component Styles
 */

import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../constants/trading.constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  filterButton: {
    paddingVertical: 7,
    paddingHorizontal: 16,
    borderRadius: 16,
    minWidth: 42,
    alignItems: 'center',
  },
  activeFilter: {
    backgroundColor: '#00D26A',
  },
  inactiveFilter: {
    backgroundColor: 'transparent',
  },
  filterText: {
    fontSize: 13,
    fontWeight: '500',
  },
  activeText: {
    color: '#FFFFFF',
  },
  inactiveText: {
    color: '#6B7280',
  },
});
