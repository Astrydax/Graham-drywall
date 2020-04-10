import SectionHeader from '../SectionHeader';
import Info from './Info';
import InputField from './InputField';
import ContactTemplate from '../ContactTemplate';

class Contact extends ContactTemplate {
  static get FieldOptions () {
    return {
      name: {
        icon: 'account_circle',
        label: 'Name',
        type: 'text',
      },
      phone: {
        icon: 'phone',
        label: 'Telephone',
        type: 'tel',
      },
      email: {
        icon: 'email',
        label: 'Email',
        type: 'email',
      },
      message: {
        icon: 'mode_edit',
        label: 'Message',
        type: 'text',
      },
    };
  };

  render() {
    const { FieldNames, FieldOptions } = this.constructor;
    const { success, error, inflight } = this.state;
  
    return (
      <section className="section contact-us__container grey darken-4" id="contact!">
        <SectionHeader title="CONTACT US" className="white-text" />
        <div className="row container contact-us white">
          {!success ? (
            <form className="col s12 l7" onSubmit={this.handleSubmit}>
              <div className="row">
                {FieldNames.map(name => (
                  <InputField
                    icon={FieldOptions[name].icon}
                    label={FieldOptions[name].label}
                    type={FieldOptions[name].type}
                    name={name}
                    value={this.state[name]}
                    onChange={this.handleInputOnChange}
                    error={this.getErrorStatus(name)}
                    key={name}  
                  />
                ))}
                {error && <p className="contact-error contact-us__error col s12">{error}</p>}
                <button
                  className="btn waves-effect waves-light col s12"
                  disabled={inflight}  
                >
                  Submit
                </button>
              </div>
            </form>
          ) : (
            <div className="col s12 l7 contact-us__success section">
              <h2>Thanks For Contacting Us</h2>
              <div className="divider" />
              <p>Thank you for your interest in our services. Your message is on its way to us, and when we get it we will respond as soon as possible. In the meantime why not visit us on <a href="https://www.facebook.com/Graham-Drywall-100539464946053">facebook</a>?</p>
            </div>
          )}
          <Info />
        </div>
      </section>
    );
  }
}

export default Contact;