import React from 'react';
import {View, Text, Alert, FlatList} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import {DATA} from './../../../data';
import {Post} from '../../components/Post';
import {NavigationPages} from '../../navigation/pages';
import {IRootRoute, RootStackParamList} from '../../navigation/interfaces';

interface IProps {
  navigation: StackNavigationProp<RootStackParamList>;
  route: IRootRoute<NavigationPages.settingsProfile>;
}
export const Favorite: React.FC<IProps> = ({navigation, route}: IProps) => {
  return (
    <View>
      <Text>Favorite</Text>
      <FlatList
        data={DATA.filter((i) => i.booked)}
        keyExtractor={(item) => item.id.toString()}
        renderItem={(item) => (
          <Post
            data={item.item}
            onOpen={() => {
              navigation.navigate(NavigationPages.settingsProfile);
            }}
          />
        )}
      />
    </View>
  );
};
