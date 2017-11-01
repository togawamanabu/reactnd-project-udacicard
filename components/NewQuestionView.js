import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
 } from 'react-native'

class NewQuestionView extends Component {
  static navigationOptions = {
    title: 'Add Card',
  }

  render() {
    const { deck } =  this.props.navigation.state.params

    return(
      <View style={styles.container}>
        <Text style={[styles.text, {marginTop:40}]}>Question</Text>
        <TextInput style={styles.input} />
        <Text style={styles.text}>Answer</Text>
        <TextInput style={styles.input} />
        <TouchableOpacity style={styles.button}>
          <Text>Create Card</Text>
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
  text: {
    marginTop:20,
  },
  title: {
    fontSize:40,
    textAlign: 'center',
    padding: 30,
  },
  input: {
    marginTop: 10,
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

export default NewQuestionView
