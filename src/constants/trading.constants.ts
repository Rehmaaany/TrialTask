/**
 * Trading Screen Constants
 * Static data and configuration values
 */

import { TimeFilter, Position, ChartDataPoint, PositionTabConfig } from '../types/trading.types';

export const CRYPTO_PAIR = {
  symbol: 'BTC / USDT',
  baseAsset: 'BTC',
  quoteAsset: 'USDT',
};

export const TIME_FILTERS: TimeFilter[] = [
  { id: '1', label: '1m', value: '1m' },
  { id: '2', label: '15m', value: '15m' },
  { id: '3', label: '1h', value: '1h' },
  { id: '4', label: '1d', value: '1d' },
  { id: '5', label: '1w', value: '1w' },
  { id: '6', label: '1M', value: '1M' },
];

export const LEVERAGE_OPTIONS = ['10x', '20x', '50x', '100x'];

export const DEFAULT_LEVERAGE = '100x';

export const SLIDER_STEPS = [0, 25, 50, 75, 100];

export const POSITION_TABS: PositionTabConfig[] = [
  { id: 'positions', label: 'Positions', count: 1 },
  { id: 'openOrders', label: 'Open Orders' },
];

// More realistic chart data that mimics the design pattern
export const MOCK_CHART_DATA: ChartDataPoint[] = [
  { timestamp: 1, price: 86500 },
  { timestamp: 2, price: 86800 },
  { timestamp: 3, price: 86400 },
  { timestamp: 4, price: 86900 },
  { timestamp: 5, price: 86600 },
  { timestamp: 6, price: 87100 },
  { timestamp: 7, price: 86700 },
  { timestamp: 8, price: 86300 },
  { timestamp: 9, price: 86800 },
  { timestamp: 10, price: 86500 },
  { timestamp: 11, price: 86900 },
  { timestamp: 12, price: 86600 },
  { timestamp: 13, price: 87000 },
  { timestamp: 14, price: 86700 },
  { timestamp: 15, price: 87200 },
  { timestamp: 16, price: 87500 },
  { timestamp: 17, price: 87100 },
  { timestamp: 18, price: 87600 },
  { timestamp: 19, price: 87300 },
  { timestamp: 20, price: 87800 },
  { timestamp: 21, price: 87400 },
  { timestamp: 22, price: 87000 },
  { timestamp: 23, price: 87500 },
  { timestamp: 24, price: 87900 },
  { timestamp: 25, price: 88200 },
  { timestamp: 26, price: 87800 },
  { timestamp: 27, price: 88400 },
  { timestamp: 28, price: 88100 },
  { timestamp: 29, price: 88700 },
  { timestamp: 30, price: 89200 },
  { timestamp: 31, price: 88800 },
  { timestamp: 32, price: 89500 },
  { timestamp: 33, price: 89100 },
  { timestamp: 34, price: 89800 },
  { timestamp: 35, price: 90467 },
];

export const MOCK_POSITIONS: Position[] = [
  {
    id: '1',
    pair: 'BTC/USDT',
    type: 'Long',
    leverage: '10x',
    unrealizedPnl: 127.32,
    unrealizedPnlPercent: 398.23,
    size: 0.034,
    sizeUsd: 3195.34,
    marginCross: 34.23,
    entryPrice: 80721.92,
    liqPrice: 80721.92,
    isProfit: true,
  },
];

export const MOCK_BALANCE = {
  asset: 'USDT',
  available: 2965.65,
};

export const MOCK_PRICE = {
  symbol: 'BTC / USDT',
  baseAsset: 'BTC',
  quoteAsset: 'USDT',
  price: 90467.87,
  changePercent: 6.58,
  isPositive: true,
};

export const COLORS = {
  background: '#0B0F1A',
  cardBackground: '#141B2D',
  primary: '#00D26A',
  secondary: '#FF4757',
  textPrimary: '#FFFFFF',
  textSecondary: '#6B7280',
  border: '#1E2A3B',
  inputBackground: '#141B2D',
  modalBackground: '#141B2D',
  chartLine: '#00D26A',
  buyButton: '#F0B90B',
  sellButton: '#1E2A3B',
  cancelButton: '#FF4757',
};
