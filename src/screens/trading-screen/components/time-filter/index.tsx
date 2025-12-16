/**
 * TimeFilter Component
 * Time period selector for chart data
 */

import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';
import { TimeFilter as TimeFilterType } from '../../../../types/trading.types';

interface TimeFilterProps {
  filters: TimeFilterType[];
  activeFilterId: string;
  onFilterChange: (filterId: string) => void;
}

export function TimeFilter({
  filters,
  activeFilterId,
  onFilterChange,
}: TimeFilterProps) {
  return (
    <View style={styles.container}>
      {filters.map(filter => {
        const isActive = filter.id === activeFilterId;

        return (
          <TouchableOpacity
            key={filter.id}
            style={[
              styles.filterButton,
              isActive ? styles.activeFilter : styles.inactiveFilter,
            ]}
            onPress={() => onFilterChange(filter.id)}
            accessibilityRole="button"
            accessibilityState={{ selected: isActive }}
          >
            <Text
              style={[
                styles.filterText,
                isActive ? styles.activeText : styles.inactiveText,
              ]}
            >
              {filter.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

