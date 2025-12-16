/**
 * useTrading Hook
 * Handles trading form state and order management
 */

import { useState, useCallback, useMemo } from 'react';
import { TradeOrder, WalletBalance, CryptoPrice } from '../types/trading.types';
import { MOCK_BALANCE, MOCK_PRICE, DEFAULT_LEVERAGE, LEVERAGE_OPTIONS } from '../constants/trading.constants';

interface UseTradingReturn {
  tradeOrder: TradeOrder;
  balance: WalletBalance;
  price: CryptoPrice;
  leverageOptions: string[];
  isBuyActive: boolean;
  isMarketOrder: boolean;
  handleTradeTypeChange: (type: 'buy' | 'sell') => void;
  handleOrderTypeChange: (orderType: 'market' | 'limit') => void;
  handleAmountChange: (amount: string) => void;
  handleSliderChange: (value: number) => void;
  handleLeverageChange: (leverage: string) => void;
  handleSubmitOrder: () => void;
}

export function useTrading(): UseTradingReturn {
  const [balance] = useState<WalletBalance>(MOCK_BALANCE);
  const [price] = useState<CryptoPrice>(MOCK_PRICE);

  const [tradeOrder, setTradeOrder] = useState<TradeOrder>({
    type: 'buy',
    orderType: 'market',
    amount: '',
    asset: 'BTC',
    leverage: DEFAULT_LEVERAGE,
    sliderValue: 0,
  });

  const isBuyActive = useMemo(() => tradeOrder.type === 'buy', [tradeOrder.type]);
  const isMarketOrder = useMemo(() => tradeOrder.orderType === 'market', [tradeOrder.orderType]);

  const handleTradeTypeChange = useCallback((type: 'buy' | 'sell') => {
    setTradeOrder(prev => ({ ...prev, type }));
  }, []);

  const handleOrderTypeChange = useCallback((orderType: 'market' | 'limit') => {
    setTradeOrder(prev => ({ ...prev, orderType }));
  }, []);

  const handleAmountChange = useCallback((amount: string) => {
    setTradeOrder(prev => ({ ...prev, amount }));
  }, []);

  const handleSliderChange = useCallback((value: number) => {
    setTradeOrder(prev => ({ ...prev, sliderValue: value }));
  }, []);

  const handleLeverageChange = useCallback((leverage: string) => {
    setTradeOrder(prev => ({ ...prev, leverage }));
  }, []);

  const handleSubmitOrder = useCallback(() => {
    // Handle order submission logic here
    console.log('Submitting order:', tradeOrder);
  }, [tradeOrder]);

  return {
    tradeOrder,
    balance,
    price,
    leverageOptions: LEVERAGE_OPTIONS,
    isBuyActive,
    isMarketOrder,
    handleTradeTypeChange,
    handleOrderTypeChange,
    handleAmountChange,
    handleSliderChange,
    handleLeverageChange,
    handleSubmitOrder,
  };
}

