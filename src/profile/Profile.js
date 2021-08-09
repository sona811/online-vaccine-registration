import React from 'react';
import './Profile.css';
import { Navbar } from '../components/navbar/Navbar';
import { ProfileDetails } from './profileDetails/ProfileDetails';
import { withRouter } from 'react-router-dom';
import { Button } from '../components/form/button/Button';
import { BookNewVaccine } from './vaccine/book/BookNewVaccine';
import { SeeMySchedule } from './vaccine/schedule/SeeMySchedule';

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            componentName: ''
        }
        this.checkValidCredentialLogin()
    }

    checkValidCredentialLogin = () => {
        const email = localStorage.getItem('email')
        const pass = localStorage.getItem('pass')

        if (email !== 'sona123@gmail.com' || pass !== 'sona123') {
            this.props.history.push('/login')
        }
    }

    setComponentName = (name) => {
        this.setState({
            componentName: name
        })
    }

    renderComponent = () => {
        if (this.state.componentName === 'book') {
            return <BookNewVaccine onBackPress={this.onBackPress} />
        }
        else if (this.state.componentName === 'schedule') {
            return <SeeMySchedule onBackPress={this.onBackPress} />
        }
        else {
            return (
                <div>
                    <Button
                        onClick={() => this.setComponentName('book')}
                        className='button-container'
                        type='button'
                        label='BOOK NEW VACCINE' />

                    <Button
                        onClick={() => this.setComponentName('schedule')}
                        className='button-container'
                        type='button'
                        label='SEE MY SCHEDULE' />
                </div>
            )
        }
    }

    onBackPress = () => {
        this.setState({
            componentName: ''
        })
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="main-container">
                    <div className="profile-details-container"><ProfileDetails /></div>
                    <div className='vaccine-container'>
                        {this.renderComponent()}
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Profile)