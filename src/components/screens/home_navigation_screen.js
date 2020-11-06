import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AdventureScreen from './adventure_screen';
import HomeScreen from './home_screen';
import {Provider} from 'react-redux';
import store from '../../store/store'
import { Button, Text, Container } from 'native-base';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();

export default class HomeNavigationScreen extends React.Component{
  render(){
    return(
      <Provider store = {store}>
          <Stack.Navigator>
            <Stack.Screen
              name = "Home"
              component = {HomeScreen}
              options={({ navigation}) => ({
                headerRight: () => (
                  <Container>
                    <Button transparent onPress={() => navigation.navigate('Adventure')}>
                      <Text style = {{fontWeight: 'bold', fontSize:24}}>+</Text>
                    </Button>
                  </Container>
                )
              })}/>
            <Stack.Screen
              name = "Adventure"
              component = {AdventureScreen}/>
          </Stack.Navigator>
      </Provider>
    );
  }
}