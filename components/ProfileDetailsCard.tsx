import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';

interface ProfileDetailsCardProps {
  name: string;
  email?: string;
  avatarUrl?: string;
}

export function ProfileDetailsCard({ name, email, avatarUrl }: ProfileDetailsCardProps) {
  const colorScheme = useColorScheme();

  return (
    <View
      style={[
        styles.card,
        { backgroundColor: Colors[colorScheme ?? 'light'].background, shadowColor: '#000' },
      ]}
    >
      <View style={styles.avatarContainer}>
        {avatarUrl ? (
          <Image source={{ uri: avatarUrl }} style={styles.avatar} />
        ) : (
          <View style={styles.avatarFallback}>
            <Ionicons name="person" size={40} color={Colors[colorScheme ?? 'light'].tint} />
          </View>
        )}
      </View>
      <View style={styles.detailsContainer}>
        <Text style={[styles.name, { color: Colors[colorScheme ?? 'light'].text }]}>{name}</Text>
        {email ? (
          <Text style={[styles.email, { color: Colors[colorScheme ?? 'light'].tabIconDefault }]}>{email}</Text>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 16,
    marginVertical: 40,
    marginHorizontal: 24,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
  avatarContainer: {
    marginRight: 16,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#eee',
  },
  avatarFallback: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 4,
  },
  email: {
    fontSize: 15,
    fontWeight: '400',
    opacity: 0.8,
  },
});
