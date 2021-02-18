import React, {useEffect} from 'react';
import {View, ActivityIndicator, Pressable, Text} from 'react-native';

interface AuthorizationScreen {}

export const AuthorizationScreen: React.FC<AuthorizationScreen> = ({}) => {
  useEffect(() => {});
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Pressable onPress={() => {}}>
        <Text>Pressss</Text>
      </Pressable>
    </View>
  );
};
