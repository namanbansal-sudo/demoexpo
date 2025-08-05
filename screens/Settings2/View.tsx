import React from 'react';
import { View, Text, Button } from 'react-native';
import NavigationService from '../../app/services/NavigationService';

export default function Settings2Component() {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Settings 2</Text>
      <Button title="Settings 3" onPress={NavigationService.goToSettings3} />
      <View style={{ height: 16 }} />
      <Button title="Logout" color="red" onPress={NavigationService.goToLogin} />
    </View>
  );
} 