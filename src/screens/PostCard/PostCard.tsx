import React, {useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {styles} from './style';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface PostCardProps {}
export const PostCard: React.FC<PostCardProps> = ({route, navigation}) => {
  const {post} = route.params;
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
  const updateHeader = () => navigation.setOptions({title: `Post ${post.id}`});
  const updateHeaderIcon = (post) => {
    post.booked &&
      navigation.setOptions({
        headerRight: () => (
          <>
            <TouchableOpacity
              onPress={() => console.log('asdasdas222')}
              style={{paddingHorizontal: 20}}>
              <Icon name="star" size={30} color="#fff" />
            </TouchableOpacity>
          </>
        ),
      });
  };

  useEffect(() => {
    updateHeader();
    updateHeaderIcon(post);
  }, []);
  return (
    <ScrollView>
      <ImageBackground
        style={{width: '100%', height: 300}}
        source={{uri: post.img}}></ImageBackground>
      <Text style={styles.title}>{post.text}</Text>
      <Button title="Удалить" onPress={removeHandler} />
    </ScrollView>
  );
};
