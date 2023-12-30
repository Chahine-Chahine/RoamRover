import{ useState } from 'react';
import PropTypes from 'prop-types';
import './Form.css';
import InputField from '../common/InputField';

const Form = ({ title, hidden }) => {
  const [place, setPlace] = useState({
    name: '',
    estBudget: '',
    location: '',
    description: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPlace(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(place);
  };

  return (
    <div className="form-holder">
      <form onSubmit={handleSubmit}>
        <h2>{title}</h2>
        <div className="form-body-wrapper">
          <div className="form-credentials">
           <InputField name='name' placeholder='name'/>
           <InputField name='estBudget' placeholder='Est budget'/>
           <InputField name='location' placeholder='Location'/>
          </div>
          <div className="form-description">
            <textarea
              name="description"
              value={place.description}
              onChange={handleChange}
              placeholder="Description"
              className= {hidden}
            />
          </div>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

// Prop type validation
Form.propTypes = {
  title: PropTypes.string.isRequired,
  hidden: PropTypes.string
};

export default Form;
