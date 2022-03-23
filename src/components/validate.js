const validate = values => {
    const errors = {}
    if (!values.name) {
      errors.name = 'Please enter your name.'
    }
    if (!values.email) {
        errors.email = 'Please enter your email.'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address.'
    }
    if (!values.phone) {
        errors.phone = 'Please enter your phone number.'
    } else if (!/^\+?[0-9]{10,15}$/i.test(values.phone)) {
        errors.phone = 'Invalid phone number.'
    }
    if (!values.date) {
        errors.date = 'Please enter your preferred date.'
    }
    return errors
  }
  export default validate