
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import First from './pages/First'
import Second from './pages/Second'

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={
          {
              gestureEnabled:true
          }
      }>
        <Stack.Screen name="FirstPage" component={First} />
        <Stack.Screen name="SecondPage" component={Second} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;