import React from 'react';
import { View, Text, Button } from 'react-native';
import NavigationService from '../../app/services/NavigationService';

export default function Settings4Component() {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Settings 4</Text>
      <View style={{ height: 16 }} />
      <Button title="Go to Profile" color="red" onPress={() => NavigationService.goToProfile()} />
    </View>
  );
} 