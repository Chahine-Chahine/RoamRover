import Content from "../components/Homepage/Content";
import Sidebar from "../components/Homepage/Sidebar";
import './Home.css'


const Home = () => {

    return (
      <>      
      <div className="title">
        <h1>Welcome back Chahine</h1>
      </div>
        <div className="container">
          <div className="sidebar">
          <Sidebar/>
          </div>
          <div className="content">
          <Content />
          </div>
        </div>
        </>

      );
}

export default Home;