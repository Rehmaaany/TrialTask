/**
 * Crypto Trading App
 * Main entry point for the application
 *
 * @format
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TradingScreen } from './src/screens';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#0D1421" />
      <TradingScreen />
    </SafeAreaProvider>
  );
}

export default App;
