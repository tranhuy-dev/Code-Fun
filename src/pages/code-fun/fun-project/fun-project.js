import React , {Component} from 'react'
import './fun-project.css';
export default class FunProjectPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="fun-project-container">
                <div className="fun-project-card">
                    <div className="fun-project-title">Name Project</div>
                    <div className="fun-project-description">Description</div>
                    <div className="fun-project-tech">Technology</div>
                </div>
                <div className="fun-project-card">
                    <div className="fun-project-title">Name Project</div>
                    <div className="fun-project-description">Description</div>
                    <div className="fun-project-tech">Technology</div>
                </div>
                <div className="fun-project-card">
                    <div className="fun-project-title">Name Project</div>
                    <div className="fun-project-description">Description</div>
                    <div className="fun-project-tech">Technology</div>
                </div>
            </div>
        )
    }
}