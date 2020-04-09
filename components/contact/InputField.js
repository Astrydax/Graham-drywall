const InputField = ({ icon, type, label, value, onChange, error, name }) => (
  <div className="input-field col s12">
    <i className="material-icons prefix">{icon}</i>
    <input
      id={label}
      type={type}
      className="validate"
      value={value}
      onChange={onChange}
      name={name}
    />
    <label htmlFor={label}>{label} {error && "*"}</label>
  </div>
);

export default InputField;