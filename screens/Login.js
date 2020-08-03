import React from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Button } from 'react-native'
import Firebase from '../config/Firebase'


class Login extends React.Component {

  componentDidMount = () => {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.navigation.navigate("Home")
      }
    })
  }

  state = {
      email: '',
      password: ''
  }

  handleLogin = () => {
      const { email, password } = this.state

      Firebase.auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => this.props.navigation.navigate('Profile'))
          .catch(error => console.log(error))
  }

  render() {
      return (
          <View style={styles.container}>
              <TextInput
                  style={styles.inputBox}
                  value={this.state.email}
                  onChangeText={email => this.setState({ email })}
                  placeholder='Email'
                  autoCapitalize='none'
              />
              <TextInput
                  style={styles.inputBox}
                  value={this.state.password}
                  onChangeText={password => this.setState({ password })}
                  placeholder='Password'
                  secureTextEntry={true}
              />
              <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
             </TouchableOpacity>
             <Text style={styles.signupText}
              onPress={() => this.props.navigation.navigate('Signup')}>
                Signup
              </Text>
          </View>
      )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputBox: {
        width: '85%',
        margin: 10,
        padding: 15,
        fontSize: 16,
        borderColor: '#000000',
        borderBottomWidth: 1,
        textAlign: 'center'
    },
    button: {
        marginTop: 30,
        marginBottom: 20,
        paddingVertical: 5,
        alignItems: 'center',
        backgroundColor: '#000000',
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 5,
        width: 200
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    buttonSignup: {
        fontSize: 12
    },
    signupText : {
      color: '#000000'
    }
})

export default Login