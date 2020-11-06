import Map from '../map';
import React from 'react';
import { connect } from 'react-redux';
import {Provider} from 'react-redux';
import store from '../../store/store';
import { Text, StyleSheet, Image, Button,PermissionsAndroid, SafeAreaView, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import AdventureListItem from '../adventure_list_item';
import { getAdventures, deleteAdventure } from '../../actions/adventures';
import { Container } from 'native-base';


export class HomeScreen extends React.Component{
    state = {
        adventures: [],
    }

    styles = StyleSheet.create({
        message: {
          alignItems: 'center',
          padding: 16,
        }
      })

    componentDidMount() {
        this.props.getAdventures();
    }

    render(){
        console.log(this.props.adventures);
        if (this.props.adventures.length === 0) {
            return (
              <Container style={this.styles.message}>
                <Text>Welcome {this.state.loadedName}!</Text>
                <Text>You do not have any adventures yet, click the "+" button at the top to start a new adventure.</Text>
              </Container>
            )
          }
      return(
        <Provider store = {store}>
            <FlatList
                data={this.props.adventures}
                renderItem = {({item}) => (
                    <AdventureListItem
                        adventure={item}
                        navigation={this.props.navigation}
                        deleteAdventure={this.props.deleteAdventure}
                    />
                )}
                keyExtractor = {item => `adventure_${item.id}`}
            />
        </Provider>
    )
  }
}

select = (storeState) => {
    return {
      adventures: storeState.adventures,
    }
  };
  
  // select = ({ todos }) => ({ todos });
  
  export default connect(select, { getAdventures, deleteAdventure })(HomeScreen);