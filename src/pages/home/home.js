import React, { Component } from 'react';
import './home.css'
class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="home-container">
                {/* <div className="img-session">
                    <img src="https://firebasestorage.googleapis.com/v0/b/huytran-3e2fe.appspot.com/o/Plexus2%20PR.jpg?alt=media&token=f4cdb638-87d1-4418-906d-68190f1576af"></img>
                </div> */}
                <div className="about-us-session">
                    <h2 className="about-us-header">About Me</h2>
                    <div className="about-us-body">Hello, my name is Tran Quoc Huy. I am a full stack developer (Nodejs, Golang, Reactjs, Angular) and have had over 2 years in building website applications, from creating interfaces, server handling, database design and putting it on the cloud.
                    <br /> In addition, I also have knowledge of Devops, Agile, Microservices and can communicate in English and German
                    </div>
                </div>
                <div className="component-container">
                    <h2 className="about-us-header">My component</h2>
                    <div className="container-detail">
                        <div className="component-description">During the time I worked, I worked on many projects and applied the right technology to create the best e-commerce websites. Use github to manage source code. Working through famous databases like mongodb, postresDB, DynamicDB. Learn and successfully apply express, redux, redux-saga, context api, nestjs. I also successfully deployed to famous clouds like kubernetes, firebase </div>
                        <div className="component-image">

                            <p>Nodejs</p>
                            <div className="container-skills">
                                <div className="skills nodejs">90%</div>
                            </div>

                            <p>Golang</p>
                            <div className="container-skills">
                                <div className="skills golang">65%</div>
                            </div>

                            <p>Reactjs</p>
                            <div className="container-skills">
                                <div className="skills reactjs">65%</div>
                            </div>

                            <p>Database</p>
                            <div className="container-skills">
                                <div className="skills database">80%</div>
                            </div>

                            <p>Devops</p>
                            <div className="container-skills">
                                <div className="skills devops">50%</div>
                            </div>

                            <p>Microservices</p>
                            <div className="container-skills">
                                <div className="skills microservices">65%</div>
                            </div>

                            {/* <img src="https://firebasestorage.googleapis.com/v0/b/huytran-3e2fe.appspot.com/o/angular.png?alt=media&token=fa359db3-08e4-4c46-ae06-e831eda43df3" />
                            <img src="https://firebasestorage.googleapis.com/v0/b/huytran-3e2fe.appspot.com/o/golang.png?alt=media&token=f6d5fc0f-6ef5-4ef5-a156-aa5fb438ba25" />
                            <img src="https://firebasestorage.googleapis.com/v0/b/huytran-3e2fe.appspot.com/o/nodejs.png?alt=media&token=07b43264-9696-4d71-a0a3-4da91b848a38" />
                            <img src="https://firebasestorage.googleapis.com/v0/b/huytran-3e2fe.appspot.com/o/reactjs.png?alt=media&token=8b00a655-39bf-4825-aeef-df46cd272c6e" />
                            <img src="https://firebasestorage.googleapis.com/v0/b/huytran-3e2fe.appspot.com/o/redux.png?alt=media&token=548e773e-e6c5-4dcf-b5d4-f11e0a63c85a" />
                            <img src="https://343797-1061939-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/10/2-mongoDB.svg" />
                            <img src="https://343797-1061939-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/10/1-postgre.svg" />
                            <img src="https://firebasestorage.googleapis.com/v0/b/huytran-3e2fe.appspot.com/o/kube.png?alt=media&token=16bd2803-fb92-4621-83a5-4efc428738fe" />
                            <img src="https://firebasestorage.googleapis.com/v0/b/huytran-3e2fe.appspot.com/o/firebase.png?alt=media&token=46eb613a-6943-43e9-921e-caf666309667" /> */}
                        </div>

                    </div>
                </div>
                <div className="timeline-con">
                    <h2 className="about-us-header-timeline">My Career Timeline</h2>
                    <div className="timeline">
                        <div className="container left">
                            <div className="content">
                                <h2>2019</h2>
                                <p>Back-end Developer at Monster Pixel. I build 3 website application using nodejs.
                                <br />Xspon.com: An e-commerce website application about events. Using nodejs with framework nestjs and database MySQL. Continuous integration by Jenkins and deploy on Google Cloud. This e-commerce website have over 2000 access per week
                                <br />Misscharm: A blockchain website application for voting. Using nodejs ,express and database MongoDB. Continuous integration and testing by Circle CI and deploy on Firebase hosting.
                            </p>
                            </div>
                        </div>
                        <div className="container right">
                            <div className="content">
                                <h2>2018</h2>
                                <p>Full stack Developer at Fujinet. I build 2 website application using nodejs and golang.
                                <br />Eesty: A blockchain android application. I build back-end for this app by nodejs , express and dynamicDB. Deploy it on AWS.
                                <br />Foody Jounal: A management website application. I build front-end for this web by reactjs and redux.
                            </p>
                            </div>
                        </div>
                        <div className="container left">
                            <div className="content">
                                <h2>2017</h2>
                                <p>Intern developer at TMA Solutions. I learned Agile , tools for Devops likes Jenkins , Nginx , Docker and javascript es6 </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home