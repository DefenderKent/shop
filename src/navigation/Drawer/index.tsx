import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';

import {ImageURISource, View, Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {CardSreen} from '../../screens/CardSreen/CardSreen';
import {Favorite} from '../../screens/Favorite/Favorite';
import {LoginScreen} from '../../screens/LoginScreen';
import {ScreenMain} from '../../screens/MainSreen/ScreenMain';
import {PostCard} from '../../screens/PostCard/PostCard';
import {Settings} from '../../screens/Settings/Settings';
import {HomeStack} from '../HomeStack';
import {DrawerParamList, MainTabParamList} from '../interfaces';
import {navigationRef} from '../NavigationService';
import {DrawerPages, TabPages} from '../pages';
import {Tabs} from '../Tabs';

export const Drawers = createDrawerNavigator<DrawerParamList>();
interface DrawerContentProps {
  isAuth: boolean;
}
export function DrawerContent({isAuth}: DrawerContentProps): JSX.Element {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Drawer content</Text>
      <Pressable
        onPress={() => {
          navigationRef.current?.navigate(TabPages.tabHome, {});
        }}>
        <Text>go to home boottom tab</Text>
      </Pressable>
      {isAuth && (
        <Pressable
          onPress={() => {
            navigationRef.current?.navigate(TabPages.tabSettings, {});
          }}>
          <Text>go to settings boottom tab</Text>
        </Pressable>
      )}
    </View>
  );
}
