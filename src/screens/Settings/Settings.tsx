import React from 'react';
import {View, Text, Alert} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {DATA} from '../../../data';
import {Post} from '../../components/Post';

import {HeaderTitle} from '@react-navigation/stack';

interface FavoriteProps {}
export const Settings: React.FC<FavoriteProps> = ({navigation}) => {
  const goToPost = (post) => {
    navigation.navigate('PostCard', {post});
  };
  return (
    <View>
      <Text>Settings</Text>
      <FlatList
        data={DATA.filter((i) => i.booked)}
        keyExtractor={(item) => item.id.toString()}
        renderItem={(item) => <Post data={item.item} onOpen={goToPost} />}
      />
    </View>
  );
};
