import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, View, TextInput, Button, Alert, SafeAreaView, ScrollView, TouchableOpacity  } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import firebase from '../config/Firebase';
import 'firebase/firestore';

export default class Editor extends React.Component {
    state = {
        image: null,
    };

    render() {
        let { image } = this.state;

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="Pick an image from camera roll" onPress={this._pickImage}/>
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 300, marginTop: 15, marginBottom: 15}} />}
                {image && <Button title="Upload image" onPress={this._uploadImage} />}
            </View>
        );
    }

    componentDidMount() {
        this.getPermissionAsync();
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    };

    _uploadImage = async () => {
        const response = await fetch(this.state.image);
        const blob = await response.blob();
        const filename = this.state.image.substring(this.state.image.lastIndexOf('/') + 1);
        console.log("filename: ", filename);
        var ref = firebase.storage().ref().child(filename);
        await ref.put(blob);
        const url = await ref.getDownloadURL().catch((error) => { throw error });
        const db = firebase.firestore();
        const userRef = db.collection("Messages").add({
            Data: url,
            Printed: false,
            Receiver: "dOd8rPhPQGPIO9uN2ZvyeLq5uuf1",
            Sender: "dOd8rPhPQGPIO9uN2ZvyeLq5uuf1",
        });
        console.log("url: ", url);
        return url
    }
    /*
    allowsEditing: true,
    aspect: [4, 3],
    */
    _pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: false,
                quality: 1,
            });
            if (!result.cancelled) {
                this.setState({ image: result.uri });
            }

            console.log(result);
        } catch (E) {
            console.log(E);
        }
    };
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

