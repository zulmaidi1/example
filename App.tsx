/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/Screens/Home/HomeScreen';
import DetailScreen from './components/Screens/Detail/DetailScreen';
import { StatusBar, View } from 'react-native';

const Stack = createStackNavigator();


function App(): React.JSX.Element {

  return (
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
  );
}

export default App;
