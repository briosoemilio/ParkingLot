import React, {useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SetupScreen from '../screens/SetupScreen';
import MapScreen from '../screens/MapScreen';
import {Screen} from '../shared/screens';
import SplashScreen from '../screens/SplashScreen';
import ParkVehicleScreen from '../screens/ParkVehicleScreen';
import AllVehiclesScreen from '../screens/AllVehiclesScreen';
import {Navigation} from './NavigatorServices';

const SetupStack = createNativeStackNavigator();
const SetupStackNavigator = () => {
  return (
    <SetupStack.Navigator
      initialRouteName={Screen.SETUP_SCREEN}
      screenOptions={{headerShown: false}}>
      <SetupStack.Screen name={Screen.SETUP_SCREEN} component={SetupScreen} />
    </SetupStack.Navigator>
  );
};

const MainStack = createNativeStackNavigator();
const MainStackNavigator = () => {
  return (
    <MainStack.Navigator
      initialRouteName={Screen.MAP_SCREEN}
      screenOptions={{headerShown: false}}>
      <MainStack.Screen name={Screen.MAP_SCREEN} component={MapScreen} />
      <MainStack.Screen
        name={Screen.PARK_VEHICLE_SCREEN}
        component={ParkVehicleScreen}
      />
      <MainStack.Screen
        name={Screen.ALL_VEHICLE_SCREEN}
        component={AllVehiclesScreen}
      />
    </MainStack.Navigator>
  );
};

const RootStack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer
      ref={navigatorRef => Navigation.setTopLevelNavigator(navigatorRef)}>
      <RootStack.Navigator
        initialRouteName={Screen.SPLASH_SCREEN}
        screenOptions={{headerShown: false}}>
        {/* SPLASH SCREEN */}
        <RootStack.Screen
          name={Screen.SPLASH_SCREEN}
          component={SplashScreen}
        />

        {/* STACKS */}
        <RootStack.Screen
          name={Screen.MAIN_STACK}
          component={MainStackNavigator}
        />
        <RootStack.Screen
          name={Screen.SETUP_STACK}
          component={SetupStackNavigator}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
