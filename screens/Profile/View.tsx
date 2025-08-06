import { Counter } from '@/components/Counter';
import { ProfileDetailsCard } from '@/components/ProfileDetailsCard';
import { Colors } from '@/constants/Colors';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { BackHandler, Button, View } from 'react-native';
import NavigationService from '../../app/services/NavigationService';

export default function ProfileScreenComponent() {
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {

        const navState = navigation.getState?.();
        const drawerRoute = navState?.routes?.find((route: any) => route.name === 'drawer');
        if (drawerRoute?.state?.routes?.some((r: any) => r.name === 'profile')) {
          NavigationService.navigate('drawer', { screen: 'index' });
          return true;
        }
        NavigationService.navigate('index');
        return true;
      };

      const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => subscription.remove();
    }, [navigation])
  );

  const userName = (global as any).userName || 'Guest';
  const email = (global as any).userEmail || `${userName}@example.com`;
  const [count, setCount] = useState(1);

  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
      <ProfileDetailsCard name={userName} email={email} />
      <Counter
        count={count}
        onIncrement={() => setCount(count + 1)}
        onDecrement={() => setCount(count - 1)}
        minValue={0}
        maxValue={99}
      />
      <View style={{ height: 32}} />
      <Button title="Settings 1" onPress={NavigationService.goToSettings1} color={Colors.light.tint}/>
      <View style={{ height: 16 }} />
      <Button title="Back" onPress={NavigationService.back} color={Colors.light.tint}/>
      <View style={{ height: 16 }} />
      <Button title="Logout" color="red" onPress={NavigationService.goToLogin} />
    </View>
  );
} 