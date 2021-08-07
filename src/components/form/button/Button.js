import React from 'react';
import './Button.css';

export class Button extends React.Component {

    render() {
        return (
            <div className='container'>
                <button
                    className={this.props.className}
                    id={this.props.id} type={this.props.type}
                    value={this.props.value}
                    onClick={this.props.onClick} >
                    { this.props.label !== undefined
                        ? <label>{this.props.label}</label>
                        : this.props.children
                    }
                </button>
            </div>
        )
    }

}

