import { useState } from 'react';
import '../../pages/Dashboard/DashboardPage.css'; 

const Switch = () => {
  const [activeTab, setActiveTab] = useState('announcements');

  const onTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="switch-container">
      <div
        className={`tab ${activeTab === 'announcements' ? 'active' : ''}`}
        onClick={() => onTabChange('announcements')}
      >
        Announcements
      </div>
      <div
        className={`tab ${activeTab === 'places' ? 'active' : ''}`}
        onClick={() => onTabChange('places')}
      >
        Places
      </div>
    </div>
  );
};

export default Switch;
