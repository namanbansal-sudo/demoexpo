import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import NavigationService from '@/app/services/NavigationService';
import ROUTES from '@/app/services/NavigationService';
import * as Haptics from 'expo-haptics';

interface CardProps {
  iconName: keyof typeof Ionicons.glyphMap;
  name: string;
  route: keyof typeof ROUTES;
}

export function Card({ iconName, name, route }: CardProps) {
  const colorScheme = useColorScheme();

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

    switch (route) {
      case 'TABS_HOME':
        NavigationService.goToHome();
        break;
      case 'TABS_PROFILE':
        NavigationService.goToProfile();
        break;
      case 'SETTINGS1':
        NavigationService.goToSettings1();
        break;
      case 'SETTINGS2':
        NavigationService.goToSettings2();
        break;
      case 'SETTINGS3':
        NavigationService.goToSettings3();
        break;
      case 'SETTINGS4':
        NavigationService.goToSettings4();
        break;
      default:
        NavigationService.navigate(ROUTES[route]);
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.card,
        {
          backgroundColor: Colors[colorScheme ?? 'light'].background,
          shadowColor: Colors[colorScheme ?? 'light'].shadow,
        },
      ]}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <View style={styles.content}>
        <Ionicons
          name={iconName}
          size={32}
          color={Colors[colorScheme ?? 'light'].tint}
        />
        <Text
          style={[
            styles.name,
            { color: Colors[colorScheme ?? 'light'].text },
          ]}
        >
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 80,
    height: 80,
    borderRadius: 12,
    margin: 8,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});