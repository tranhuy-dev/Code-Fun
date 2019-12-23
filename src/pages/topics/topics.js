import React, { Component, Fragment } from 'react';
import './topics.css'
import CardTopic from './components/card-topic';
import * as firebase from 'firebase';
class Topics extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        topic: []
    }

    componentWillMount() {
        firebase.firestore().collection('topics').get().then((snapshot) => {
            let datatopic = [];
            snapshot.forEach((element) => {
                datatopic.push(
                    { id: element.id, title: element.data().title, image_card: element.data().image_card }
                )
            })
            this.setState({ topic: datatopic });
        })
    }

    handleTopicDetail(id) {
        this.props.history.push('topics/' + id);
    }

    render() {
        return (
            <div className="topics-container">
                <div className="header-img">
                    <div className="header-title">Discover Your Thinking</div>
                </div>
                <div className="body-topics">
                    <h2>Topics</h2>
                    <div className="list-topic-container">
                        {this.state.topic.map((element, index) => {
                            return (
                                <div key={index} onClick={() => this.handleTopicDetail(element.id)}>
                                    <CardTopic
                                    title={element.title}
                                    image_card={element.image_card}/>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        )
    }
}

export default Topics