import React , {Component} from 'react';
import './card-topic.css'
export default class CardTopic extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="card-topic-container">
                <div className="img">
                    <img src="https://firebasestorage.googleapis.com/v0/b/huytran-3e2fe.appspot.com/o/microservices.png?alt=media&token=ac9a820a-f286-421b-b44d-d0821aaa12a1" />
                </div>
                <div className="detail-container">
                    <div>What is microservices</div>
                    <div className="datetime">Date</div>
                </div>
            </div>
        )
    }
}

