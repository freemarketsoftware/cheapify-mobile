import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



function LoginScreen() {

    return (
        <div className="login-component container">
            <div className="row d-flex flex-row justify-content-center">
                <div className="col-4 mt-4 card p-4">
                    <form id="loginForm">
                        <div>
                            <div>
                                <label>Courriel</label>
                                <input id="email" className="form-control" type="text" name="email" value="asdasd@gmail.com"></input>
                            </div>
                            <div className="mt-2">
                                <label>Mot de passe</label>
                                <input id="password" className="form-control" type="password" name="password" value="test1234"></input>
                            </div>
                        </div>
                        <div className="mt-4 d-flex flex-row justify-content-center">
                            <div>
                                <button id="reset" className="btn btn-secondary">Récupérer mot de passe</button>
                            </div>
                            <div>
                                <button id="login_submit-btn" className="btn btn-primary">Connection</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row mt-4">
                <div className="d-flex flex-row justify-content-center">
                    <a href="/auth/register">Inscription</a>
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
