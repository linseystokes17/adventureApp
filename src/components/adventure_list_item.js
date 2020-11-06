import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { SwipeRow } from 'react-native-swipe-list-view';

const styles = StyleSheet.create({
  base: {
    backgroundColor: 'white',
    height: 64,
    borderBottomWidth: 1,
  },
  deleteButton: {
    flex: 1,
    backgroundColor: 'red',
    height: 64,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 16,
  },
  whiteText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  hidden: {
    flexDirection: 'row',
  },
  visible: {
    justifyContent: 'center',
    paddingLeft: 16,
  }
});

export default function(props) {
  return (
    <SwipeRow
      leftOpenValue={125}
      stopRightSwipe={-145}
      stopLeftSwipe={145}
      onRowPress={() => props.navigation.navigate('Home')}
    >
      <View style={[styles.base, styles.hidden]}>
        {/* HIDDEN: need to swipe to see this content */}
        <TouchableOpacity onPress={() => props.deleteAdventure(props.adventure.id)} style={styles.deleteButton}>
          <Text style={styles.whiteText}>DELETE</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.base, styles.visible]}>
        {/* VISIBLE: visible by default */}
        <Text>{props.adventure.title}</Text>
        <Text>Distance: {props.adventure.distance}</Text>
        <Text>Pictures: {props.adventure.images.length}</Text>
      </View>
    </SwipeRow>
  )
}