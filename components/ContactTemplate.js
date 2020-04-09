import React from 'react';
import * as EmailValidator from 'email-validator';
import PhoneValidator from 'phone';
import postContactForm from '../bin/postContactForm';

class ContactTemplate extends React.Component {
  static get FieldNames() {
    return ['name', 'phone', 'email', 'message'];
  }
  
  constructor (props) {
    super(props);

    // initial state object for form fields
    const stateForFields = {}

    // fills initial value and error state for fields
    this.constructor.FieldNames.forEach(fieldName => {
      stateForFields[fieldName] = '';
      stateForFields[`${fieldName}Error`] = false;
    });

    this.state = {
      ...stateForFields,
      success: false,
      error: '',
      inflight: false,
    };
  }

  handleInputOnChange = e => {
    // add active class so materialize doesn't collapse lable
    e.target.classList.add('active');
  
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  emailIsValid = () => EmailValidator.validate(this.state.email);

  phoneIsValid = () => {
    const result = PhoneValidator(this.state.phone, 'USA', true);
    return result.length > 0;
  };

  setError = (fieldName, bool) => this.setState({ [`${fieldName}Error`]: bool });

  validateFields = () => {
    // validates specified fields,
    const fieldsToValidate = ['email', 'phone'];   
    
    // returns array of errors
    const errors = [];

    // runs validator fieldIsValid for each
    fieldsToValidate.forEach(fieldName => {
      const isValid = this[`${fieldName}IsValid`]();
      if (!isValid) errors.push(`${fieldName} is invalid`);
      this.setError(fieldName, !isValid);
    });

    return errors;
  };

  isMissingFields = () => {
    // iterates over field names, checks the field has a value in state
    // if there is no value sets its error state to true
    // returns true if any field is missing
    const missingFieldNames = [];
    const filledFieldNames = [];

    // sort fieldName into missing or filled
    this.constructor.FieldNames.forEach(fieldName => {
      (!this.state[fieldName] ? missingFieldNames : filledFieldNames).push(fieldName);
    });

    // set fieldError to true or false
    missingFieldNames.forEach(fieldName => this.setError(fieldName, true));
    filledFieldNames.forEach(fieldName => this.setError(fieldName, false));

    return missingFieldNames.length > 0;
  }

  handleErrors = () => {
    // holds errors generated from existence and validation checks
    const errors = [];
    
    const isMissingFields = this.isMissingFields();

    if (isMissingFields) {
      // add error message if missing any fields
      errors.push('The highlighted fields are required');
    } else {
      // validates fields, add errors for invalid fields
      errors.push.apply(errors, this.validateFields());
    }

    // generates the error message from errors and saves it to state for display
    // as feedback to the user, if none will be empty string
    this.setState({ error:  errors.join(', ') });

    // if there are any errors, return false
    return errors.length > 0;
  }

  getErrorStatus = fieldName => {
    // helper for getting a fields error state by fieldName
    return this.state[`${fieldName}Error`];
  }

  handleSubmit = async e => {
    // prevent page from refreshing on submit
    e.preventDefault();
    
    // set request status to inflight and force update to disable button
    await this.setState({ inflight: true });
    await this.forceUpdate();
    
    // Runs only if there are no errors
    if (!this.handleErrors()) {
      const {name, phone, email, message} = this.state;
      const failureMsg = 'Something went wrong. Please give us a call instead';
      
      // postContactForm will success or fail callback depending on whether
      // the request resolves or errors out
      const successCallback = res => {
        const success = res.status == 200;
        this.setState({ success, error: success ? '' : failureMsg });
      };
      const failCallback = () => this.setState({ success: false, error: failureMsg });
  
      postContactForm({ name, phone, email, message }, successCallback, failCallback);
    }

    // 3 second delay before enabling button
    setTimeout(() => this.setState({ inflight: false }), 3000);
  }

  render() {
    // override in child class
    return null;
  }
}

export default ContactTemplate;