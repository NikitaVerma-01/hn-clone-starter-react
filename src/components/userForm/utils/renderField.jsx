import SelectField from 'material-ui/SelectField'
import TextField from 'material-ui/TextField';
import { RadioButtonGroup } from 'material-ui/RadioButton';
import React from 'react';

const renderTextField = ({ input, label, meta:{ touched,error}, ...custom}) => (
    <TextField hintText={label}
     floatingLabelText={label}
     errorText={touched && error}
     errorStyle={{ textAlign: "left"}}
     {...input}
     {...custom}
    />
)

const renderSelectField = ({ input, label, meta: { touched, error }, children }) => (
    <SelectField
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        onChange={(event, index, value) => input.onChange(value)}
        children={children} />
)

const renderRadioGroup = ({ input, ...rest }) => (
    <RadioButtonGroup
        {...input}
        {...rest}
        valueSelected={input.value}
        onChange={(event, value) => input.onChange(value)}
    />
)

export {
    renderSelectField,
    renderTextField,
    renderRadioGroup,
}