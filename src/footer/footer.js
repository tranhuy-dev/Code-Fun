import React , {Component} from 'react';
import './footer.css';
import { FaFacebookF ,FaLinkedinIn,FaGithub } from 'react-icons/fa';
export default class Footer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="contact-container">
                    <div className="form-contact">
                        CONTACT
                        <br />
                        tqhuy1996.developer@gmail.com
                        <br />
                        Tel: 84-946515847
                    </div>

                    <div className="social-container">
                        <a href="https://www.facebook.com/huytran.prince" target="_blank">
                        <FaFacebookF color="white" size="30px"/>
                        </a>
                        <a href="https://www.linkedin.com/in/huy-tran-777551178/" target="_blank">
                        <FaLinkedinIn color="white" size="30px"/>
                        </a>
                        <a href="https://github.com/tqhuy-dev" target="_blank">
                        <FaGithub color="white" size="30px"/>
                        </a>
                    </div>
                </div>
        )
    }
}