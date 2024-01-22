
import '../../pages/Dashboard/DashboardPage.css'; 

// eslint-disable-next-line react/prop-types
const Switch = ({ activeTab, setActiveTab }) => {
  return (
    <div className="switch-container">
      <div
        className={`tab ${activeTab === 'announcements' ? 'active' : ''}`}
        onClick={() => setActiveTab('announcements')}
      >
        Announcements
      </div>
      <div
        className={`tab ${activeTab === 'places' ? 'active' : ''}`}
        onClick={() => setActiveTab('places')}
      >
        Places
      </div>
    </div>
  );
};


export default Switch;
