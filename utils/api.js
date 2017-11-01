import { AsyncStorage } from 'react-native'

export const DECK_STORAGE_KEY = 'UdaciCards:deck'

// return all of the decks
export function getDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
}

//add new deck
export function addNewDeck(title) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [title]: {
      title: title,
      questions: [],
    }
  }))

}

//add card to deck
export function addCardToDeck(decktitle, question, answer) {
  const newcard = {
    question: question,
    answer, answer,
  }

  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [decktitle]: {
      questions: newcard,
    }
  }))
}
