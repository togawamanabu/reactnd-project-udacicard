export const GET_CARDS = 'GET_CARDS'
export const GET_DECKS = 'GET_DECKS'

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
