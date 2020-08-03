import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, SafeAreaView, ScrollView, TouchableOpacity  } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';



export default function Editor({ navigation }) {
  const [value, onChangeText] = React.useState('Insert Text Here');

  function onSubmit() {
    navigation.navigate('Friends')
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ height: "100%"}}>
        <ScrollView>
          <TextInput
          style={{ marginTop: 20, marginBottom: 10}}
          onChangeText={text => onChangeText(text)}
          value={value}
          multiline
          />
        </ ScrollView>

        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>

      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginLeft: 20,
    marginBottom: 50,
    height: '100%'
  },
  button : {
    paddingVertical: 5,
    alignItems: 'center',
    backgroundColor: '#000000',
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 5,
    width: 100
  },
  buttonText : {
    fontSize: 15,
    color: '#fff'
  }
});