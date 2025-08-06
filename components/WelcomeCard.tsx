import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface WelcomeCardProps {
  userName?: string;
  onPress?: () => void;
}

export function WelcomeCard({ userName = 'User', onPress }: WelcomeCardProps) {
  const colorScheme = useColorScheme();

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onPress?.();
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <TouchableOpacity
      style={[
        styles.card,
        {
          backgroundColor: Colors[colorScheme ?? 'light'].background,
          shadowColor: colorScheme === 'dark' ? '#000' : '#000',
          borderColor: Colors[colorScheme ?? 'light'].tint,
        },
      ]}
      onPress={handlePress}
      activeOpacity={0.8}
    >
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Ionicons
            name="hand-right"
            size={28}
            color={Colors[colorScheme ?? 'light'].tint}
          />
        </View>
        
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.greeting,
              { color: Colors[colorScheme ?? 'light'].text },
            ]}
          >
            {getGreeting()}!
          </Text>
          <Text
            style={[
              styles.userName,
              { color: Colors[colorScheme ?? 'light'].tint },
            ]}
          >
            {userName}
          </Text>
          <Text
            style={[
              styles.subtitle,
              { color: Colors[colorScheme ?? 'light'].text },
            ]}
          >
            Welcome back to the app
          </Text>
        </View>

        <View style={styles.chevronContainer}>
          <Ionicons
            name="chevron-forward"
            size={20}
            color={Colors[colorScheme ?? 'light'].tabIconDefault}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 100,
    borderRadius: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 6,
    borderWidth: 1,
    borderStyle: 'solid',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    gap: 16,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
  },
  textContainer: {
    flex: 1,
    gap: 4,
  },
  greeting: {
    fontSize: 18,
    fontWeight: '600',
  },
  userName: {
    fontSize: 22,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '400',
    opacity: 0.7,
  },
  chevronContainer: {
    padding: 4,
  },
});
