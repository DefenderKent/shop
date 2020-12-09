import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {AuthorizationScreen} from '../../screens';

export const AuthStack = () => {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {backgroundColor: '#fff'},
        headerShown: false,
      }}>
      <AuthStack.Screen
        name={'Auth'}
        component={AuthorizationScreen}
        options={{
          header: () => null,
        }}
      />
    </AuthStack.Navigator>
  );
};
