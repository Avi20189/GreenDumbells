import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect } from 'react';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import LogoScreen from './screens/LogoScreen';
import DemoPic1 from './screens/Trackers';
import PushNotifications from './screens/PushNotifications';
import Exercise from './screens/Exercise';
import { createNavigationContainerRef } from '@react-navigation/native';



const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const navigationRef = createNavigationContainerRef();
function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

function AppStart() {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="Profile" component={LogoScreen} />
      <BottomTabs.Screen name="Tracker" component={DemoPic1} />
      <BottomTabs.Screen name="Notifications" component={PushNotifications} />
      <BottomTabs.Screen name="Exercise" component={Exercise} />

    </BottomTabs.Navigator>
  );
}
export default function App() {

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="AppStart" component={AppStart} />
          <Stack.Screen name="Tracker" component={DemoPic1} />
          <Stack.Screen name="PushNotifications" component={PushNotifications} />
          <Stack.Screen name="Exercise" component={Exercise} />
        </Stack.Navigator>
      </NavigationContainer>

    </>
  );
}
