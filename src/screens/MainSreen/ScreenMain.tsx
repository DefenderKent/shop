import * as React from 'react';
import {View, Text, Button} from 'react-native';

import {HeaderBackButton} from '@react-navigation/stack';
import {styles} from './style';
interface ScreenMainProps {}
export const ScreenMain: React.FC<ScreenMainProps> = ({navigation}) => {
  return (
    <View>
      <Text style={styles.title}>MainScreen</Text>
      <Button
        onPress={() => navigation.navigate('Settings')}
        title=" Go home"
      />
    </View>
  );
};
