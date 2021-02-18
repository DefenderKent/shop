import React from 'react';
import {View, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import {NavigationPages} from '../../navigation/pages';
import {IRootRoute, RootStackParamList} from '../../navigation/interfaces';

interface IProps {
  navigation: StackNavigationProp<RootStackParamList>;
  route: IRootRoute<NavigationPages.homeScreen>;
}
export const HomeScreen: React.FC<IProps> = ({navigation, route}: IProps) => {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};
