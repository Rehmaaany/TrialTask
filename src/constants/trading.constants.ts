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

// Realistic chart data mimicking actual BTC price movements
export const MOCK_CHART_DATA: ChartDataPoint[] = [
  { timestamp: 1, price: 85200 },
  { timestamp: 2, price: 85450 },
  { timestamp: 3, price: 85100 },
  { timestamp: 4, price: 85600 },
  { timestamp: 5, price: 85350 },
  { timestamp: 6, price: 85800 },
  { timestamp: 7, price: 85500 },
  { timestamp: 8, price: 85250 },
  { timestamp: 9, price: 85700 },
  { timestamp: 10, price: 85400 },
  { timestamp: 11, price: 85150 },
  { timestamp: 12, price: 85550 },
  { timestamp: 13, price: 85900 },
  { timestamp: 14, price: 85650 },
  { timestamp: 15, price: 86100 },
  { timestamp: 16, price: 85800 },
  { timestamp: 17, price: 86300 },
  { timestamp: 18, price: 86000 },
  { timestamp: 19, price: 85700 },
  { timestamp: 20, price: 86200 },
  { timestamp: 21, price: 85950 },
  { timestamp: 22, price: 86400 },
  { timestamp: 23, price: 86150 },
  { timestamp: 24, price: 86600 },
  { timestamp: 25, price: 86350 },
  { timestamp: 26, price: 86800 },
  { timestamp: 27, price: 86500 },
  { timestamp: 28, price: 86250 },
  { timestamp: 29, price: 86700 },
  { timestamp: 30, price: 87000 },
  { timestamp: 31, price: 86750 },
  { timestamp: 32, price: 87200 },
  { timestamp: 33, price: 86900 },
  { timestamp: 34, price: 87400 },
  { timestamp: 35, price: 87100 },
  { timestamp: 36, price: 87600 },
  { timestamp: 37, price: 87300 },
  { timestamp: 38, price: 87800 },
  { timestamp: 39, price: 87500 },
  { timestamp: 40, price: 88000 },
  { timestamp: 41, price: 87700 },
  { timestamp: 42, price: 88200 },
  { timestamp: 43, price: 87900 },
  { timestamp: 44, price: 88400 },
  { timestamp: 45, price: 88100 },
  { timestamp: 46, price: 88600 },
  { timestamp: 47, price: 88300 },
  { timestamp: 48, price: 88800 },
  { timestamp: 49, price: 89100 },
  { timestamp: 50, price: 88700 },
  { timestamp: 51, price: 89300 },
  { timestamp: 52, price: 89000 },
  { timestamp: 53, price: 89500 },
  { timestamp: 54, price: 89200 },
  { timestamp: 55, price: 89700 },
  { timestamp: 56, price: 89400 },
  { timestamp: 57, price: 90000 },
  { timestamp: 58, price: 89600 },
  { timestamp: 59, price: 90200 },
  { timestamp: 60, price: 90467 },
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
