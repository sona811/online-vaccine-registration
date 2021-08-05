import React from 'react';
import './Login.css';
import { Input } from '../components/form/input/Input';
import { Button } from '../components/form/button/Button';
import { withRouter } from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.redirectToProfilePage()
        this.state = {
            email: '',
            pass: ''
        }
    }

    changeItem = (event) => {
        if (event.target.id === 'mail') {
            this.setState({
                email: event.target.value
            })
        }
        else if (event.target.id === 'pas') {
            this.setState({
                pass: event.target.value
            })
        }
    }

    logIn = () => {
        if (this.state.email === 'sona123@gmail.com' && this.state.pass === 'sona123') {
            localStorage.setItem('email', this.state.email);
            localStorage.setItem('pass', this.state.pass);
            this.props.history.push('/profile')
        }
        else {
            alert('email and password is wrong')
        }
    };

    redirectToRegisterPage = () => {
        this.props.history.push('/register')

    }

    redirectToProfilePage = () => {
        const email = localStorage.getItem('email')
        const pass = localStorage.getItem('pass')

        if (email === 'sona123@gmail.com' || pass === 'sona123') {
            this.props.history.push('/profile')
        }
    }

    render() {
        return (
            <div className="parent-container">
                <div className="container">
                    <form >
                        <Input  id='mail' type='email' value={this.state.email} onChange={this.changeItem} label='Email' />
                        <Input id='pas' type='password' value={this.state.pass} onChange={this.changeItem} label='Password'/>
                        <Button type="Button" id="button" value={this.state.button} onClick={() => this.logIn()} label='Login'/>
                        <Button type="Button" id="button" value={this.state.button} onClick={() => this.redirectToRegisterPage()} label='Register'/>
                    </form>
                </div>
            </div>
        )
    };
};
export default withRouter(Login)