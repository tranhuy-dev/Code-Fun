import React, { Component } from 'react';
import './topic-detail.css';
import * as firebase from 'firebase';
export default class TopicDetail extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        topic: {
            id: '',
            image: '',
            title: '',
            content: ''
        }
    }

    componentWillMount() {
        const docRef = firebase.firestore().collection('topics').doc(this.props.match.params.id);

        docRef.get().then((doc) => {
            if (doc.exists) {
                const dataTopic = {
                    id: this.props.match.params.id,
                    image: doc.data().image,
                    title: doc.data().title,
                    content: doc.data().content
                };
                this.setState({ topic: dataTopic });
            } else {
                console.log("No document")
            }
        }).catch((error) => {
            console.log(error)
        })
    }

    render() {
        return (
            <div className="topic-detail-container">
                <div className="topic-detail-content-container">
                    <img src={this.state.topic.image} />
                    <div className="title-topic-detail">{this.state.topic.title}</div>
                    <div>
                        {this.state.topic.content}
                    </div>
                </div>
            </div>
        )
    }
}