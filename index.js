/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Login from './src/ui/Login';
import {name as appName} from './app.json';
import HomePage from './src/ui/HomePage';
import AddItemScreen from './src/ui/AddItemScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MainApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={HomePage} />
        <Stack.Screen name='AddItem' component={AddItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

AppRegistry.registerComponent(appName, () => MainApp);
