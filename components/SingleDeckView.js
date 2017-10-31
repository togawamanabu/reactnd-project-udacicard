import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

class SingleDeckView extends Component {
  render() {
    const { deck } =  this.props.navigation.state.params

    return(
      <View>
        <Text>{ deck.title }</Text>
      </View>
    )
  }
}

export default SingleDeckView
