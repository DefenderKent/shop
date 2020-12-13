/* eslint-disable react/no-children-prop */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {View} from 'react-native';
import {DrawerParamList, RootStackParamList} from '../interfaces';
import {NavigationPages, DrawerPages} from '../pages';
import {ScreenMain} from '../../screens/MainSreen/ScreenMain';
import {NoHeader} from '../../components/NoHeader';
import {Tabs} from '../Tabs';
import {DrawerContent, Drawers} from '../Drawer';
import {HomeStack} from '../HomeStack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Settings} from '../../screens/Settings/Settings';

interface IProps {
  isAuthorized: boolean;
}
export const Stack = createStackNavigator<RootStackParamList>();

export const RootNavigator = React.memo(
  (props: IProps): JSX.Element => {
    return (
      <Drawers.Navigator
        drawerContent={() => <DrawerContent isAuth={props.isAuthorized} />}>
        <Drawers.Screen
          name={DrawerPages.home}
          component={Tabs}
          options={NoHeader}
        />
        {props.isAuthorized
          ? console.log('isAuthorized')
          : console.log('NotisAuthorized')}
      </Drawers.Navigator>
    );
  },
);
