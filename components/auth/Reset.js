import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default function ResetScreen({ navigation }) {

    return (
        <div className="reset-component container">
            <div className="row d-flex flex-row justify-content-center">
                <div className="col-4 mt-4 card p-4">
                    <form id="resetForm">
                        <div>
                            <label>Courriel</label>
                            <input id="email" name="email" className="form-control" type="text"></input>
                        </div>
                        <div className="mt-4 d-flex flex-row justify-content-center">
                            <div>
                                <button id="reset_submit-btn" className="btn btn-primary">Envoyer message de
                                    réinitialisation</button>
                            </div>
                        </div>
                    </form>
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
