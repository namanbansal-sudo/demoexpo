import NavigationService from '@/app/services/NavigationService';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { usePathname, useRouter } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function CustomDrawerContent(props: any) {
  const router = useRouter();
  const pathname = usePathname();
  
  const getActiveTab = () => {
    if (pathname.includes('/profile')) return 'profile';
    if (pathname.includes('/drawer')) return 'drawer';
    return 'index';
  };

  const activeTab = getActiveTab();

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Home"
        focused={activeTab === 'index'}
        onPress={() => NavigationService.navigate('/(tabs)')}
      />
      <DrawerItem
        label="User"
        focused={activeTab === 'profile'}
        onPress={() => NavigationService.navigate('/(tabs)/profile')}
      />
      <DrawerItem
        label="Settings"
        focused={activeTab === 'drawer'}
        onPress={() => NavigationService.navigate('/(tabs)/drawer')}
      />
    </DrawerContentScrollView>
  );
}

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: true,
        }}
      >
        <Drawer.Screen
          name="profile"
          options={{
            drawerLabel: 'Profile',
            title: 'Profile',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
