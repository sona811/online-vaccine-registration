import React from 'react';
import './Button.css';

export const Button = ({ className, id, type, value, onClick, label, children }) => {

    return (
        <div className='container'>
            <button
                className={className}
                id={id}
                type={type}
                value={value}
                onClick={onClick} >
                {label !== undefined
                    ? <label>{label}</label>
                    : children
                }
            </button>
        </div>
    )
}

