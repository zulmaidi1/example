/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/Screens/Home/HomeScreen';
import DetailScreen from './src/Screens/Detail/DetailScreen';
import { StatusBar, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './src/redux/reducer';

const Stack = createStackNavigator();


function App(): React.JSX.Element {
  const store = createStore(rootReducer)

  return (
    <Provider store={store}>
      <View
        style={{flex: 1}}
      >
        <StatusBar backgroundColor="white" barStyle="dark-content"/> 
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Detail" component={DetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
}

export default App;
