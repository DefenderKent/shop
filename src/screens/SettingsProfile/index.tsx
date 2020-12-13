import React from 'react';
import {View, Text, Alert} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {DATA} from '../../../data';
import {Post} from '../../components/Post';

import {HeaderTitle, StackNavigationProp} from '@react-navigation/stack';
import {IconProps} from 'react-native-vector-icons/Icon';
import {NavigationPages} from '../../navigation/pages';
import {IRootRoute, RootStackParamList} from '../../navigation/interfaces';

interface IProps {
  navigation: StackNavigationProp<RootStackParamList>;
  route: IRootRoute<NavigationPages.home>;
}
export const SettingsProfile: React.FC<IProps> = ({
  navigation,
  route,
}: IProps) => {
  return (
    <View>
      <Text>SettingsProfile</Text>
    </View>
  );
};
