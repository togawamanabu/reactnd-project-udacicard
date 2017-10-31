import React from 'react'
import { View, Platform, StatusBar } from 'react-native'
import DeckListView from './components/DeckListView'
import SingleDeckView from './components/SingleDeckView'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { StackNavigator } from 'react-navigation'
import { Constants } from 'expo'

const MainNavigator = StackNavigator( {
  Home: {
    screen: DeckListView,
  },
  SingleDeckView: {
    screen: SingleDeckView,
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
