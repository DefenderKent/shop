import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {styles} from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface PostType {
  data: {
    id: string;
    img: string;
    text: string;
    date: string;
    booked: boolean;
  };
  onOpen?: () => void;
}

export const Post: React.FC<PostType> = ({data, onOpen}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('adada', data);
        onOpen(data);
      }}>
      <View style={styles.container}>
        <ImageBackground style={styles.image} source={{uri: data.img}}>
          <View style={styles.textWrap}>
            <Text style={styles.title}>
              {new Date(data.date).toLocaleDateString()}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};
