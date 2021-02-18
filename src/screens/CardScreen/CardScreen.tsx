import React from 'react';
import {View, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {DATA} from '../../../data';
import {Post} from '../../components/Post';

import {StackNavigationProp} from '@react-navigation/stack';
import {IRootRoute, RootStackParamList} from '../../navigation/interfaces';
import {NavigationPages} from '../../navigation/pages';

interface IProps {
  navigation: StackNavigationProp<RootStackParamList>;
  route: IRootRoute<NavigationPages.postCard>;
}
export const CardSreen: React.FC<IProps> = ({navigation}) => {
  return (
    <View>
      <Text>MainScreen</Text>
      <FlatList
        data={DATA}
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
