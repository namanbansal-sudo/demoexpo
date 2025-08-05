import { Stack } from 'expo-router';

export default function ScreensLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen name="profile" options={{ headerShown: false }} />
      <Stack.Screen name="(settings/settings1)" options={{ headerShown: false }} />
      <Stack.Screen name="(settings/settings2)" options={{ headerShown: false }} />
      <Stack.Screen name="(settings/settings3)" options={{ headerShown: false }} />
      <Stack.Screen name="(settings/settings4)" options={{ headerShown: false }} />
    </Stack>
  );
} 