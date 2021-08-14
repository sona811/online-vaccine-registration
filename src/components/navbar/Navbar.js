import React from 'react';
import './Navbar.css';
import { Button } from '../form/button/Button';
import { ReactComponent as ChatIcon } from '../../assets/icons/chat.svg'
import { useHistory } from 'react-router-dom';

export const Navbar = () => {
  
  const history = useHistory();

  const removeCredential = () => {
    localStorage.removeItem('email')
    localStorage.removeItem('pass')
    history.push('/login')
  }

  return (
    <div className='nav-container'>
      <Button
        className='message-button'>
        <ChatIcon className='chat-icon' fill='black' />
      </Button>
      <Button onClick={() => removeCredential()} label='Logout' />
    </div>
  )
}