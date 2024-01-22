import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnnouncements } from '../../core/redux/actions/announcementActions';
import { fetchLocations } from '../../core/redux/actions/locationActions'; 
import '../../pages/Dashboard/DashboardPage.css';
import Card from './Card';
import Switch from './Switch';

const Preview = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const [activeTab, setActiveTab] = useState('announcements');
  const announcements = useSelector((state) => state.announcement.announcements);
  const locations = useSelector((state) => state.location.locations); 

  useEffect(() => {
    if (activeTab === 'announcements') {
      dispatch(fetchAnnouncements(token));
    } else if (activeTab === 'locations') {
      dispatch(fetchLocations(token)); 
    }
  }, [dispatch, token, activeTab]);

  return (
    <div className="preview">
      <div className="preview-title">
        <h2>Preview</h2>
      </div>
        <Switch activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="cards-container">
        {activeTab === 'announcements' && announcements.map(announcement => (
          <Card key={announcement.id} title_id={"announcement id: "} body_title={"announcement body"} id={announcement.id} body={announcement.announcement_body} />
        ))}
        {activeTab === 'locations' && locations.map(location => (
          <Card key={location.id}  title_id={"Location id: "} body_title={"Location body"} id={location.id} body={location.description} />
        ))}
      </div>
    </div>
  );
};

export default Preview;
