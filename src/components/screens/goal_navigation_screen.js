import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CreateGoalScreen from './create_goal_screen';
import GoalScreen from './goal_screen';
import {Provider} from 'react-redux';
import store from '../../store/store'
import { Button, Text, Container } from 'native-base';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();

export default class GoalNavigationScreen extends React.Component{
  render(){
    return(
      <Provider store = {store}>
          <Stack.Navigator>
            <Stack.Screen
              name = "Goal"
              component = {GoalScreen}
              options={({ navigation}) => ({
                headerRight: () => (
                  <Container>
                    <Button transparent onPress={() => navigation.navigate('Create Goal')}>
                      <Text style = {{fontWeight: 'bold', fontSize:24}}>+</Text>
                    </Button>
                  </Container>
                )
              })}/>
            <Stack.Screen
              name = "Create Goal"
              component = {CreateGoalScreen}/>
          </Stack.Navigator>
      </Provider>
    );
  }
}