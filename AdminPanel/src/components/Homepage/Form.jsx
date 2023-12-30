import { useState } from 'react';
import './Form.css'

function Form() {
  const [place, setPlace] = useState({
    name: '',
    estBudget: '',
    location: '',
    description: ''
  });

  const handleSubmit = (event) => {
    const { name, value } = event.target;
    setPlace(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="form-holder">
      <form onSubmit={handleSubmit}>
        <h2>Add Place</h2>
        <div className="form-body-wrapper">
          <div className="form-credentials">
        <input
          type="text"
          name="name"
          value={place.name}
          onChange={handleSubmit}
          placeholder="Name"
        />
        <input
          type="text"
          name="estBudget"
          value={place.estBudget}
          onChange={handleSubmit}
          placeholder="Est budget"
        />
        <input
          type="text"
          name="location"
          value={place.location}
          onChange={handleSubmit}
          placeholder="Location"
        />
        </div>
        <div className="form-description">
        <textarea
          name="description"
          value={place.description}
          onChange={handleSubmit}
          placeholder="Description"
        />
        </div>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}


export default Form;
