/**
 * TradePanel Component
 * Trading form with buy/sell buttons, leverage, and amount input
 */

import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, Text, Modal, Pressable, Dimensions } from 'react-native';
import { styles } from './styles';
import { InputField, AmountSlider } from '../../../../components';
import { TradeOrder, WalletBalance } from '../../../../types/trading.types';
import { formatNumber } from '../../../../utils/format.utils';
import { LEVERAGE_OPTIONS } from '../../../../constants/trading.constants';

interface TradePanelProps {
  tradeOrder: TradeOrder;
  balance: WalletBalance;
  isBuyActive: boolean;
  isMarketOrder: boolean;
  onTradeTypeChange: (type: 'buy' | 'sell') => void;
  onOrderTypeChange: (orderType: 'market' | 'limit') => void;
  onAmountChange: (amount: string) => void;
  onSliderChange: (value: number) => void;
  onLeverageChange: (leverage: string) => void;
  onAssetChange?: (asset: string) => void;
}

const ASSET_OPTIONS = ['BTC', 'ETH', 'USDT'];
const { width: SCREEN_WIDTH } = Dimensions.get('window');

export function TradePanel({
  tradeOrder,
  balance,
  isBuyActive,
  isMarketOrder,
  onTradeTypeChange,
  onOrderTypeChange,
  onAmountChange,
  onSliderChange,
  onLeverageChange,
  onAssetChange,
}: TradePanelProps) {
  const [showLeverageDropdown, setShowLeverageDropdown] = useState(false);
  const [showAssetDropdown, setShowAssetDropdown] = useState(false);
  const [leverageButtonPosition, setLeverageButtonPosition] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [assetButtonPosition, setAssetButtonPosition] = useState({ x: 0, y: 0, width: 0, height: 0 });

  const leverageButtonRef = useRef<View>(null);
  const assetButtonRef = useRef<View>(null);

  const handleLeverageSelect = (leverage: string) => {
    onLeverageChange(leverage);
    setShowLeverageDropdown(false);
  };

  const handleAssetSelect = (asset: string) => {
    if (onAssetChange) {
      onAssetChange(asset);
    }
    setShowAssetDropdown(false);
  };

  const openLeverageDropdown = () => {
    leverageButtonRef.current?.measureInWindow((x, y, width, height) => {
      setLeverageButtonPosition({ x, y, width, height });
      setShowLeverageDropdown(true);
    });
  };

  const openAssetDropdown = () => {
    assetButtonRef.current?.measureInWindow((x, y, width, height) => {
      setAssetButtonPosition({ x, y, width, height });
      setShowAssetDropdown(true);
    });
  };

  return (
    <View style={styles.container}>
      {/* Buy/Sell Buttons + Leverage */}
      <View style={styles.buttonsRow}>
        {/* Buy and Sell buttons on the left */}
        <View style={styles.leftButtons}>
          <TouchableOpacity
            style={[
              styles.buyButton,
              { backgroundColor: isBuyActive ? '#F0B90B' : '#1E2A3B' },
            ]}
            onPress={() => onTradeTypeChange('buy')}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.buttonText,
                { color: isBuyActive ? '#000000' : '#6B7280' },
              ]}
            >
              Buy
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.sellButton,
              { backgroundColor: !isBuyActive ? '#F0B90B' : '#1E2A3B' },
            ]}
            onPress={() => onTradeTypeChange('sell')}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.buttonText,
                { color: !isBuyActive ? '#000000' : '#6B7280' },
              ]}
            >
              Sell
            </Text>
          </TouchableOpacity>
        </View>

        {/* Leverage button with dropdown */}
        <View ref={leverageButtonRef} collapsable={false}>
          <TouchableOpacity
            style={styles.leverageButton}
            onPress={openLeverageDropdown}
          >
            <Text style={styles.leverageText}>{tradeOrder.leverage}</Text>
            <Text style={styles.leverageIcon}>▼</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Leverage Dropdown Modal */}
      <Modal
        visible={showLeverageDropdown}
        transparent
        animationType="none"
        onRequestClose={() => setShowLeverageDropdown(false)}
      >
        <Pressable
          style={styles.dropdownOverlay}
          onPress={() => setShowLeverageDropdown(false)}
        >
          <View
            style={[
              styles.leverageDropdown,
              {
                position: 'absolute',
                top: leverageButtonPosition.y + leverageButtonPosition.height + 4,
                right: SCREEN_WIDTH - leverageButtonPosition.x - leverageButtonPosition.width,
              },
            ]}
          >
            {LEVERAGE_OPTIONS.map((option, index) => (
              <React.Fragment key={option}>
                <TouchableOpacity
                  style={[
                    styles.dropdownItem,
                    tradeOrder.leverage === option && styles.dropdownItemSelected,
                  ]}
                  onPress={() => handleLeverageSelect(option)}
                >
                  <Text style={styles.dropdownItemText}>{option}</Text>
                </TouchableOpacity>
                {index < LEVERAGE_OPTIONS.length - 1 && (
                  <View style={styles.dropdownSeparator} />
                )}
              </React.Fragment>
            ))}
          </View>
        </Pressable>
      </Modal>

      {/* Order Type + Balance */}
      <View style={styles.orderTypeRow}>
        <View style={styles.orderTypeTabs}>
          <TouchableOpacity
            style={styles.orderTypeTab}
            onPress={() => onOrderTypeChange('market')}
          >
            <Text
              style={[
                styles.orderTypeText,
                isMarketOrder ? styles.activeOrderType : styles.inactiveOrderType,
              ]}
            >
              Market
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.orderTypeTab}
            onPress={() => onOrderTypeChange('limit')}
          >
            <Text
              style={[
                styles.orderTypeText,
                !isMarketOrder ? styles.activeOrderType : styles.inactiveOrderType,
              ]}
            >
              Limit
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.balanceContainer}>
          <Text style={styles.availableLabel}>Available</Text>
          <Text style={styles.balanceAmount}>
            {formatNumber(balance.available)} {balance.asset}
          </Text>
        </View>
      </View>

      {/* Amount Input with Asset Dropdown */}
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <View ref={assetButtonRef} collapsable={false} style={{ flex: 1 }}>
            <InputField
              value={tradeOrder.amount}
              onChangeText={onAmountChange}
              placeholder="Enter Amount"
              suffixText={tradeOrder.asset}
              showDropdown
              onSuffixPress={openAssetDropdown}
            />
          </View>
        </View>
      </View>

      {/* Asset Dropdown Modal */}
      <Modal
        visible={showAssetDropdown}
        transparent
        animationType="none"
        onRequestClose={() => setShowAssetDropdown(false)}
      >
        <Pressable
          style={styles.dropdownOverlay}
          onPress={() => setShowAssetDropdown(false)}
        >
          <View
            style={[
              styles.assetDropdown,
              {
                position: 'absolute',
                top: assetButtonPosition.y + assetButtonPosition.height + 4,
                right: 16,
              },
            ]}
          >
            {ASSET_OPTIONS.map((option, index) => (
              <React.Fragment key={option}>
                <TouchableOpacity
                  style={[
                    styles.dropdownItem,
                    tradeOrder.asset === option && styles.dropdownItemSelected,
                  ]}
                  onPress={() => handleAssetSelect(option)}
                >
                  <Text style={styles.dropdownItemText}>{option}</Text>
                </TouchableOpacity>
                {index < ASSET_OPTIONS.length - 1 && (
                  <View style={styles.dropdownSeparator} />
                )}
              </React.Fragment>
            ))}
          </View>
        </Pressable>
      </Modal>

      {/* Amount Slider */}
      <View style={styles.sliderContainer}>
        <AmountSlider
          value={tradeOrder.sliderValue}
          onValueChange={onSliderChange}
        />
      </View>
    </View>
  );
}
