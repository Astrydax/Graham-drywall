const InputField = ({ icon, type, label, value, onChange }) => (
  <div className="input-field col s12">
    <i className="material-icons prefix">{icon}</i>
    <input
      id={label}
      type={type}
      className="validate"
      // value={value}
      // onChange={onChange}
    />
    <label htmlFor={label}>{label}</label>
  </div>
);

export default InputField;