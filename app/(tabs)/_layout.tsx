import { router, Tabs } from 'expo-router';
import React from 'react';
import { Platform, TouchableOpacity } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {
            height: 60, // Set the height of the tab bar for Android
            paddingTop: 10, // Optional: add padding to the bottom
          },
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <IconSymbol size={24} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <IconSymbol size={24} name="magnifyingglass" color={color} />,
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <IconSymbol size={24} name="bell.circle" color={color} />,
        }}
      />
      
      <Tabs.Screen
        name="dummy-message"
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <TouchableOpacity onPress={() => router.push('/message')}>
              <Ionicons name='mail-outline' size={24} color={color} />
            </TouchableOpacity>
          ),
        }}
      />
    </Tabs>
  );
}
