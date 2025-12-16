/**
 * Header Component Styles
 */

import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/trading.constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: COLORS.background,
    position: 'relative',
  },
  leftButton: {
    position: 'absolute',
    left: 16,
    padding: 4,
  },
  rightButton: {
    position: 'absolute',
    right: 16,
    padding: 4,
  },
  backArrow: {
    color: COLORS.textPrimary,
    fontSize: 24,
    fontWeight: '300',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  cryptoIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#F7931A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cryptoIconText: {
    color: COLORS.textPrimary,
    fontSize: 16,
    fontWeight: '700',
  },
  title: {
    color: COLORS.textPrimary,
    fontSize: 18,
    fontWeight: '600',
  },
  settingsIcon: {
    color: COLORS.textPrimary,
    fontSize: 22,
  },
});
