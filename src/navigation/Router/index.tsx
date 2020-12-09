import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {ScreenMain} from '../../screens/MainSreen/ScreenMain';
import {AuthStack} from '../AuthStack';
import {HomeStack} from '../HomeStack';
import {navigationRef} from '../NavigationService';

export const Router: React.FC = () => {
  const AppStack = createStackNavigator();

  return (
    <NavigationContainer ref={navigationRef}>
      <AppStack.Navigator initialRouteName={'Auth'} headerMode="none">
        <AppStack.Screen name={'Auth'} component={AuthStack}></AppStack.Screen>
        <AppStack.Screen name={'Home'} component={HomeStack}></AppStack.Screen>
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
