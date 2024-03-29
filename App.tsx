import 'react-native-gesture-handler';
import './firebase';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect } from 'react';
import {View, SafeAreaView} from 'react-native';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import AllergyFood from './screens/AllergyFood';
import LogoScreen from './screens/LogoScreen';
import DemoScreenOne from './screens/DemoScreenOne';
import DemoScreenTwo from './screens/DemoScreenTwo';
import DemoScreenThree from './screens/DemoScreenThree';
import DieteryPreference from './screens/DieteryPreference';
import ExercisePlan from './screens/ExercisePlan';
import FitnessLevel from './screens/FitnessLevel';
import HealthIssue from './screens/HealthIssue';
import LanguageChoose from './screens/LanguageChoose';
import ModalScreen from './screens/ModalScreen';
import PhysicalDetails from './screens/PhysicalDetails';
import PushNotifications from './screens/PushNotifications';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import SignUpSignInPage from './screens/SignUpSignInPage';
import Trackers from './screens/Trackers';
import ExerciseRecord from './screens/ExerciseRecord';
import LetUsKnowYouBetter from './screens/LetUsKnowYouBetter';
import TargetBody from './screens/TargetBody';
import OtherQueries from './screens/OtherQueries';
import HomeScreen from './screens/HomeScreen';
import Otp from './screens/Otp';
import ProfileDetails from './screens/ProfileDetails';
import DietPlan from './screens/DietPlan';
import ExerciseDetails from './screens/ExerciseDetails';
import Warmup from './screens/Warmup';
import Shoulders from './screens/Shoulders';
import Chest from './screens/Chest';
import Abs from './screens/Abs';
import Arms from './screens/Arms';
import Glutes from './screens/Glutes';
import Legs from './screens/Legs';
import Stretching from './screens/Stretching';
import MyDairy from './screens/MyDairy';
import Consultation from './screens/Consultation';
import Help from './screens/Help';
import MYDAIRYNEXT from './screens/MyDairyNext';
import WORKOUTLOG from './screens/WorkoutLog';




import { createNavigationContainerRef } from '@react-navigation/native';
import { Block, Button, Text, theme } from "galio-framework";
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import MyDairyNext from './screens/MyDairyNext';
import WorkoutLog from './screens/WorkoutLog';

const BottomTabs = createBottomTabNavigator();

const AppStart = () => {
  return (
    
    <>
    <BottomTabs.Navigator initialRouteName = "profile"
     screenOptions={{
      headerShown: false,
    }}>
      <BottomTabs.Screen name="profile" component={LogoScreen} />
      <BottomTabs.Screen name="Tracker" component={Trackers} />
      <BottomTabs.Screen name="Record" component={ExerciseRecord} />
      <BottomTabs.Screen name="Notifications" component={PushNotifications} />
      <BottomTabs.Screen name="Exercise" component={Exercise} />
    </BottomTabs.Navigator>
    </>
  );
}

const Stack = createNativeStackNavigator();

function AppInitialScreens() {
  return (
    <View>Dodo duck</View>
  )
}

function AppLoggedInNavigation() {
  return (
    <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="DemoScreenOne" component={DemoScreenOne} />
          </Stack.Navigator>
  )
}

function AppLoggedOutNavigation({screens}: any) {
Object.entries({...screens}).map(([name, {component}]: any) => console.log(component))
  return (
    <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {Object.entries({
            ...screens
          }).map(([name, {component, options}]: any) => (
            <Stack.Screen key={name} name={name} component={component} options={options} />
          ))}
          </Stack.Navigator>
  )
}

const authScreen = {
  Language: {component: LanguageChoose, options: {}},
  DEMO_ONE: {component: DemoScreenOne, options: {}},
  DEMO_TWO: {component: DemoScreenTwo, options: {}},
  DEMO_THREE: {component: DemoScreenThree, options: {}},
  SIGNUP_SIGNIN: {component: SignUpSignInPage, options: {}},
  SIGNUP: {component: SignUp, options: {}},
  SIGNIN: {component: SignIn, options: {}},
  CLIENTDETAILSORHOME: {component: LetUsKnowYouBetter, options: {}},
  PHYSICALDETAILS: {component: PhysicalDetails, options: {}},
  DIETERYPREFERENCE: {component: DieteryPreference, options: {}},
  FITNESSLEVEL: {component: FitnessLevel, options: {}},
  TARGETBODY: {component: TargetBody, options: {}},
  HEALTHISSUE: {component: HealthIssue, options: {}},
  ALLERGYFOOD: {component: AllergyFood, options: {}},
  OTHERQUERIES: {component: OtherQueries, options: {}},
  HOMESCREEN: {component: HomeScreen, options: {}},
  OTP: {component: Otp, options: {}},
  PROFILEDETAILS: {component: ProfileDetails, options: {}},
  LOGOSCREEN: {component: LogoScreen, options: {}},
  DIETPLAN: {component: DietPlan, options: {}},
  EXERCISEPLAN: {component: ExercisePlan, options: {}},
  EXERCISEDETAILS: {component: ExerciseDetails, options: {}},
  WARMUP: {component: Warmup, options: {}},
  SHOULDERS: {component: Shoulders, options: {}},
  CHEST: {component: Chest, options: {}},
  ABS: {component: Abs, options: {}},
  ARMS: {component: Arms, options: {}},
  GLUTES: {component: Glutes, options: {}},
  LEGS: {component: Legs, options: {}},
  STRETCHING: {component: Stretching, options: {}},
  MYDAIRY: {component: MyDairy, options: {}},
  CONSULTATION: {component: Consultation, options: {}},
  HELP: {component: Help, options: {}},
  MYDAIRYNEXT: {component: MyDairyNext, options: {}},
  WORKOUTLOG: {component: WorkoutLog, options: {}},


}

function AppNavigation() {
  const isLoggedOut = true;

  if (isLoggedOut) {
    console.log("loading logged out screens");
    return <AppLoggedOutNavigation screens={authScreen} />
  }

  return <AppLoggedInNavigation />;
}

function GreenDumbellsApplication() {
  console.log("Loading Application");

  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  )
}

function App() {
  return (
    <>
      <GreenDumbellsApplication />
</>
  );
}

export default App;



{/* <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="DemoPic" component={DemoPic} />
          <Stack.Screen name="DemoScreenTwo" component={DemoScreenTwo} />
          <Stack.Screen name="DemoScreenThree" component={DemoScreenThree} />
          <Stack.Screen name="ExerciseRecord" component={ExerciseRecord} />
          <Stack.Screen name="DieteryPreference" component={DieteryPreference} />
          <Stack.Screen name="FitnessLevel" component={FitnessLevel} />
          <Stack.Screen name="HealthIssue" component={HealthIssue} />
          <Stack.Screen name="LanguageChoose" component={LanguageChoose} />
          <Stack.Screen name="ModalScreen" component={ModalScreen} />
          <Stack.Screen name="PhysicalDetails" component={PhysicalDetails} />
          <Stack.Screen name="PushNotifications" component={PushNotifications} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="SignUpSignInPage" component={SignUpSignInPage} />
        </Stack.Navigator>
      </NavigationContainer> */}