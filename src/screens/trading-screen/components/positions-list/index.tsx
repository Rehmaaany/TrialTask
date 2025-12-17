/**
 * PositionsList Component
 * Displays list of positions with tabs and filters
 */

import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles';
import { PositionCard } from '../position-card/index';
import { Position, TabType, PositionTabConfig } from '../../../../types/trading.types';

interface PositionsListProps {
  positions: Position[];
  activeTab: TabType;
  tabs: PositionTabConfig[];
  hideOtherPairs: boolean;
  onTabChange: (tabId: TabType) => void;
  onPositionPress: (position: Position) => void;
  onToggleHideOtherPairs: () => void;
  onCancel?: () => void;
}

export function PositionsList({
  positions,
  activeTab,
  tabs,
  hideOtherPairs,
  onTabChange,
  onPositionPress,
  onToggleHideOtherPairs,
  onCancel,
}: PositionsListProps) {
  return (
    <View style={styles.container}>
      {/* Tabs Header */}
      <View style={styles.tabsContainer}>
        {tabs.map(tab => {
          const isActive = tab.id === activeTab;

          return (
            <TouchableOpacity
              key={tab.id}
              style={styles.tab}
              onPress={() => onTabChange(tab.id)}
            >
              <Text
                style={[
                  styles.tabText,
                  isActive && styles.activeTabText,
                ]}
              >
                {tab.label}
                {tab.count !== undefined && (
                  <Text style={styles.tabCount}> ({tab.count})</Text>
                )}
              </Text>
            </TouchableOpacity>
          );
        })}

        {/* Hide Other Pairs Toggle */}
        <TouchableOpacity
          style={styles.hideOtherPairsContainer}
          onPress={onToggleHideOtherPairs}
        >
          <View style={[styles.checkbox, hideOtherPairs && styles.checkboxActive]}>
            {hideOtherPairs && <Text style={styles.checkmark}>✓</Text>}
          </View>
          <Text style={styles.hideOtherPairsText}>Hide Other Pairs</Text>
        </TouchableOpacity>
      </View>

      {/* Positions List */}
      <ScrollView style={styles.listContainer} showsVerticalScrollIndicator={false}>
        {positions.length > 0 ? (
          positions.map(position => (
            <PositionCard
              key={position.id}
              position={position}
              onPress={onPositionPress}
              showFullDetails={true}
            />
          ))
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No positions</Text>
          </View>
        )}
      </ScrollView>

      {/* Cancel Button */}
      {onCancel && positions.length > 0 && (
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={onCancel}
          activeOpacity={0.8}
        >
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

