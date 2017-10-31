import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function DeckItem({deck, onPress}) {
  return (
    <View style={styles.row}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.title}>{ deck.title }</Text>
        <Text>{ deck.questions.length } cards</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,

  },
  button: {
    flex:1,
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: '#fff',
    alignItems: 'center'

  },
  title: {
    fontSize: 20,
  }
})
