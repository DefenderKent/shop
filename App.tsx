/* eslint-disable react/display-name */
import * as React from 'react';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {Router} from './src/navigation/Router';

function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <Router />
    </>
  );
}

export default App;
