import React, { Component } from 'react'
import './fun-project.css';
import * as firebase from 'firebase';
export default class FunProjectPage extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        projects: []
    }

    componentWillMount() {
        firebase.firestore().collection("fun-project").get().then((snapshot) => {
            let dataProject = [];
            snapshot.forEach((element) => {
                dataProject.push(
                    {
                        id: element.id,
                        name: element.data().name,
                        description: element.data().description,
                        technology: element.data().technology
                    }
                )
            })
            this.setState({projects: dataProject})
        })
    }

    render() {
        return (
            <div className="fun-project-container">

                {this.state.projects.map((element) => {
                    return (
                        <div key={element.id} className="fun-project-card">
                            <div className="fun-project-title">{element.name}</div>
                            <div className="fun-project-description">{element.description}</div>
                            <div className="fun-project-tech">{element.technology}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}