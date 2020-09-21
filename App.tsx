import * as React from 'react';
import {View, Text, Button, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ScreenMain} from './src/screens/MainSreen/ScreenMain';
import {CardSreen} from './src/screens/CardSreen/CardSreen';
import {COLOR_THEM} from './src/style/style';
import {PostCard} from './src/screens/PostCard/PostCard';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Favorite} from './src/screens/Favorite/Favorite';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  function StackNavigate() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: COLOR_THEM.MAIN_COLOR,
          },
          headerTintColor: COLOR_THEM.WHITE,
        }}>
        <Stack.Screen
          options={{
            title: 'Home',
          }}
          name="Home"
          component={ScreenMain}
        />
      </Stack.Navigator>
    );
  }
  function StackNavigateSetting() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: COLOR_THEM.MAIN_COLOR,
          },
          headerTintColor: COLOR_THEM.WHITE,
        }}>
        <Stack.Screen
          name="Card"
          component={CardSreen}
          options={{
            headerRight: () => (
              <>
                <TouchableOpacity
                  onPress={() => console.log('asdasdas')}
                  style={{paddingHorizontal: 20}}>
                  <Icon name="camera-alt" size={30} color="#fff" />
                </TouchableOpacity>
              </>
            ),
          }}
        />
        <Stack.Screen
          name="Post"
          component={PostCard}
          options={{
            headerRight: () => (
              <>
                <TouchableOpacity
                  onPress={() => console.log('asdasdas222')}
                  style={{paddingHorizontal: 20}}>
                  <Icon name="star-border" size={30} color="#fff" />
                </TouchableOpacity>
              </>
            ),
          }}
        />
      </Stack.Navigator>
    );
  }
  function StackNavigateFavorite() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: COLOR_THEM.MAIN_COLOR,
          },
          headerTintColor: COLOR_THEM.WHITE,
        }}>
        <Stack.Screen
          name="Favorite"
          component={Favorite}
          options={{
            headerRight: () => (
              <>
                <TouchableOpacity
                  onPress={() => console.log('asdasdas')}
                  style={{paddingHorizontal: 20}}>
                  <Icon name="camera-alt" size={30} color="#fff" />
                </TouchableOpacity>
              </>
            ),
          }}
        />
        <Stack.Screen
          name="Post"
          component={PostCard}
          options={{
            headerRight: () => (
              <>
                <TouchableOpacity
                  onPress={() => console.log('asdasdas222')}
                  style={{paddingHorizontal: 20}}>
                  <Icon name="star-border" size={30} color="#fff" />
                </TouchableOpacity>
              </>
            ),
          }}
        />
      </Stack.Navigator>
    );
  }
  function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={StackNavigate} />
        <Tab.Screen name="Favorite" component={StackNavigateFavorite} />
        <Tab.Screen name="Settings" component={StackNavigateSetting} />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

export default App;