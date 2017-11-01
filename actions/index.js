export const GET_CARDS = 'GET_CARDS'
export const GET_DECKS = 'GET_DECKS'
export const CREATE_DECK = 'CREATE_DECK'
export const CREATE_CARD = 'CREATE_CARD'

export function getDecks() {
    return {
      type: GET_DECKS,
    }
}

export function getCards() {
  return {
    type: GET_CARDS,
  }
}

export function createDeck(title) {
  return {
    type: CREATE_DECK,
    title:title
  }
}

export function createCard(decktitle, question, answer) {
  return {
    type: CREATE_CARD,
    decktitle: decktitle,
    question: question,
    answer: answer,
  }
}
