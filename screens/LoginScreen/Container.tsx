import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Login from './View';

export default function Container() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  return (
    <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
  )
}