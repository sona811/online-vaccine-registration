import React from 'react';
import './Regform.css';
import { Input } from '../components/form/input/Input';
import { Button } from '../components/form/button/Button';
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

        if (email === 'sona123@gmail.com' || pass === 'sona123') {
            this.props.history.push('/profile')
        }
    }

    redirectToLoginPage = () => {
        this.props.history.push('/login')
    }

    render() {
        return (
            <div className='reg-container'>
                <div className='container'>
                    <Input type='First name' value={this.props.name} onChange={this.onChange} label='First Name' />
                    <Input type='Last name' value={this.props.name} onChange={this.onChange} label='Last Name' />
                    <Input id='mail' type='email' value={this.props.email} onChange={this.changeItem} label='Email' />
                    <Input id='pas' type='password' value={this.props.email} onChange={this.changeItem} label='Password' />
                    <Input id='pas' type='password' value={this.props.password} onChange={this.changeItem} label='Confirm Password' />
                    <Button type="Login" id="button" value={this.props.button} onClick={() => this.redirectToLoginPage()} label='Login' />
                    <Button type="Register" id="button" value={this.props.button} label='Register' />
                </div>
            </div>
        )
    };
};
export default withRouter(Regform)

