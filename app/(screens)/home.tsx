import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from '@/screens/HomeScreen/View'

export default function index() {
  const userName = (global as any).userName || 'Guest';
  
  return (
    <HomeScreen userName={userName} />
  )
} 