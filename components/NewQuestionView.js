import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
 } from 'react-native'
 import { createCard } from '../actions'
 import { connect } from 'react-redux'
 import { addCardToDeck } from '../utils/api'

class NewQuestionView extends Component {
  static navigationOptions = {
    title: 'Add Card',
  }

  constructor(props) {
      super(props);

      this.state = {
        qText: "",
        aTdxt: "",
      };
  }

  addCard() {
    const { deck } =  this.props.navigation.state.params
    const { qText, aText } = this.state

    addCardToDeck(deck.title, qText, aText)

    this.props.dispatch(createCard(deck.title, qText, aText))

    this.setState({
      qText: "",
      aText: "",
    })

    this.props.navigation.goBack()
  }

  render() {
    const { deck } =  this.props.navigation.state.params

    return(
      <View style={styles.container}>
        <Text style={[styles.text, {marginTop:40}]}>Question</Text>
        <TextInput onChangeText={(text) => this.setState({qText:text})} value={this.state.qText} style={styles.input} />
        <Text style={styles.text}>Answer</Text>
        <TextInput onChangeText={(text) => this.setState({aText:text})} value={this.state.aText}style={styles.input} />
        <TouchableOpacity onPress={() => this.addCard()} style={styles.button}>
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

function mapStateToProps(state) {

  console.log("aaaaaaaaaaa")
  console.log(state)

  return state
}

export default connect(mapStateToProps)(NewQuestionView)
