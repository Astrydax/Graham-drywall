import React from 'react';
import * as EmailValidator from 'email-validator';
import PhoneValidator from 'phone';
import FormInput from './FormInput';
import FormMessaging from './FormMessaging';
import ContactTemplate from '../../ContactTemplate';

class Contact extends ContactTemplate {
  render(){
    const { success, error, inflight } = this.state;

    // sets contact form messaging based on success state
    const messaging = success ? {
      title: "THANK YOU",
      msg: "We've received your request. Keep an eye out for our email or phone call. We look forward to working with you."
    } : {
      title: "REQUEST A FREE ESTIMATE",
      msg: "Short but sweet prompt to user to contact us. Not too long, not too short."
    };

    return (
      <form className="contact-form col col s12 m12 l5 right z-depth-3" onSubmit={this.handleSubmit}>
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
            <button
              className="waves-effect waves-light btn contact-button left"
              disabled={inflight}  
            >
              Submit Your Request
            </button>
          </div>
        )}
      </form>
    );
  }
}

export default Contact;
