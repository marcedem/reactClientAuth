import React from 'react'
import TextField from 'material-ui/TextField'

// Define stateless component to render input and errors
export const renderTextField = ({input, type, label, meta: {touched, error}, ...custom}) => (
    <div>
        <TextField type={type} floatingLabelText={label} {...input} {...custom} />
        {touched && error && <span className="error">{error}</span>}
    </div>
)