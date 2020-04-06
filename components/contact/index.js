import SectionHeader from '../SectionHeader';
import Info from './Info';
import InputField from './InputField';

const Contact = () => (
  <section className="section contact-us__container grey darken-4" id="contact!">
    <SectionHeader title="CONTACT US" className="white-text" />
    <div className="row container contact-us white">
      <form className="col s12 l7">
        <div className="row">
          <InputField icon="account_circle" label="Name" type="text" />
          <InputField icon="phone" label="Telephone" type="tel"/>
          <InputField icon="email" label="Email" type="email" />
          <div className="input-field col s12">
            <i className="material-icons prefix">mode_edit</i>
            <textarea id="icon_prefix2" className="materialize-textarea"></textarea>
            <label htmlFor="icon_prefix2">Message</label>
          </div>
          <button className="btn waves-effect waves-light col s12" type="submit" name="action">
            Submit
          </button>
        </div>
      </form>
      <Info />
    </div>
  </section>
);


export default Contact;