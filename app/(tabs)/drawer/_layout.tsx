import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Home',
            title: 'Overview',
          }}
        />
        <Drawer.Screen
          name="profile"
          options={{
            drawerLabel: 'User',
            title: 'User Profile',
          }}
        />
        <Drawer.Screen
          name="setting"
          options={{
            drawerLabel: 'Setting',
            title: 'setting',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
