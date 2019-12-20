import React , {Component} from 'react';
import './topics.css'
import CardTopic from './components/card-topic'
class Topics extends Component {
    constructor(props) {
        super(props)
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
                        <CardTopic/>
                        <CardTopic/>
                        <CardTopic/>
                        <CardTopic/>
                        <CardTopic/>
                        <CardTopic/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Topics