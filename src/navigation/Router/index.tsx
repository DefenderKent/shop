import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {navigationRef} from '../NavigationService';
import {RootNavigator} from '../RootNavigation';

export const Router: React.FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootNavigator isAuthorized={true != null} />
    </NavigationContainer>
  );
};
