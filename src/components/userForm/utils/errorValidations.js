const validate = values => {
    const errors = {}
    const requiredFields = ['firstName', 'lastName', 'email', 'sex', 'phone', 'designation', 'notes']
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
    })
    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (values.phone && !/^(\+\d{1,3}[- ]?)?\d{10,12}$/.test(values.phone)) {
        errors.phone = 'Invalid phone number'
    }

    if (values.notes && values.notes.length > 150 ) {
        errors.notes = 'Maximum length exceeded'
    }
    return errors
}

export default validate;