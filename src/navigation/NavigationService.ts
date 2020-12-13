import React, {RefObject} from 'react';

import {StackActions, CompositeNavigationProp} from '@react-navigation/native';
import {IRootNav, Ref} from './interfaces';

export const navigationRef = new Ref<IRootNav>();
// let _navigator: NavigationScreenProp<any, any>;

function setTopLevelNavigator(
  navigationRef: CompositeNavigationProp<any, any>,
) {
  return navigationRef;
}

function navigate(routeName: string, params?: any) {
  navigationRef.current?.navigate(routeName, params);
}

function goBack(option = undefined) {
  // navigationRef.dispatch(NavigationActions.back(option));
  navigationRef.current?.goBack();
}

function push(...args) {
  navigationRef.current?.dispatch(StackActions.push(...args));
}

export default {
  navigate,
  setTopLevelNavigator,
  goBack,
  push,
};
