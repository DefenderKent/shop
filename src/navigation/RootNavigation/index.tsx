/* eslint-disable react/no-children-prop */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {RootStackParamList} from '../interfaces';
import {DrawerPages} from '../pages';

import {Tabs} from '../Tabs';
import {DrawerContent, Drawers} from '../Drawer';
import {noHeader} from '../helpers';

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
          options={noHeader}
        />
        {props.isAuthorized
          ? console.log('isAuthorized')
          : console.log('NotisAuthorized')}
      </Drawers.Navigator>
    );
  },
);
