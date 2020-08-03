import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, SafeAreaView, ScrollView  } from 'react-native';



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
        <View style={{ width: 100 }}>
          <Button title="Send" onPress={onSubmit} style={styles.button}/>
        </View>
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
    width: "50%",
    flex: 2,
    justifyContent: 'flex-end',
    backgroundColor: '#000000'
  }
});