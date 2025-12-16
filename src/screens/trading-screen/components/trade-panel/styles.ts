/**
 * TradePanel Component Styles
 */

import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../constants/trading.constants';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  buttonsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  buyButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buyButtonActive: {
    backgroundColor: '#F0B90B',
  },
  buyButtonInactive: {
    backgroundColor: '#1E2A3B',
  },
  sellButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sellButtonActive: {
    backgroundColor: '#F0B90B',
  },
  sellButtonInactive: {
    backgroundColor: '#1E2A3B',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '600',
  },
  buttonTextActive: {
    color: '#000000',
  },
  buttonTextInactive: {
    color: '#6B7280',
  },
  leverageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E2A3B',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    gap: 6,
  },
  leverageText: {
    color: COLORS.textPrimary,
    fontSize: 14,
    fontWeight: '600',
  },
  leverageIcon: {
    color: COLORS.textPrimary,
    fontSize: 10,
  },
  orderTypeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  orderTypeTabs: {
    flexDirection: 'row',
    gap: 16,
  },
  orderTypeTab: {
    paddingVertical: 4,
  },
  orderTypeText: {
    fontSize: 15,
    fontWeight: '600',
  },
  activeOrderType: {
    color: COLORS.textPrimary,
  },
  inactiveOrderType: {
    color: COLORS.textSecondary,
  },
  balanceContainer: {
    alignItems: 'flex-end',
  },
  availableLabel: {
    fontSize: 11,
    color: COLORS.textSecondary,
  },
  balanceAmount: {
    fontSize: 14,
    color: COLORS.textPrimary,
    fontWeight: '600',
    marginTop: 2,
  },
  inputContainer: {
    marginTop: 12,
  },
  sliderContainer: {
    marginTop: 4,
  },
});
