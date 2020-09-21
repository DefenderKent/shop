import react from 'react';
import {View, Text} from 'react-native';
import {styles} from './style';
interface ScreenMainProps {}
export const ScreenMain: React.FC<ScreenMainProps> = () => {
  return (
    <View>
      <Text style={styles.title}>MainScreen</Text>
    </View>
  );
};
