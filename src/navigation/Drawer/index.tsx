import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {View, Text, Pressable} from 'react-native';

import {DrawerParamList} from '../interfaces';
import {navigationRef} from '../NavigationService';
import {TabPages} from '../pages';

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
