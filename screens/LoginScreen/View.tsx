import { View, Text, Button, TextInput, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { styles } from './Styles';
import NavigationService from '@/app/services/NavigationService';

export default function Login(props: any) {


  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/react-logo.png')} style={styles.logo} />
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={props.email}
        onChangeText={props.setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={props.password}
        onChangeText={props.setPassword}
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Login"
          onPress={() => {
            const name = props.email || 'Guest';
            (global as any).userName = name;
            NavigationService.goToHome();
          }}
        />
      </View>
    </View>
  )
}
