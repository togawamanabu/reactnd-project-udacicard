import { GET_CARDS, GET_DECKS, CREATE_DECK, CREATE_CARD} from '../actions'

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

function decks(state = tempdata, action) {
  switch (action.type) {
    case CREATE_DECK:
      return {
        ...state,
        [action.title]:{
          title: action.title,
          questions: [],
        }
      }

    case CREATE_CARD:
      const { question, answer, decktitle } = action

      const newcard = {
        question: question,
        answer, answer,
      }

      const questions = [...state[decktitle].questions, newcard]

      return {
        ...state,
        [decktitle]: {...state[decktitle], questions}
      }

      // return {
      //   ...state,
      //   [decktitle]: {
      //       ...state[decktitle],
      //       questions: [
      //         ...(state[decktitle] || {}).questions,
      //         ...newcard
      //       ]
      //   }
      // }

    default:
      return state
  }
}

export default decks
