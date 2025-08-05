import React, { useState } from 'react'
import LoginScreen from '@/screens/LoginScreen/View'

export default function index() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <LoginScreen 
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
    />
  )
} 