/**
 * PositionModal Component
 * Modal for position details and cancellation
 */

import React from 'react';
import { View, TouchableOpacity, Modal } from 'react-native';
import { styles } from './styles';
import { PositionCard } from '../position-card/index';
import { Button } from '../../../../components';
import { Position } from '../../../../types/trading.types';

interface PositionModalProps {
  visible: boolean;
  position: Position | null;
  onClose: () => void;
  onCancel: (positionId: string) => void;
}

export function PositionModal({
  visible,
  position,
  onClose,
  onCancel,
}: PositionModalProps) {
  if (!position) return null;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <TouchableOpacity
          style={styles.modalContainer}
          activeOpacity={1}
          onPress={e => e.stopPropagation()}
        >
          <View style={styles.handle} />

          <View style={styles.content}>
            <PositionCard
              position={position}
              onPress={() => {}}
              showFullDetails
            />
          </View>

          <Button
            title="Cancel"
            variant="danger"
            fullWidth
            onPress={() => onCancel(position.id)}
            style={styles.cancelButton}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
}

