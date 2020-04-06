const FormInput = ({ name, value, onChange, error }) => (
  <div className="input-field" data-error={error}>
    <input
      id={name}
      name={name}
      onChange={onChange}
      value={value}
      type="text"
      className="active"
    />
    <label htmlFor={name}>{name} {error && "*"}</label>
  </div>
);

export default FormInput;