import Content from "../components/Homepage/Content";
import Sidebar from "../components/Homepage/Sidebar";
import './Home.css'


const Home = () => {

    return (
        <div className="container">
          <Sidebar />
          <Content />
        </div>
      );
}

export default Home;