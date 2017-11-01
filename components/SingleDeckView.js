import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
 } from 'react-native'
 import {
   clearLocalNotification,
   setLocalNotification
 } from '../utils/helpers'

class SingleDeckView extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.decktitle}`,
    });

  addCard = (deck) => {
    this.props.navigation.navigate(
      'NewQuestionView',
      { deck: deck }
     )
  }

  startQuiz = (deck) => {
    this.props.navigation.navigate(
      'QuizView',
      { deck: deck }
     )

     clearLocalNotification()
      .then(setLocalNotification)
  }

  render() {
    const deck =  this.props.decks[this.props.navigation.state.params.decktitle]

    return(
      <View style={styles.container}>
          <Text style={styles.title}>{ deck.title }</Text>
          <Text>{ deck.questions.length } cards </Text>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.button} onPress={() => this.addCard(deck)}>
              <Text style={styles.buttontext}>Add Card</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.startQuiz(deck)} style={[styles.button, {backgroundColor:'#00B5C1'}]}>
              <Text style={styles.buttontext}>Start Quiz</Text>
            </TouchableOpacity>
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

function mapStateToProps(state) {
  return {
    decks: state
  }
}

export default connect(mapStateToProps)(SingleDeckView)
