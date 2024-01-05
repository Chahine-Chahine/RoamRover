import Form from '../Homepage/Form';
import Sidebar from "../Homepage/Sidebar";
import '../../pages/Home.css'
import dodoImage from '../../assets/dodo.jpeg'


const AddPlace = () => {

    return (
      <>      
      <div className="header">
    <img src={dodoImage} alt='profile-picture' className='profile-img'/>
      <div className="title">
        <h1>Welcome back Chahine</h1>
      </div>
      </div>
        <div className="container">
          <div className="sidebar">
          <Sidebar/>
          </div>
          <div className="content">
          <div className="content">
            <Form title={'Add Place'} />
            </div>
          </div>
        </div>
        </>

      );
}

export default AddPlace;