import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { RadioButton } from 'material-ui/RadioButton';
import MenuItem from 'material-ui/MenuItem';
import validate from '../utils/errorValidations';
import './userForm.css';
import {
    renderSelectField,
    renderTextField,
    renderRadioGroup
  } from '../utils/renderField';

let UserForm = props => {
    const { handleSubmit, reset, pristine, submitting } = props;
    return(
        <form onSubmit={handleSubmit}>
            <div className="heading">
                User Form
            </div>
            <div>
                <Field name="firstName" component={renderTextField} label="First Name"></Field>
            </div>
            <div>
                <Field name="lastName" component={renderTextField} label="Last Name"></Field>
            </div>
            <div>
                <Field name="email" component={renderTextField} label="Email"></Field>
            </div>
            <div className="label_radio"> 
                <label>Sex</label>
                <Field name="sex" component={renderRadioGroup}>
                    <RadioButton value="male" label="male"/>
                    <RadioButton value="female" label="female"/>
                </Field>
            </div>
            <div>
                <Field name="phone" component={renderTextField} label="phone"/>
            </div>
            <div>
                <Field name="designation" component={renderSelectField} label="Designation" className="dropdown">
                   <MenuItem value={'HOD'} primaryText="HOD"/>
                   <MenuItem value={'SE'} primaryText="SE"/>
                   <MenuItem value={'ESE'} primaryText="ESE"/>
                </Field>
            </div>
            <div classNotes="notes">
                <Field name="notes" component={renderTextField} label="Notes" multiline={true} rows={2}/>
            </div>
            <div>
                <button type="submit" disabled={pristine || submitting} className="btn btn-success">Submit</button>
                <button type="button" disabled={pristine || submitting} className="btn btn-success">Clear</button>
            </div>
        </form>
    )
}
UserForm = reduxForm({
  form: 'userForm',
  validate
})(UserForm);

export default UserForm;