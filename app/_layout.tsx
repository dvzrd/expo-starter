/* eslint-disable react/no-unstable-nested-components */
import '@/styles/tailwind.css';

import { FontAwesome } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { SplashScreen, Tabs } from 'expo-router';
import { memo, useEffect } from 'react';

import Icon from '@/components/Icon';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const AppLayoutNav = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="(proposals)"
        options={{
          title: 'Proposals',
          headerShown: false,
          tabBarIcon: ({ color }) => <Icon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          headerShown: false,
          tabBarIcon: ({ color }) => <Icon name="gear" color={color} />,
        }}
      />
    </Tabs>
  );
};

const AppLayout = memo(() => {
  const [loaded, error] = useFonts({
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <AppLayoutNav />;
});

export default AppLayout;
