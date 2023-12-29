import { useState } from 'react';

function Form() {
  const [place, setPlace] = useState({
    name: '',
    estBudget: '',
    location: '',
    description: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic here
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>Add Place</h3>
      <input type="text" placeholder="Name" value={place.name} onChange={(e) => setPlace({...place, name: e.target.value})} />
      <input type="text" placeholder="Est budget" value={place.estBudget} onChange={(e) => setPlace({...place, estBudget: e.target.value})} />
      <input type="text" placeholder="Location" value={place.location} onChange={(e) => setPlace({...place, location: e.target.value})} />
      <textarea placeholder="Description" value={place.description} onChange={(e) => setPlace({...place, description: e.target.value})} />
      <button type="submit">Save</button>
    </form>
  );
}

export default Form;
