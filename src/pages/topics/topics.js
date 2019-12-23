import React , {Component, Fragment} from 'react';
import './topics.css'
import CardTopic from './components/card-topic'
class Topics extends Component {
    constructor(props) {
        super(props)
    }

    handleTopicDetail(id) {
        console.log(id)
        this.props.history.push( 'topics/' +id);
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
                        <div onClick={() => this.handleTopicDetail('v4SAUsjzJUgbe0fhwEMO')}>
                        <CardTopic/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Topics