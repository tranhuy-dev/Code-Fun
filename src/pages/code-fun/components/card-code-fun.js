import React , {Component} from 'react';
import './card-code-fun.css';
export default class CardCodeFun extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="card-code-fun-container">
    <div className="card-code-title">{this.props.name}</div>
                <div>
        <span className="card-code-total-pro">{this.props.count}</span>
                    <span> projects</span>
                </div>
            </div>
        )
    }
}