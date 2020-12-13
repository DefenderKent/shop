import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {ScreenMain} from '../../screens/MainSreen/ScreenMain';
import {AuthStack} from '../AuthStack';
import {HomeStack} from '../HomeStack';
import {navigationRef} from '../NavigationService';
import {RootNavigator} from '../RootNavigation';

export const Router: React.FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootNavigator isAuthorized={true != null} />
    </NavigationContainer>
  );
};
