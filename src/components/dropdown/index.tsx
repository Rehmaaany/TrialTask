/**
 * Dropdown Component
 * Reusable dropdown menu
 */

import React from 'react';
import { View, TouchableOpacity, Text, Modal, Pressable } from 'react-native';
import { styles } from './styles';

interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  visible: boolean;
  options: DropdownOption[];
  selectedValue: string;
  onSelect: (value: string) => void;
  onClose: () => void;
  anchorPosition?: { top: number; right: number };
}

export function Dropdown({
  visible,
  options,
  selectedValue,
  onSelect,
  onClose,
  anchorPosition,
}: DropdownProps) {
  if (!visible) return null;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <View
          style={[
            styles.dropdown,
            anchorPosition && {
              position: 'absolute',
              top: anchorPosition.top,
              right: anchorPosition.right,
            },
          ]}
        >
          {options.map((option, index) => (
            <React.Fragment key={option.value}>
              <TouchableOpacity
                style={[
                  styles.dropdownItem,
                  selectedValue === option.value && styles.dropdownItemSelected,
                ]}
                onPress={() => {
                  onSelect(option.value);
                  onClose();
                }}
              >
                <Text style={styles.dropdownItemText}>{option.label}</Text>
              </TouchableOpacity>
              {index < options.length - 1 && <View style={styles.separator} />}
            </React.Fragment>
          ))}
        </View>
      </Pressable>
    </Modal>
  );
}

