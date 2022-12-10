import React from 'react';

import './form-input.styles.scss';


const FormInput = ({ children, handleChange, label, inputType, ...otherProps }) => (
    <div className="group">
         {
            label ? (<label className={`${otherProps.value.length ? 'shrink' : 'form-input-label'}`} >
                {label}
            </label>)
                :
                null
        }
        {
            inputType === 'input' &&
            
            <input
            type="text"
            className="form-input"
            onChange={handleChange}
            {...otherProps}
        />
        }
        {
            inputType === 'select' && 
            <select className='form-input' onChange={handleChange} {...otherProps}>{children}</select>
        }
       
    </div>
);
export default FormInput;