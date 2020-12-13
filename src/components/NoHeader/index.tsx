import {StackNavigationOptions} from '@react-navigation/stack';

import {Colors, COLOR_THEM} from '../../style/style';

export const NoHeader: StackNavigationOptions = {
  headerShown: false,
  cardStyle: {backgroundColor: Colors.white},
};
