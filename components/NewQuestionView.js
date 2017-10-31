import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
 } from 'react-native'

class NewQuestionView extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.deck.title}`,
    });

  addCard = () => {
    this.props.navigation.navigate(
      'SingleDeckView',
      { deck: deck }
     )
  }

  startQuiz = () => {
    this.props.navigation.navigate(
      'SingleDeckView',
      { deck: deck }
     )
  }

  render() {
    const { deck } =  this.props.navigation.state.params

    return(
      <View style={styles.container}>
          <Text style={styles.title}>{ deck.title }</Text>
          <Text>{ deck.questions.length } cards </Text>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.button}><Text style={styles.buttontext}>Add Card</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button}><Text style={styles.buttontext}>Start Quiz</Text></TouchableOpacity>
          </View>
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


export default NewQuestionView
