import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
 } from 'react-native'

class NewDeckView extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>What is the title of your new deck ?</Text>
        <TextInput style={styles.input} />
        <TouchableOpacity style={styles.button}>
          <Text>Create Deck</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  title: {
    fontSize:40,
    textAlign: 'center',
    padding: 30,
  },
  input: {
    height: 40,
    width:300,
    borderColor: 'gray',
    borderWidth: 1,
  },
  button: {
    marginTop: 50,
    width: 200,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#00B5C1',
    alignItems: 'center',
    borderColor: '#bbb',
    borderWidth: StyleSheet.hairlineWidth,

  },
  buttontext: {
    fontSize:16
  },
})


export default NewDeckView
