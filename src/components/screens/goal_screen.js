import Map from '../map';
import React from 'react';
import { connect } from 'react-redux';
import {Provider} from 'react-redux';
import store from '../../store/store';
import { Text, StyleSheet, Image, Button,PermissionsAndroid, SafeAreaView, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import GoalListItem from '../goal_list_item';
import { getGoals, deleteGoal } from '../../actions/goals';
import { Container } from 'native-base';


export class GoalScreen extends React.Component{
    state = {
        goals: [],
    }

    styles = StyleSheet.create({
        message: {
          alignItems: 'center',
          padding: 16,
        }
      })

    componentDidMount() {
        this.props.getGoals();
    }

    render(){
        console.log(this.props.goals);
        if (this.props.goals.length === 0) {
            return (
              <Container style={this.styles.message}>
                <Text>Welcome {this.state.loadedName}!</Text>
                <Text>You do not have any goals yet, click the "+" button at the top to start a new goal.</Text>
              </Container>
            )
          }
      return(
        <Provider store = {store}>
            <FlatList
                data={this.props.goals}
                renderItem = {({item}) => (
                    <GoalListItem
                        goal={item}
                        navigation={this.props.navigation}
                        deleteGoal={this.props.deleteGoal}
                    />
                )}
                keyExtractor = {item => `goal_${item.id}`}
            />
        </Provider>
    )
  }
}

select = (storeState) => {
    return {
      goals: storeState.goals,
    }
  };
  
  // select = ({ todos }) => ({ todos });
  
  export default connect(select, { getGoals, deleteGoal })(GoalScreen);