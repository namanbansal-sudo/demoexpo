import { View, Text } from 'react-native'
import React from 'react'
import WithTabBarControl from '@/components/WithTabBarControl'
import HomeScreen from '@/screens/HomeScreen/View'
import Settings1Component from '@/screens/Settings1/View'

export default function index() {
  return (
    <WithTabBarControl>
      <Settings1Component />
    </WithTabBarControl>
  )
}