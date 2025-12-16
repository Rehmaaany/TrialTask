/**
 * Formatting Utility Functions
 * Helper functions for number and currency formatting
 */

export function formatCurrency(value: number, decimals: number = 2): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

export function formatNumber(value: number, decimals: number = 2): string {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

export function formatPercent(value: number): string {
  const sign = value >= 0 ? '+' : '';
  return `${sign}${value.toFixed(2)}%`;
}

export function formatPnl(value: number, percent: number): string {
  const sign = value >= 0 ? '+' : '';
  return `${sign}${formatNumber(value)} USDT / ${percent.toFixed(2)}%`;
}

export function formatSize(size: number, sizeUsd: number, asset: string): string {
  return `${size} ${asset} / $${formatNumber(sizeUsd)}`;
}

export function formatPrice(price: number): string {
  return formatNumber(price, 2);
}

