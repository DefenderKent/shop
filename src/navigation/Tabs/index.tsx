import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import {ImageURISource, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {CardSreen} from '../../screens/CardSreen/CardSreen';
import {Favorite} from '../../screens/Favorite/Favorite';
import {ScreenMain} from '../../screens/MainSreen/ScreenMain';
import {PostCard} from '../../screens/PostCard/PostCard';
import {Settings} from '../../screens/Settings/Settings';

import {HomeStack} from '../HomeStack';
import {MainTabParamList} from '../interfaces';
import {TabPages} from '../pages';

const Tab = createBottomTabNavigator<MainTabParamList>();

export function Tabs({}): JSX.Element {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={TabPages.tabHome}
        component={HomeStack}
        options={{
          tabBarLabel: 'home',
          tabBarIcon: ({focused, color}) => (
            <Icon
              size={30}
              name={focused ? 'home' : 'home'}
              style={{color: color}}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TabPages.favorites}
        component={Favorite}
        initialParams={{prefix: '_FAV'}}
        options={{
          tabBarLabel: 'favorites',
          tabBarIcon: ({focused, color}) => (
            <Icon
              size={30}
              name={focused ? 'star' : 'star-border'}
              style={{color: color}}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TabPages.messages}
        component={CardSreen}
        options={{
          tabBarLabel: 'search',
          tabBarIcon: ({focused, color}) => (
            <Icon
              name={focused ? 'search' : 'search'}
              size={30}
              style={{color: color}}
            />
          ),
        }}
      />
      {true && (
        <Tab.Screen
          name={TabPages.tabSettings}
          component={Settings}
          options={{
            tabBarLabel: 'setting',
            tabBarIcon: ({focused, color}) => (
              <Icon
                size={30}
                name={focused ? 'settings' : 'settings'}
                style={{color: color}}
              />
            ),
          }}
        />
      )}
    </Tab.Navigator>
  );
}
