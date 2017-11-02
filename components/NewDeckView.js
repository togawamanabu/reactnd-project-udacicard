import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
 } from 'react-native'
 import { createDeck } from '../actions'
 import { connect } from 'react-redux'
 import { addNewDeck } from '../utils/api'

class NewDeckView extends Component {
  constructor(props) {
      super(props);

      this.state = {
        text: "",
      };
  }

  addDeck() {
    const { text } = this.state

    addNewDeck(text)

    this.props.dispatch(createDeck(text))

    this.props.navigation.navigate(
      'SingleDeckView',
      { decktitle: text }
     )
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>What is the title of your new deck ?</Text>
        <TextInput style={styles.input} onChangeText={(text) => this.setState({text})} />
        <TouchableOpacity onPress={() => this.addDeck()} style={styles.button}>
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
    fontSize:30,
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


export default connect()(NewDeckView)
