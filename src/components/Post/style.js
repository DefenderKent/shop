import {StyleSheet} from 'react-native';
import {COLOR_THEM} from './../../style/style';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  textWrap: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    alignItems: 'center',
    width: '100%',
  },
  title: {color: COLOR_THEM.WHITE},
});
