import React from 'react';
import './Input.css';

export class Input extends React.Component {
   
    render() {
        return (

            <div class="input-container">
                <input className='form-input' id={this.props.id} type={this.props.type} value={this.props.value} onChange={this.props.onChange} />
                <label>{this.props.label}</label>
            </div>
        )
    }
}
