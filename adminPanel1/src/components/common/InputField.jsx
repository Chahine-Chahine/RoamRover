import { useState } from "react";
import PropTypes from 'prop-types';



const InputField = ({name, placeholder}) => {

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
    
    return(
        <input
              type="text"
              name= {name}
              value={place.name}
              onChange={handleChange}
              placeholder= {placeholder}
            />
    )
}

// Prop type validation
InputField.propTypes = {
    name: PropTypes.string.isRequired ,
    placeholder: PropTypes.string.isRequired

  };
export default InputField;