import React from 'react';
import { router } from 'expo-router';
import HomeScreenComponent from '@/screens/HomeScreen';

export default function HomeScreen() {
  const userName = (global as any).userName;

  if (!userName) {
    router.replace('/(screens)/login');
    return null;
  }

  return <HomeScreenComponent />;
} 