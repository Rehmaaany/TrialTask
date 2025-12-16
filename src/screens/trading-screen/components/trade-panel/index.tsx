/**
 * TradePanel Component
 * Trading form with buy/sell buttons, leverage, and amount input
 */

import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';
import { InputField, AmountSlider } from '../../../../components';
import { TradeOrder, WalletBalance } from '../../../../types/trading.types';
import { formatNumber } from '../../../../utils/format.utils';

interface TradePanelProps {
  tradeOrder: TradeOrder;
  balance: WalletBalance;
  isBuyActive: boolean;
  isMarketOrder: boolean;
  onTradeTypeChange: (type: 'buy' | 'sell') => void;
  onOrderTypeChange: (orderType: 'market' | 'limit') => void;
  onAmountChange: (amount: string) => void;
  onSliderChange: (value: number) => void;
  onLeveragePress?: () => void;
}

export function TradePanel({
  tradeOrder,
  balance,
  isBuyActive,
  isMarketOrder,
  onTradeTypeChange,
  onOrderTypeChange,
  onAmountChange,
  onSliderChange,
  onLeveragePress,
}: TradePanelProps) {
  return (
    <View style={styles.container}>
      {/* Buy/Sell Buttons + Leverage */}
      <View style={styles.buttonsRow}>
        <TouchableOpacity
          style={[
            styles.buyButton,
            isBuyActive ? styles.buyButtonActive : styles.buyButtonInactive,
          ]}
          onPress={() => onTradeTypeChange('buy')}
          activeOpacity={0.8}
        >
          <Text
            style={[
              styles.buttonText,
              isBuyActive ? styles.buttonTextActive : styles.buttonTextInactive,
            ]}
          >
            Buy
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.sellButton,
            !isBuyActive ? styles.sellButtonActive : styles.sellButtonInactive,
          ]}
          onPress={() => onTradeTypeChange('sell')}
          activeOpacity={0.8}
        >
          <Text
            style={[
              styles.buttonText,
              !isBuyActive ? styles.buttonTextActive : styles.buttonTextInactive,
            ]}
          >
            Sell
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.leverageButton} onPress={onLeveragePress}>
          <Text style={styles.leverageText}>{tradeOrder.leverage}</Text>
          <Text style={styles.leverageIcon}>▼</Text>
        </TouchableOpacity>
      </View>

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

      {/* Amount Input */}
      <View style={styles.inputContainer}>
        <InputField
          value={tradeOrder.amount}
          onChangeText={onAmountChange}
          placeholder="Enter Amount"
          suffixText={tradeOrder.asset}
          showDropdown
        />
      </View>

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
