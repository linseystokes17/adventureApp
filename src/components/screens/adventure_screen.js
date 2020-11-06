import Map from '../map';
import React from 'react';
import {Provider, connect} from 'react-redux';
import store from '../../store/store';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'native-base';
import {createAdventure} from '../../actions/adventures';
import ImagePicker from 'react-native-image-picker';

export class AdventureScreen extends React.Component{
  state = {
    title: '',
    pictures: [],
    titleMissing: false,
    distance: this.props.coordinates,
  }  

  styles = StyleSheet.create({
    saveButtonContainer: {
      padding: 14,
      marginTop: 16,
      backgroundColor: 'rgba(0,0,0,0)',
      flex: 1,
    },
    verticalContainer:{
      flexDirection: 'row',
      justifyContent: 'center'
    }
  })

  

  update = (key, value) => this.setState({ [key]: value })

  save = () => {
    console.log(this.props.coordinates);
    if (this.state.title === '') {
      Alert.alert(
        'Missing Info',
        'You have to provide a title dummy!!',
      );

      this.setState({ titleMissing: true })

      return;
    }
    if(this.state.distance === 0){

      this.setState({distance: 1})
      return;
    }
    
    this.props.createAdventure(
      this.state.title,
      this.state.pictures,
      this.state.distance,
    );

    this.props.navigation.goBack();
  }

  addPicture = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    
    /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info in the API Reference)
     */
    console.log(options);
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };
    
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    
        this.setState({
          imageSrc: source,
        });
      }
    });
  }
  
  render(){
      return(
        <Provider store = {store}>
          <Map></Map>
          <View style = {this.styles.saveButtonContainer}>
            <View style={this.styles.verticalContainer}>
              <Button title="Photo" onPress = {this.addPicture}/>
              <Input style = {{paddingLeft: 50, paddingRight: 50, height: 40, backgroundColor: 'grey'}} 
                value = {this.state.title} 
                onChangeText = {text => this.update('title', text)}
              />
              <Button title="End" onPress={this.save}/>
            </View>
            
          </View>
        </Provider>
    )
  }
}

const mapPropsToDispatch = {
  createAdventure,
};

export default connect(null, mapPropsToDispatch)(AdventureScreen);