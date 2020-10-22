import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Main, Post, Friends} from './pages';
// import First from './pages/First';
// import Second from './pages/Second';

// const First = () => (
//   <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>
//     First
//   </Text>
// );
// const Second = () => (
//   <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>
//     Second
//   </Text>
// );
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function MainComponent() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainPage" component={Main} />
      <Stack.Screen name="PostPage" component={Post} />
    </Stack.Navigator>
  );
}
function RouterTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="PostPage"
        tabBarOptions={{
          activeTintColor: 'purple',
        }}>
        <Tab.Screen
          name="FriendsPage"
          component={Friends}
          options={{title: 'Friends'}}
        />
        <Tab.Screen
          name="MainComponentPage"
          component={MainComponent}
          options={{title: 'Ana Sayfa'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default RouterTab;
