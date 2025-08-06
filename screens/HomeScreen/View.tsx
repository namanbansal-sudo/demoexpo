import { Card } from '@/components/card';
import { WelcomeCard } from '@/components/WelcomeCard';
import { Counter } from '@/components/Counter';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import { ScrollView, View } from 'react-native';
import styles from './Styles';
import { useState } from 'react';

export default function HomeScreen(props: any) {
  const colorScheme = useColorScheme();
  const userName = (global as any).userName || 'Guest';

  const [count, setCount] = useState(1);

  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: Colors[colorScheme ?? 'light'].background },
      ]}
      showsVerticalScrollIndicator={false}
    >
      <WelcomeCard 
        userName={userName} 
        onPress={() => {
          console.log('Welcome card pressed');
        }} 
      />

      <View style={{ alignItems: 'center', marginVertical: 16 }}>
        <Counter
          count={count}
          onIncrement={() => setCount(count + 1)}
          onDecrement={() => setCount(count - 1)}
          minValue={0}
          maxValue={99}
        />
      </View>
      
      <View style={styles.cardsContainer}>
        <Card iconName="home" name="Home" route="TABS_HOME" />
        <Card iconName="person" name="Profile" route="TABS_PROFILE" />
        <Card iconName="settings" name="Settings" route="SETTINGS1" />
      </View>
    </ScrollView>
  );
}
