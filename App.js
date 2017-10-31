import React from 'react'
import { View, Platform, StatusBar } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { Constants } from 'expo'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import DeckListView from './components/DeckListView'
import SingleDeckView from './components/SingleDeckView'
import QuizView from './components/QuizView'
import NewQuestionView from './components/NewQuestionView'
import NewDeckView from './components/NewDeckView'

const Tabs = TabNavigator({
  DeckListView: {
    screen: DeckListView,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: () => <FontAwesome name='book' size={30} color='#444' />
    },
  },
  NewDeckView: {
    screen: NewDeckView,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: () => <FontAwesome name='plus-square' size={30} color='#444' />
    },
  }
})

const MainNavigator = StackNavigator( {
  Home: {
    screen: Tabs,
  },
  SingleDeckView: {
    screen: SingleDeckView,
  },
  QuizView: {
    screen: QuizView,
  },
  NewQuestionView: {
    screen: NewQuestionView
  }
})



function UdaciStatusBar ({backgroundColor, ...props}) {
 return (
   <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
     <StatusBar translucent backgroundColor={backgroundColor} {...props} />
   </View>
 )
}

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex:1}}>
            <UdaciStatusBar />
            <MainNavigator />
        </View>
      </Provider>
    );
  }
}
