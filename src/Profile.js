import React, { Profiler } from 'react';
import { withRouter } from 'react-router-dom';

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.checkValidCredentialLogin()
    }

    checkValidCredentialLogin = () => {
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
            <div>
                <p>A profile picture is the image that represents a social media account in all its interactions across a platform. ... Profile pictures create a visual association for social media users, making it important for businesses to select the right image.</p>
                <button onClick={()=>this.removeCredential()}>Logout</button> 
            </div>
        )
    }
}
export default withRouter(Profile)