import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
 } from 'react-native'
import { getDecks } from '../utils/api'
import DeckItem from './DeckItem'

class DeckListView extends Component {
  static navigationOptions = {
    title: 'Decks',
  }

  createNotification() {

  }

  componentDidMount() {
    getDecks()
  }

  selectSingleDeck = (deck) => {
    this.props.navigation.navigate(
      'SingleDeckView',
      { decktitle: deck.title }
     )
  }

  render() {
    const { decks } = this.props

    return (
      <View style={styles.container}>
        { Object.keys(decks).map( (key) => {
            return <DeckItem key={key} deck={ decks[key ]} onPress={() => this.selectSingleDeck(decks[key])} />
        }) }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
})

function mapStateToProps(state) {
  return {
    decks: state
  }
}

export default connect(mapStateToProps)(DeckListView)
