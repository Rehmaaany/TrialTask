/**
 * ToggleButton Component Styles
 */

import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/trading.constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.inputBackground,
    borderRadius: 8,
    padding: 3,
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeButton: {
    backgroundColor: COLORS.primary,
  },
  inactiveButton: {
    backgroundColor: 'transparent',
  },
  sellActiveButton: {
    backgroundColor: COLORS.secondary,
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
  },
  activeText: {
    color: COLORS.textPrimary,
  },
  inactiveText: {
    color: COLORS.textSecondary,
  },
});
