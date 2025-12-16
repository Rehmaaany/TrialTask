/**
 * Trading Screen Type Definitions
 * All interfaces for the crypto trading functionality
 */

export interface CryptoPrice {
  symbol: string;
  baseAsset: string;
  quoteAsset: string;
  price: number;
  changePercent: number;
  isPositive: boolean;
}

export interface ChartDataPoint {
  timestamp: number;
  price: number;
}

export interface TimeFilter {
  id: string;
  label: string;
  value: string;
}

export interface Position {
  id: string;
  pair: string;
  type: 'Long' | 'Short';
  leverage: string;
  unrealizedPnl: number;
  unrealizedPnlPercent: number;
  size: number;
  sizeUsd: number;
  marginCross: number;
  entryPrice: number;
  liqPrice: number;
  isProfit: boolean;
}

export interface TradeOrder {
  type: 'buy' | 'sell';
  orderType: 'market' | 'limit';
  amount: string;
  asset: string;
  leverage: string;
  sliderValue: number;
}

export interface WalletBalance {
  asset: string;
  available: number;
}

export type TabType = 'positions' | 'openOrders';

export interface PositionTabConfig {
  id: TabType;
  label: string;
  count?: number;
}

