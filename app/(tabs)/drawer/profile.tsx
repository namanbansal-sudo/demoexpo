import WithTabBarControl from '@/components/WithTabBarControl';
import ProfileScreenComponent from '@/screens/Profile/View';
import React from 'react';
import { View, Text } from 'react-native';

export default function ProfileScreen() {
  return (
    <WithTabBarControl>
      <ProfileScreenComponent />
    </WithTabBarControl>
  );
}
