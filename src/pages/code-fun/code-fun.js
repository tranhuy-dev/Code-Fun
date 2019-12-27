import React, { Component, Fragment } from 'react';
import './code-fun.css';
import CardCodeFun from './components/card-code-fun';
import { Container, Row, Col } from 'react-bootstrap';
import * as firebase from 'firebase';
export default class CodeFun extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        github: []
    }

    componentDidMount() {
        firebase.firestore().collection('github').get().then((snapshot) => {
            let dataGit = [];
            snapshot.forEach((data) => {
                dataGit.push(
                    {id: data.id , name: data.data().name , count: data.data().count , link: data.data().link}
                )
            })
            this.setState({github: dataGit})
        });
    }

    linkToPage(url) {
        this.props.history.push('codefun/' + url);
    }

    render() {
        return (
            <div className="code-fun-container">
                <div className="header-img-code">
                    <div className="header-title">Write Your Code Change Your World</div>
                </div>
                <div className="code-title-container">
                    <Container>
                        <Row>
                            {this.state.github.map((element , index) => {
                                return (
                                    <Fragment
                                    key={index}>
                                        <Col
                                        onClick={() => this.linkToPage(element.link)}
                                        xs={12} md={6}><CardCodeFun name={element.name} count={element.count}/></Col>
                                    </Fragment>
                                )
                            })}
                        </Row>
                    </Container>
                </div>

            </div>
        )
    }
}