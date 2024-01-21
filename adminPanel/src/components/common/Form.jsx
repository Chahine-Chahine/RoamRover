// eslint-disable-next-line react/prop-types
const Form = ({ label, type, name, placeholder, value, onChange }) => {
  return (
    <div className="form-field">
      <input label={label} type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} required />
    </div>
  );
};

export default Form;
