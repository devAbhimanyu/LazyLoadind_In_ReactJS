import React from 'react';
import classnames from 'classnames';
import Proptypes from 'prop-types';

const TextInput = (props) => {
    return (
        <div className="form-group">
            <input
                type={props.type}
                name={props.name}
                className={classnames('form-control form-control-lg', {
                    'is-invalid': props.error
                })}
                placeholder={props.placeholder}

                value={props.value}
                onChange={props.delegateFunc}
                disabled={props.disabled}
            />
            {props.info && <small className='form-text text-muted'>{props.info}</small>}
            {props.error && (<div className="invalid-feedback">{props.error}</div>)}
        </div>
    )
}
TextInput.prototype = {
    type: Proptypes.string.isRequired,
    name: Proptypes.string,
    value: Proptypes.string.isRequired,
    delegateFunc: Proptypes.func.isRequired,
    info: Proptypes.string,
    error: Proptypes.object,
    placeholder: Proptypes.string.isRequired,
    disabled: Proptypes.string
}

TextInput.defaultProps = {
    type: 'text'
}
export default TextInput;