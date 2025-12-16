/**
 * Button Component Styles
 */

import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/trading.constants';

export const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: COLORS.primary,
  },
  secondary: {
    backgroundColor: COLORS.sellButton,
  },
  danger: {
    backgroundColor: COLORS.cancelButton,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  primaryText: {
    color: COLORS.textPrimary,
  },
  secondaryText: {
    color: COLORS.textSecondary,
  },
  dangerText: {
    color: COLORS.textPrimary,
  },
  outlineText: {
    color: COLORS.textPrimary,
  },
  fullWidth: {
    width: '100%',
  },
});

