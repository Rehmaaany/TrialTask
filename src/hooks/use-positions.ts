/**
 * usePositions Hook
 * Handles position data and position modal management
 */

import { useState, useCallback } from 'react';
import { Position, TabType } from '../types/trading.types';
import { MOCK_POSITIONS, POSITION_TABS } from '../constants/trading.constants';

interface UsePositionsReturn {
  positions: Position[];
  activeTab: TabType;
  positionTabs: typeof POSITION_TABS;
  selectedPosition: Position | null;
  isModalVisible: boolean;
  hideOtherPairs: boolean;
  handleTabChange: (tabId: TabType) => void;
  handlePositionPress: (position: Position) => void;
  handleCloseModal: () => void;
  handleCancelPosition: (positionId: string) => void;
  handleCancelAllPositions: () => void;
  toggleHideOtherPairs: () => void;
}

export function usePositions(): UsePositionsReturn {
  const [positions] = useState<Position[]>(MOCK_POSITIONS);
  const [activeTab, setActiveTab] = useState<TabType>('positions');
  const [selectedPosition, setSelectedPosition] = useState<Position | null>(null);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [hideOtherPairs, setHideOtherPairs] = useState<boolean>(false);

  const handleTabChange = useCallback((tabId: TabType) => {
    setActiveTab(tabId);
  }, []);

  const handlePositionPress = useCallback((position: Position) => {
    setSelectedPosition(position);
    setIsModalVisible(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalVisible(false);
    setSelectedPosition(null);
  }, []);

  const handleCancelPosition = useCallback((positionId: string) => {
    // Handle position cancellation logic here
    console.log('Cancelling position:', positionId);
    handleCloseModal();
  }, [handleCloseModal]);

  const toggleHideOtherPairs = useCallback(() => {
    setHideOtherPairs(prev => !prev);
  }, []);

  const handleCancelAllPositions = useCallback(() => {
    // Handle cancellation of all positions
    console.log('Cancelling all positions');
    // In a real app, this would call an API to cancel all positions
  }, []);

  return {
    positions,
    activeTab,
    positionTabs: POSITION_TABS,
    selectedPosition,
    isModalVisible,
    hideOtherPairs,
    handleTabChange,
    handlePositionPress,
    handleCloseModal,
    handleCancelPosition,
    handleCancelAllPositions,
    toggleHideOtherPairs,
  };
}

