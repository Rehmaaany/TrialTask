/**
 * TradingScreen
 * Main trading screen component - Pure UI with no business logic
 * All logic is handled by the useTradingScreen hook
 */

import React from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

// Components
import { Header } from '../../components';
import {
  PriceDisplay,
  Chart,
  TimeFilter,
  TradePanel,
  PositionsList,
  PositionModal,
} from './components';

// Hooks
import { useTradingScreen } from '../../hooks';

// Constants
import { CRYPTO_PAIR } from '../../constants/trading.constants';

export function TradingScreen() {
  const {
    // Chart data
    normalizedData,
    timeFilters,
    activeFilter,
    isLoading,
    handleFilterChange,

    // Price data
    price,

    // Trading data
    tradeOrder,
    balance,
    isBuyActive,
    isMarketOrder,
    handleTradeTypeChange,
    handleOrderTypeChange,
    handleAmountChange,
    handleSliderChange,
    handleLeverageChange,
    handleAssetChange,

    // Positions data
    positions,
    activeTab,
    positionTabs,
    selectedPosition,
    isModalVisible,
    hideOtherPairs,
    handleTabChange,
    handlePositionPress,
    handleCloseModal,
    handleCancelPosition,
    toggleHideOtherPairs,

    // Navigation
    handleGoBack,
    handleOpenSettings,
  } = useTradingScreen();

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}
      <Header
        title={CRYPTO_PAIR.symbol}
        onBackPress={handleGoBack}
        onSettingsPress={handleOpenSettings}
      />

      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        {/* Price Display */}
        <PriceDisplay priceData={price} />

        {/* Chart Section */}
        <View style={styles.chartSection}>
          <Chart normalizedData={normalizedData} isLoading={isLoading} />
          <TimeFilter
            filters={timeFilters}
            activeFilterId={activeFilter}
            onFilterChange={handleFilterChange}
          />
        </View>

        {/* Trade Panel */}
        <View style={styles.tradePanelSection}>
          <TradePanel
            tradeOrder={tradeOrder}
            balance={balance}
            isBuyActive={isBuyActive}
            isMarketOrder={isMarketOrder}
            onTradeTypeChange={handleTradeTypeChange}
            onOrderTypeChange={handleOrderTypeChange}
            onAmountChange={handleAmountChange}
            onSliderChange={handleSliderChange}
            onLeverageChange={handleLeverageChange}
            onAssetChange={handleAssetChange}
          />
        </View>

        {/* Positions List */}
        <View style={styles.positionsSection}>
          <PositionsList
            positions={positions}
            activeTab={activeTab}
            tabs={positionTabs}
            hideOtherPairs={hideOtherPairs}
            onTabChange={handleTabChange}
            onPositionPress={handlePositionPress}
            onToggleHideOtherPairs={toggleHideOtherPairs}
          />
        </View>
      </ScrollView>

      {/* Position Modal */}
      <PositionModal
        visible={isModalVisible}
        position={selectedPosition}
        onClose={handleCloseModal}
        onCancel={handleCancelPosition}
      />
    </SafeAreaView>
  );
}
