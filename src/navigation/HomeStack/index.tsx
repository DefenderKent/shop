import React from 'react';

import {Stack} from '../RootNavigation';
import {LoginScreen} from '../../screens/LoginScreen';
import {NavigationPages} from '../pages';
import {HomeScreen} from '../../screens';

export const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {backgroundColor: '#fff'},
        headerLeft: () => null,
        headerTitle: 'Root',
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name={NavigationPages.homeScreen} component={HomeScreen} />

      <Stack.Screen
        name={NavigationPages.loginScreen}
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
};
