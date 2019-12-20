import React, { Component } from 'react';
import './code-fun.css';
import CardCodeFun from './components/card-code-fun';
import { Container, Row, Col } from 'react-bootstrap';
export default class CodeFun extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="code-fun-container">
                <div className="header-img-code">
                    <div className="header-title">Write Your Code , Change Your World</div>
                </div>
                <div className="code-title-container">
                    <Container>
                        <Row>
                            <Col><CardCodeFun/></Col>
                            <Col><CardCodeFun/></Col>
                        </Row>
                    </Container>
                    <br/>
                    <Container>
                        <Row>
                            <Col><CardCodeFun/></Col>
                            <Col><CardCodeFun/></Col>
                        </Row>
                    </Container>
                </div>

            </div>
        )
    }
}