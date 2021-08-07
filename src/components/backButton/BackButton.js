import React from 'react';
import { Button } from '../form/button/Button';

export class BackButton extends React.Component {

    render(){
        return(
            <Button 
                className={this.props.className}
                onClick={this.props.onClick}
                label='Back'/>
        )
    }
}