/**
 * TradePanel Component Styles
 */

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  buttonsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 0,
  },
  buyButton: {
    paddingVertical: 10,
    paddingHorizontal: 26,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sellButton: {
    paddingVertical: 10,
    paddingHorizontal: 26,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  leverageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E2A3B',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    gap: 5,
  },
  leverageText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },
  leverageIcon: {
    color: '#FFFFFF',
    fontSize: 9,
  },
  // Dropdown styles
  dropdownOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  leverageDropdown: {
    backgroundColor: '#1E2A3B',
    borderRadius: 8,
    paddingVertical: 4,
    minWidth: 100,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  assetDropdown: {
    backgroundColor: '#1E2A3B',
    borderRadius: 8,
    paddingVertical: 4,
    minWidth: 100,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  dropdownItemSelected: {
    backgroundColor: '#2A3A4B',
  },
  dropdownItemText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  dropdownSeparator: {
    height: 1,
    backgroundColor: '#2A3A4B',
    marginHorizontal: 8,
  },
  orderTypeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 14,
  },
  orderTypeTabs: {
    flexDirection: 'row',
    gap: 14,
  },
  orderTypeTab: {
    paddingVertical: 4,
  },
  orderTypeText: {
    fontSize: 14,
    fontWeight: '600',
  },
  activeOrderType: {
    color: '#FFFFFF',
  },
  inactiveOrderType: {
    color: '#6B7280',
  },
  balanceContainer: {
    alignItems: 'flex-end',
  },
  availableLabel: {
    fontSize: 10,
    color: '#6B7280',
  },
  balanceAmount: {
    fontSize: 13,
    color: '#FFFFFF',
    fontWeight: '600',
    marginTop: 2,
  },
  inputContainer: {
    marginTop: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
  },
  sliderContainer: {
    marginTop: 4,
  },
});
