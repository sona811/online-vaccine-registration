import React from 'react';
import { BackButton } from '../../../components/backButton/BackButton';
import './SeeMySchedule.css';

export class SeeMySchedule extends React.Component {


  render() {
    return (
      <div className='schedule-container'>
        <BackButton className='back-button' onClick={this.props.onBackPress} />
        <div className='table-container'>
          <table>
            <tr>
              <th>Dose</th>
              <th>Vaccine Name</th>
              <th>Time</th>
              <th>Place</th>
            </tr>
            <tr>
              <td>Dose 1</td>
              <td>COVISHIELD</td>
              <td>10 AM</td>
              <td>Thane</td>
            </tr>
          </table>
        </div>
      </div>
    )
  }
}
