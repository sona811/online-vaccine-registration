import React from 'react';
import './Navbar.css';
import { Button } from '../form/button/Button';
import { ReactComponent as ChatIcon } from '../../assets/icons/chat.svg'

export class Navbar extends React.Component {

  removeCredential = () => {
    localStorage.removeItem('email')
    localStorage.removeItem('pass')
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className='nav-container'>
        <Button
          className='message-button'>
            <ChatIcon className='chat-icon' fill='black'/>
        </Button>
        <Button onClick={() => this.removeCredential()} label='Logout' />
      </div>
    )
  }
}

