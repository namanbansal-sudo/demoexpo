import { View, Text, BackHandler } from 'react-native'
import React from 'react'
import { router, useFocusEffect } from 'expo-router';
import HomeScreen from './View';

export default function Container() {

    useFocusEffect(
        React.useCallback(() => {
          const onBackPress = () => {
            router.replace('/(tabs)');
            return true;
          };
          const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress);
          return () => subscription.remove();
        }, [])
      );
    
      const userName = (global as any).userName || 'Guest';

  return (
    <HomeScreen userName={userName}/>
  )
}