import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default function RegisterScreen() {

    return (
        <div class="register-component container">
            <div class="row d-flex flex-row justify-content-center">
                <div class="col-4 mt-4 card p-4">
                    <form id="registerForm">
                        <div>
                            <div>
                                <label>Courriel</label>
                                <input id="email" class="form-control" type="text" name="email" />
                            </div>
                            <div class="mt-2">
                                <label>Mot de passe</label>
                                <input id="password" class="form-control" type="password" name="password" />
                            </div>
                            <div class="mt-2">
                                <label>Confirmation du mot de passe</label>
                                <input id="passwordConfirm" class="form-control" type="password" name="password" />
                            </div>
                        </div>
                        <div class="mt-4 d-flex flex-row justify-content-center">
                            <div>
                                <button id="register_submit-btn" class="btn btn-primary">S'inscrire</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="row mt-4">
                <div class="d-flex flex-row justify-content-center">
                    <a href="/auth/login">Connection</a>
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
