import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Firebase from '../config/Firebase'


function Profile(props) {
  function Signout() {
    Firebase.auth().signOut().then(function() {
      props.navigation.navigate('Home')// Sign-out successful.
    }).catch(function(error) {
      // An error happened.
      console.log(error)
    });
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={Signout}>
        <Text>Signout</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Profile