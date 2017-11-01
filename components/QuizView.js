import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
 } from 'react-native'
 import TextButton from './TextButton'
 import { connect } from 'react-redux'
 import { getDecks } from '../actions'

class QuizView extends Component {
  static navigationOptions = {
    title: 'Quiz'
  }

  constructor(props) {
      super(props);

      this.state = {
        cardIndex: 0,
        correct: 0,
      };
  }

  showAnswer(card) {
    this.props.navigation.navigate(
      'AnswerView',
      { card: card }
     )
  }

  showResult() {
    const { correct } = this.state
    const { deck } = this.props.navigation.state.params

    console.log("aaa", correct, deck.questions.length)
    this.props.navigation.navigate(
      'ResultView',
      { point: Math.round((correct/deck.questions.length) * 100) }
     )
  }

  check(isCorrect) {
    const { correct, cardIndex } = this.state
    const { deck } = this.props.navigation.state.params

    console.log(isCorrect, correct)

    if(isCorrect) {
      this.state.correct += 1
    }

    if(cardIndex <  deck.questions.length -1) {
      this.setState({cardIndex: cardIndex + 1})
    } else {
      this.showResult()
    }
  }

  render() {
    const { deck } =  this.props.navigation.state.params
    const { cardIndex } = this.state

    const card = deck.questions[this.state.cardIndex]

    return(
      <View style={styles.container}>
        <Text>{cardIndex + 1} / {deck.questions.length}</Text>
        <Text style={styles.title}>{ card.question }</Text>
        <TextButton onPress={() => this.showAnswer(card)} >Answer</TextButton>
        <View style={styles.buttons}>
          <TouchableOpacity onPress={() => this.check(true)} style={[styles.button, {backgroundColor:'#00c16d'}]}>
            <Text style={styles.buttontext}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.check(false)} style={[styles.button, {backgroundColor: '#c10c00'}]}>
            <Text style={styles.buttontext}>InCorrect</Text>
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
    marginTop: 5,
    fontSize: 50,
  }
})

function mapStateToProps(state) {
  console.log("!!!!BBBBB")
  console.log(state)

  return state
}

export default connect()(QuizView)
