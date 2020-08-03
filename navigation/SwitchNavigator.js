import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import Profile from '../screens/Profile'
import Home from '../screens/Home'


const SwitchNavigator = createSwitchNavigator(
  {
    Login: {
      screen: Login
    },
    Signup: {
      screen: Signup
    },
    Profile : {
      screen: Profile
    },
    Home : {
      screen: Home
    }
  },
  {
    initialRouteName: 'Login'
  }
)

export default createAppContainer(SwitchNavigator)