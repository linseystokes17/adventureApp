import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigationScreen from './src/components/screens/home_navigation_screen.js';
import GoalNavigationScreen from './src/components/screens/goal_navigation_screen.js';
import {Provider} from 'react-redux';
import store from './src/store/store';
import { Button, Text, Container } from 'native-base';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default class App extends React.Component{
  render(){
    return(
      <Provider store = {store}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component = {HomeNavigationScreen}/>
            <Tab.Screen
              name = "Goal"
              component = {GoalNavigationScreen}/>
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}