import React from 'react';
import * as EmailValidator from 'email-validator';
import PhoneValidator from 'phone';
import FormInput from './FormInput';
import FormMessaging from './FormMessaging';
import postContactForm from '../../../bin/postContactForm';
import M from '../../../bin/materializeLoader';

class Contact extends React.Component {
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
    };
  }

  handleInputOnChange = e => {
    if (M) M.updateTextFields();
    const {name, value} = e.target;
    this.setState({ [name]: value });
  }

  // componentWillMount() {
  //   if (M) M.updateTextFields();
  // }

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

  handleSubmit = ev => {
    // prevent page from refreshing on submit
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    // Runs only if there are no errors
    if (!this.handleErrors()) {
      const {name, phone, email, address, message} = this.state;
      xhr.open(form.method, form.action);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          form.reset();
          this.setState({status: "SUCCESS"});
        } else {
          this.setState({status: "ERROR"});
        }
      };
      xhr.send(data);
    }
  }

  render(){
    const { success, error } = this.state;

    // sets contact form messaging based on success state
    const messaging = success ? {
      title: "THANK YOU",
      msg: "We've received your request. Keep an eye out for our email or phone call. We look forward to working with you."
    } : {
      title: "REQUEST A FREE ESTIMATE",
      msg: "Short but sweet prompt to user to contact us. Not too long, not too short."
    };

    return (
      <form className="contact-form col col s12 m12 l5 right z-depth-3" onSubmit={this.handleSubmit} action={"https://formspree.io/mgelkeeo"} method={"POST"}>
        <FormMessaging {...messaging} />
        {!success && (
          <div className="contact-fields">
            {this.constructor.FieldNames.map(name => (
              <FormInput
                name={name}
                value={this.state[name]}
                onChange={this.handleInputOnChange}
                error={this.getErrorStatus(name)}
                key={name}
              />
            ))}
            {error && <p className="contact-error">{error}</p>}
            <button className="waves-effect waves-light btn contact-button left">Submit Your Request</button>
          </div>
        )}
      </form>
    );
  }
}

export default Contact;
