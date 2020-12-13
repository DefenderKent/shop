import React from 'react';
import {View, Text, Alert} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {DATA} from './../../../data';
import {Post} from '../../components/Post';

import {HeaderTitle} from '@react-navigation/stack';

interface CardSreenProps {}
export const CardSreen: React.FC<CardSreenProps> = ({navigation}) => {
  const goToPost = (post) => {
    navigation.navigate('PostCard', {post});
  };
  const removeHandler = () => {
    Alert.alert(
      'Удаление поста',
      'Вы точно хотите удалит',
      [
        {text: 'ask me later', onPress: () => console.log('ask me later')},
        {text: 'Cansel', onPress: () => console.log('Cansel')},
        {text: 'Ok', onPress: () => console.log('Ok')},
      ],
      {cancelable: false},
    );
  };
  return (
    <View>
      <Text>MainScreen</Text>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id.toString()}
        renderItem={(item) => <Post data={item.item} onOpen={goToPost} />}
      />
    </View>
  );
};
