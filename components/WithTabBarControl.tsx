import { useDrawerStatus } from '@react-navigation/drawer';
import { useNavigation } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback } from 'react';

export default function WithTabBarControl({ children }: { children: React.ReactNode }) {
  const isDrawerOpen = useDrawerStatus() === 'open';
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      if (isDrawerOpen) {
        navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' } });
      } else {
        navigation.getParent()?.setOptions({ tabBarStyle: undefined });
      }

      return () => {
        navigation.getParent()?.setOptions({ tabBarStyle: undefined });
      };
    }, [isDrawerOpen])
  );

  return <>{children}</>;
}
