import { View, Text } from 'react-native'
import React from 'react'
import WithTabBarControl from '@/components/WithTabBarControl'
import Settings1Component from '@/screens/Settings1/View'

export default function setting() {
  return (
    <WithTabBarControl>
        <Settings1Component />
    </WithTabBarControl>
  )
}