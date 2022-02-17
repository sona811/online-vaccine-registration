import React from 'react';
import Login from './Login';
import './Regform.css';
import { withRouter } from "react-router-dom";

class Regform extends React.Component {
    constructor(props) {
        super(props)
        this.checkValidCredentialRegister()
        this.state = {
            reg: ''
        }
    }

    checkValidCredentialRegister = () => {
        const email = localStorage.getItem('email')
        const pass = localStorage.getItem('pass')

        if (email !== 'sona123@gmail.com' || pass !== 'sona123')  {
            this.props.history.push('/login')
        }
    }

    removeCredential = () => {
        localStorage.removeItem('email')
        localStorage.removeItem('pass')
        this.props.history.push('/login')
   }

    render() {
        return (
            <div className='reg-container'>
                <h3>First Name:</h3>
                <input type='text' placeholder='Enter Your First Name' />
                <h3>Last Name:</h3>
                <input type='text' placeholder='Enter Your Last Name' />
                <h3>E-Mail:</h3>
                <input type='email' placeholder='Enter Your Email' />
                <h3>Password:</h3>
                <input type='password' placeholder='Password' />
                    <h3>Home Address:</h3>
                    <input type='text' placeholder='Enter Home Add' />
                    <h3>Office Address:</h3>
                    <input type='text' placeholder='Enter Office Add' />
                    <h3>City:</h3>
                    <input type='text' placeholder='Enter Your Name' />
                    <h3>Pincode:</h3>
                    <input type='number' placeholder='Enter Your Name' />
               <br />
                <button>Register</button>
                <br />
                <button onClick={() => this.removeCredential()}>Logout</button>
            </div>
        )
    };
};
export default withRouter(Regform)

