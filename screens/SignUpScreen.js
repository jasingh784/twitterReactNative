import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, 
TouchableWithoutFeedback, Keyboard, Platform, Alert, ActivityIndicator} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { createNewAccount } from '../utils/authApi';
import MyButton from '../components/MyButton';

export default function SignUpScreen({ navigation }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setisLoading] = useState(false);


  const onPressSignUp = async() => {

    setisLoading(true);
    let response;
    
    //Validation
    if(confirmPassword !== '' && password !== '') {
      if(confirmPassword === password && confirmPassword.length === 6) {
        response = await createNewAccount({
            firstname: firstname.toLowerCase(),
            lastname: lastname.toLowerCase(),
            email: email.toLowerCase(),
            username: username.toLowerCase(),
            password: password.toLowerCase(),
          });

          if((await response).valueOf()) {
            setisLoading(false);
            navigation.navigate('Home');
          }

      } else {
        setisLoading(false);
        myErrorAlerts('Password Error', "Passwords do not match");
      }
    } else {
      myErrorAlerts("Password Error", "Password field cannot be empty");
    }
    
    navigation.navigate('Login');
  }

  const myErrorAlerts = (title, message) => {
    Alert.alert(
      title,
      message,
      [
        {
          Text: 'OK'
        }
      ]
    )
  
  }

  const validation = () => {
    
  }

  return (
    <KeyboardAwareScrollView
      style={{backgroundColor: '#44b7bb'}}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={Platform.OS === 'ios' ? styles.container : null}
    >
      
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
        {isLoading ? <ActivityIndicator color="#000000" size="large" /> : (
          <View style={styles.formWrapper}>
            
            <Text style={styles.title}>Create Account</Text>

            <TextInput 
              style={styles.input}
              onChangeText = {setFirstname}
              value={firstname}
              placeholder="First Name"
              
            />
              
          <TextInput 
              style={styles.input}
              onChangeText = {setLastname}
              value={lastname}
              placeholder="Last Name"
            />

          <TextInput 
              style={styles.input}
              onChangeText = {setEmail}
              value={email}
              placeholder="Email"
            />

          <TextInput 
              style={styles.input}
              onChangeText = {setUsername}
              value={username}
              placeholder="UserName"
            />

            <TextInput 
              style={styles.input}
              onChangeText = {setPassword}
              value={password}
              placeholder="Password"
              secureTextEntry={true}
            />

            <TextInput 
              style={styles.input}
              onChangeText = {setConfirmPassword}
              value={confirmPassword}
              placeholder=" Confirm Password"
              secureTextEntry={true}
            />  

            <MyButton
              onPress={onPressSignUp}
              title="Sign Up"
            />
          </View>
          )}
      </View>
    </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#44b7bb', 
  },
  formWrapper: {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 10,
    padding: 20,
    elevation: 10,
    alignItems: 'center',
  },
  title: {
    fontSize:30,
    textAlign: 'center',
    margin: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    width: '100%'
  }
});
