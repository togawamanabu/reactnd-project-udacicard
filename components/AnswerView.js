import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
 } from 'react-native'
 import TextButton from './TextButton'

class AnswerView extends Component {
  static navigationOptions = {
    title: 'Anser'
  }

  back() {
    this.props.navigation.goBack()
  }

  render() {
    const { card } =  this.props.navigation.state.params

    return(
      <View style={styles.container}>
        <Text style={styles.title}>{ card.question }</Text>
        <Text style={styles.answer}>{ card.answer }</Text>
          <TouchableOpacity onPress={() => this.back()} style={styles.button}>
            <Text style={styles.buttontext}>Back</Text>
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
  title: {
    marginTop: 90,
    fontSize: 50,
  },
  answer: {
      margin: 20,
      fontSize: 20,
  }
})


export default AnswerView
