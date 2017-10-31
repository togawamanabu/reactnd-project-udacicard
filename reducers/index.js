import { GET_CARDS, GET_DECKS } from '../actions'

const tempdata = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

function decks(state = {decks:tempdata}, action) {
  switch (action.type) {
    case GET_DECKS:
      return state

    default:
      return state
  }
}

export default decks
