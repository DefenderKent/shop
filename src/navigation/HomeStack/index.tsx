import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {ScreenMain} from '../../screens/MainSreen/ScreenMain';
import {Stack} from '../RootNavigation';
import {LoginScreen} from '../../screens/LoginScreen';
import {PostCard} from '../../screens/PostCard/PostCard';
import {NavigationPages} from '../pages';

export const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {backgroundColor: '#fff'},
        headerLeft: () => null,
        headerTitle: 'Root',
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name={NavigationPages.homeProfile} component={ScreenMain} />
      <Stack.Screen name={NavigationPages.postCard} component={PostCard} />
      <Stack.Screen
        name={NavigationPages.loginScreen}
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
};
