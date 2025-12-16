/**
 * InputField Component Styles
 */

import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/trading.constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.inputBackground,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: 16,
    height: 52,
  },
  input: {
    flex: 1,
    color: COLORS.textPrimary,
    fontSize: 15,
    paddingVertical: 8,
  },
  placeholder: {
    color: COLORS.textSecondary,
  },
  suffix: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  suffixText: {
    color: COLORS.textPrimary,
    fontSize: 15,
    fontWeight: '500',
  },
  dropdownIcon: {
    color: COLORS.textSecondary,
    fontSize: 10,
  },
});
