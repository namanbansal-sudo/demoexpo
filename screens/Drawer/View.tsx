import React from 'react';
import { View, Text, Button } from 'react-native';
import NavigationService from '../../app/services/NavigationService';

export default function DrawerScreenComponent() {
  const userName = (global as any).userName || 'Guest';

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Profile</Text>
      <Text style={{ fontSize: 18, marginBottom: 32 }}>Hello, {userName}!</Text>
      <Button title="Open Drawer" onPress={NavigationService.goToDrawer} />
    </View>
  );
} 