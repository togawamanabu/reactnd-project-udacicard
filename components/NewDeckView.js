import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
 } from 'react-native'

class NewDeckView extends Component {
  render() {
    return(
      <View><Text>new deck</Text></View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  buttons: {
    marginTop: 50,
  },
  button: {
    marginTop: 20,
    width: 200,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderColor: '#bbb',
    borderWidth: StyleSheet.hairlineWidth,

  },
  buttontext: {
    fontSize:16
  },
  title: {
    marginTop: 90,
    fontSize: 50,
  }
})


export default NewDeckView
