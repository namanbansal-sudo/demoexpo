import React from 'react';
import { View, Text, Button } from 'react-native';
import NavigationService from '../../app/services/NavigationService';

export default function ProfileScreenComponent() {
  const userName = (global as any).userName || 'Guest';

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Profile</Text>
      <Text style={{ fontSize: 18, marginBottom: 32 }}>Hello, {userName}!</Text>
      <Button title="Settings 1" onPress={NavigationService.goToSettings1} />
      <View style={{ height: 16 }} />
      <Button title="Back" onPress={NavigationService.back} />
      <View style={{ height: 16 }} />
      <Button title="Logout" color="red" onPress={NavigationService.goToLogin} />
    </View>
  );
} 