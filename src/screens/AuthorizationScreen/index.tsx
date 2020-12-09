import React, {useEffect} from 'react';
import {View, ActivityIndicator, Pressable, Text} from 'react-native';
import NavigationService from '../../navigation/NavigationService';

interface AuthorizationScreen {}

export const AuthorizationScreen: React.FC<AuthorizationScreen> = ({
  navigation,
}) => {
  useEffect(() => {
    navigation.navigate('Home');
  });
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Pressable
        onPress={() => {
          NavigationService.navigate('Home', {screen: 'Home'});
        }}>
        <Text>Pressss</Text>
      </Pressable>
    </View>
  );
};
