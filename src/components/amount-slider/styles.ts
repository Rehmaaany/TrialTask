/**
 * AmountSlider Component Styles
 */

import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/trading.constants';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
    paddingHorizontal: 4,
  },
  track: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 24,
    position: 'relative',
  },
  lineBackground: {
    position: 'absolute',
    left: 8,
    right: 8,
    height: 2,
    backgroundColor: COLORS.border,
    top: 11,
  },
  lineActive: {
    position: 'absolute',
    left: 8,
    height: 2,
    backgroundColor: COLORS.primary,
    top: 11,
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    zIndex: 1,
  },
  dot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: COLORS.background,
    borderWidth: 2,
    borderColor: COLORS.border,
  },
  activeDot: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  filledDot: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
});
