import React, { Component } from 'react';
import './card-topic.css'
export default class CardTopic extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="card-topic-container">
                <div className="img">
                    <img src={this.props.image_card} />
                </div>
                <div className="detail-container">
                    <div>{this.props.title}</div>
                    <div className="datetime">Date</div>
                </div>
            </div>
        )
    }
}

