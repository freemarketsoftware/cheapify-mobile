import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default function ProjectsScreen({ navigation }) {

    const [projects, setProjects] = useState([])

    useEffect(async () => {
        const res = await fetch(window.ENDPOINT_URL + '/api/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include'
        })
        if(res.status === 200) {
            const json = await res.json()
            setProjects(json.projects)
        } else {
            console.log(res)
        }
    }, [])
    // const projects = [
    //     {
    //         title: "My title 1",
    //         description: "My description 1",
    //         status: "open"
    //     },
    //     {
    //         title: "My title 2",
    //         description: "My description 2",
    //         status: "open"
    //     },
    //     {
    //         title: "My title 3",
    //         description: "My description 3",
    //         status: "open"
    //     }
    // ]

    return (
        <div className="row d-flex flex-row justify-content-center">
            <div className="col-9">
                <div className="d-flex flex-row justify-content-end">
                    <button className="btn btn-primary" id="createProject">Créer nouveau projet</button>
                </div>
                {projects.map((project) => {
                    return (
                        <div className="card my-2">
                            <div className="card-header fw-bold d-flex flex-row justify-content-between">
                                <div>{project.title}</div>
                                <div>{project.status}</div>
                            </div>
                            <div className="card-body">
                                <div className="card-text">
                                    {project.description}
                                </div>
                            </div>
                        </div>
                    )
                })}
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
