import * as React from 'react';
import {View, Text, Button} from 'react-native';

import {HeaderBackButton} from '@react-navigation/stack';
import {styles} from './style';
interface ScreenMainProps {}
export const ScreenMain: React.FC<ScreenMainProps> = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'green'}}>
      <Text style={styles.title}>MainScreen</Text>
      <Button
        onPress={() => navigation.navigate('loginScreen')}
        title=" Go home"
      />
    </View>
  );
};
