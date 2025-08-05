import React from 'react';
import { View, Text, Button } from 'react-native';
import NavigationService from '../../app/services/NavigationService';

export default function Settings1Component() {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Settings 1</Text>
      <Button title="Settings 2" onPress={NavigationService.goToSettings2} />
      <View style={{ height: 16 }} />
      <Button title="Logout" color="red" onPress={NavigationService.goToLogin} />
    </View>
  );
} 