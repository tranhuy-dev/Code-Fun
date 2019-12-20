import React, { Component } from 'react';
import './topic-detail.css'
export default class TopicDetail extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="topic-detail-container">
                <div className="topic-detail-content-container">
                    <img src="https://firebasestorage.googleapis.com/v0/b/huytran-3e2fe.appspot.com/o/microsvc.png?alt=media&token=12f51c9e-9c4e-4c95-ab2f-c831922d863b" />
                    <div className="title-topic-detail">What is microservices</div>
                    <div>
                        title
                    </div>
                </div>
            </div>
        )
    }
}