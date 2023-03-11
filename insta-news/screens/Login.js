import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { useNavigation} from '@react-navigation/native';
import {firebase}   from '../config';


const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    loginUser = async (email, password) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            navigation.navigate('Dashboard');
        } catch (error) {
            console.log(error.toString())
        }
    }

    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>Login</Text>
            <TextInput
                style = {styles.input}
                placeholder = "Email"
                onChangeText = {(text) => setEmail(text)}
                autoCapitalize = "none"
                autoCorrect = {false}
            />
            <TextInput
                style = {styles.input}
                placeholder = "Password"
                secureTextEntry = {true}
                onChangeText = {(text) => setPassword(text)}
                autoCapitalize = "none"
                autoCorrect = {false}
            />
            <TouchableOpacity style = {styles.button} onPress = {() => loginUser(email, password)}>
                <Text style = {styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => navigation.navigate('SignUp')}>
                <Text style = {styles.text}>Don't have an Insta News account? Sign Up</Text>
            </TouchableOpacity>
        </View>
    )



}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    text: {
        fontSize: 28,
        marginBottom: 10
    },
    input: {
        width: '80%',
        padding: 15,
        marginBottom: 10,
        backgroundColor: '#ddd'
    },
    button: {
        width: '80%',
        padding: 15,
        backgroundColor: '#f01d71',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 18
    }
})
