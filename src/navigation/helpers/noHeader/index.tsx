import {StackNavigationOptions} from '@react-navigation/stack';
import {Colors} from '../../../style/style';

export const noHeader: StackNavigationOptions = {
  headerShown: false,
  cardStyle: {backgroundColor: Colors.white},
};
