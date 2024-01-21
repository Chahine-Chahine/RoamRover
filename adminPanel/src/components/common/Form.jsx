

// eslint-disable-next-line react/prop-types
const Form = ({ label, type, name, placeholder }) => {
    return (
      <div className="form-field">
        <input label={label} type={type} name={name} placeholder={placeholder} required />
      </div>
    );
  };

  export default Form;