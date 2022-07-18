import { StyleSheet, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Logo from '../assets/images/Logo.png';
import Exercise from './screens/Exercise';
import { createNavigationContainerRef } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';

const navigationRef = createNavigationContainerRef();
function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export default function TabOneScreen() {
  return (
    <View>
      <Image style={styles.LogoStyle}
        source={Logo}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  LogoStyle: {
    marginTop: 200,
    marginLeft: 100,
    alignItems: 'center',
    width: '40%',
    height: '40%'

  }
});
