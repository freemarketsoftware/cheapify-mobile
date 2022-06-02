import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Toast from 'react-native-toast-message';


function LoginScreen({ navigation }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const submitLogin = async (event) => {
        event.preventDefault()
        try {
            const res = await fetch(window.ENDPOINT_URL + '/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ email, password }),
            })
            const result = await res.json()
            if (res.status === 200) {
                Toast.show({
                    type: 'success',
                    text1: 'Connexion réussie',
                });
            } else {
                Toast.show({
                    type: 'error',
                    text1: 'Courriel / mot de passe invalide',
                });
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="login-component container">
            <div className="row d-flex flex-row justify-content-center">
                <div className="col-4 mt-4 card p-4">
                    <form id="loginForm">
                        <div>
                            <div>
                                <label>Courriel</label>
                                <input onChange={handleEmailChange} className="form-control" type="text" name="email"></input>
                            </div>
                            <div className="mt-2">
                                <label>Mot de passe</label>
                                <input onChange={handlePasswordChange} className="form-control" type="password" name="password"></input>
                            </div>
                        </div>
                        <div className="mt-4 d-flex flex-row justify-content-center">
                            <div>
                                <button onClick={() => navigation.navigate('Reset')} className="btn btn-secondary">Récupérer mot de passe</button>
                            </div>
                            <div>
                                <button onClick={submitLogin} className="btn btn-primary">Connection</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row mt-4">
                <div className="d-flex flex-row justify-content-center">
                    <a onClick={() => navigation.navigate('Register')} href="#">Inscription</a>
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

export default LoginScreen
