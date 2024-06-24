import React from 'react'
import './Fileds.css'
import InputMask from 'react-input-mask';

export default function Fileds(props) {
    const { name,text,size, ftype } = props;
    let inputBoxClass = 'input-box-register';
    let inputType = ftype; // Store the type prop in a variable
    // Check if ftype is empty or not provided, default to 'text'
    if (!ftype) {
        inputType = 'text';
      }else if (ftype ==='date'){
        inputType = ' text'
        inputBoxClass += ' short-input';

      }
    if (size === 'small') {
      inputBoxClass += ' short-input';
    } else if (size === 'medium') {
      inputBoxClass += ' medium-input';
    } 

    return (
      <div className={inputBoxClass}>
        {name === 'DtNasc' ? (
          <InputMask
            mask="99/99/9999"
            placeholder="Data Nascimento"
            name="DtNasc"
            id="dtnasc"
            maskChar={null}
          >
            {(inputProps) => <input {...inputProps} type="text" />}
          </InputMask>
        ) : (
          <input type={ftype} id={name} name={name} placeholder={text} />
        )}
        <label className="place" htmlFor={name}>{text}</label>
      </div>
    );
}
