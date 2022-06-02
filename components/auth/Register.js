import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Toast from 'react-native-toast-message';


export default function RegisterScreen({ navigation }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirmation] = useState('')
    
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handlePasswordConfirmChange = (event) => {
        setPasswordConfirmation(event.target.value)
    }

    // const submitRegister = (event) => {
    //     event.preventDefault()
    //     console.log('submitRegister')
    //     console.log({email, password, passwordConfirm})
    // }

    const submitRegister = async (event) => {
        event.preventDefault()
        if(password !== passwordConfirm) {
            Toast.show({
                type: 'error',
                text1: 'Mots de passe non identique',
            });
            return
        }
        const res = await fetch(window.ENDPOINT_URL + '/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'access-control-allow-credentials': 'true'
            },
            body: JSON.stringify({ email, password }),
        })
        const result = await res.json()
        if (res.status === 200) {
            Toast.show({
                type: 'success',
                text1: 'Inscription réussie',
            });
        } else {
            Toast.show({
                type: 'error',
                text1: 'Échec de l\'inscription',
            });
        }
    }

    return (
        <div className="register-component container">
            <div className="row d-flex flex-row justify-content-center">
                <div className="col-4 mt-4 card p-4">
                    <form id="registerForm">
                        <div>
                            <div>
                                <label>Courriel</label>
                                <input onChange={handleEmailChange} className="form-control" type="text" name="email" />
                            </div>
                            <div className="mt-2">
                                <label>Mot de passe</label>
                                <input onChange={handlePasswordChange} className="form-control" type="password" name="password" />
                            </div>
                            <div className="mt-2">
                                <label>Confirmation du mot de passe</label>
                                <input onChange={handlePasswordConfirmChange} className="form-control" type="password" name="password" />
                            </div>
                        </div>
                        <div className="mt-4 d-flex flex-row justify-content-center">
                            <div>
                                <button onClick={submitRegister} className="btn btn-primary">S'inscrire</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row mt-4">
                <div className="d-flex flex-row justify-content-center">
                    <a onClick={() => navigation.navigate('Login')} href="#">Connection</a>
                </div>
            </div>
        </div>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
