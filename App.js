import React from 'react'
import SwitchNavigator from './navigation/SwitchNavigator'
import * as Font from 'expo-font';

export default class App extends React.Component {
  render() {
    return <SwitchNavigator style={{ fontFamily: 'Helvetica'}}/>
  }
}