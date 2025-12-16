/**
 * PositionModal Component Styles
 */

import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../../../constants/trading.constants';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: COLORS.cardBackground,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingTop: 12,
    paddingBottom: 24,
    paddingHorizontal: 16,
  },
  handle: {
    width: 36,
    height: 4,
    backgroundColor: COLORS.border,
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 12,
  },
  content: {
    marginBottom: 12,
  },
  cancelButton: {
    marginTop: 4,
    backgroundColor: COLORS.cancelButton,
  },
});
