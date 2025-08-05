import { View, Text } from 'react-native'
import React from 'react'
import WithTabBarControl from '@/components/WithTabBarControl'
import HomeScreen from '@/screens/HomeScreen/View'

export default function index() {
  return (
    <WithTabBarControl>
      <HomeScreen />
    </WithTabBarControl>
  )
}