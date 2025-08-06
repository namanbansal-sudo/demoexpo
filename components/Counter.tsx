import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface CounterProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  minValue?: number;
  maxValue?: number;
  size?: 'small' | 'medium' | 'large';
}

export function Counter({ 
  count, 
  onIncrement, 
  onDecrement, 
  minValue = 0, 
  maxValue = 999,
  size = 'medium' 
}: CounterProps) {
  const colorScheme = useColorScheme();

  const handleIncrement = () => {
    if (count < maxValue) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      onIncrement();
    }
  };

  const handleDecrement = () => {
    if (count > minValue) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      onDecrement();
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          button: { width: 28, height: 28 },
          icon: 16,
          text: 14,
          container: { gap: 8 }
        };
      case 'large':
        return {
          button: { width: 44, height: 44 },
          icon: 24,
          text: 20,
          container: { gap: 16 }
        };
      default: // medium
        return {
          button: { width: 36, height: 36 },
          icon: 20,
          text: 16,
          container: { gap: 12 }
        };
    }
  };

  const sizeStyles = getSizeStyles();

  return (
    <View style={[styles.container, sizeStyles.container]}>
      {/* Minus Button */}
      <TouchableOpacity
        style={[
          styles.button,
          sizeStyles.button,
          {
            backgroundColor: count > minValue 
              ? Colors[colorScheme ?? 'light'].tint 
              : Colors[colorScheme ?? 'light'].tabIconDefault,
            opacity: count > minValue ? 1 : 0.5,
          },
        ]}
        onPress={handleDecrement}
        disabled={count <= minValue}
        activeOpacity={0.7}
      >
        <Ionicons
          name="remove"
          size={sizeStyles.icon}
          color="white"
        />
      </TouchableOpacity>

      {/* Count Display */}
      <View style={styles.countContainer}>
        <Text
          style={[
            styles.countText,
            {
              color: Colors[colorScheme ?? 'light'].text,
              fontSize: sizeStyles.text,
            },
          ]}
        >
          {count}
        </Text>
      </View>

      {/* Plus Button */}
      <TouchableOpacity
        style={[
          styles.button,
          sizeStyles.button,
          {
            backgroundColor: count < maxValue 
              ? Colors[colorScheme ?? 'light'].tint 
              : Colors[colorScheme ?? 'light'].tabIconDefault,
            opacity: count < maxValue ? 1 : 0.5,
          },
        ]}
        onPress={handleIncrement}
        disabled={count >= maxValue}
        activeOpacity={0.7}
      >
        <Ionicons
          name="add"
          size={sizeStyles.icon}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  countContainer: {
    minWidth: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countText: {
    fontWeight: '600',
    textAlign: 'center',
  },
});
