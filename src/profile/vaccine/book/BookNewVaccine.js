import React from 'react';
import { BackButton } from '../../../components/backButton/BackButton';
import { Button } from '../../../components/form/button/Button';
import { Input } from '../../../components/form/input/Input';
import './BookNewVaccine.css';

export class BookNewVaccine extends React.Component {


  render() {
    return (
      <div className='book-vaccine-container'>
        <BackButton className='back-button' onClick={this.props.onBackPress} />
        <div className='form-container'>
          <form>
            <Input
              type='text'
              label='Full Name' />

            <Input
              type='number'
              label='Age' />

            <Input
              type='number'
              label='Pincode' />

            <Input
              type='number'
              label='Id Number' />

            <Button
              label='Submit' />
          </form>
        </div>
      </div>
    )
  }
}

