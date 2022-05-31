import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function CreateScreen() {

    return (
        <div className='create-project-component container'>
            <div className='row d-flex flex-row justify-content-center'>
                <div className='col-10 mt-4 card p-4'>
                    <form action='/projects/create' id='createForm' name='createForm' method='post'
                        enctype='multipart/form-data'>
                        <div>
                            <input id='id' className='form-control' type='hidden' value='{{projectId}}'></input>
                        </div>
                        <div>
                            <label>Titre</label>
                            <input id='title' className='form-control' type='text' placeholder='Titre' value='My title' />
                        </div>
                        <div>
                            <label>Description</label>
                            <textarea id='description' className='form-control' placeholder='Description'>My description</textarea>
                        </div>
                        <div>
                            <label>Image(s) du projet</label>
                            <input type='file' className='form-control' id='pictures' multiple />
                        </div>
                        <div className='d-flex flex-row justify-content-end'>
                            <button type='submit' className='btn btn-primary' id='createProject_submit-btn'>Créer le projet</button>
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
