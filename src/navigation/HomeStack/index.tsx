/* eslint-disable react/display-name */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {ScreenMain} from '../../screens/MainSreen/ScreenMain';

export const HomeStack = () => {
  const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator
      screenOptions={{
        cardStyle: {backgroundColor: '#fff'},
        headerLeft: () => null,
        headerTitle: '2',
        headerTitleAlign: 'center',
      }}>
      <HomeStack.Screen name={'Home'} component={ScreenMain} />
    </HomeStack.Navigator>
  );
};
