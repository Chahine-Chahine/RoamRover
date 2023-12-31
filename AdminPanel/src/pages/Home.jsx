// import Content from "../components/Homepage/Content";
import Sidebar from "../components/Homepage/Sidebar";
import './Home.css';
import dodoImage from '../assets/dodo.jpeg'


const Home = () => {

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
        </div>
        </>

      );
}

export default Home;