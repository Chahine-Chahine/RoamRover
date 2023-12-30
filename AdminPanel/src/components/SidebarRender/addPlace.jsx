import Content from "../Homepage/Content";
import Sidebar from "../Homepage/Sidebar";
import '../../pages/Home.css'


const AddPlace = () => {

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

export default AddPlace;