import  { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnnouncements } from '../../core/redux/actions/announcementActions';
import '../../pages/Dashboard/DashboardPage.css';
import Card from './Card';
import Switch from './Switch';

const Preview = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const announcements = useSelector((state) => state.announcement.announcements);
  const [activeTab, setActiveTab] = useState('announcements'); 

  useEffect(() => {
    if (activeTab === 'announcements') {
      dispatch(fetchAnnouncements(token));
    }
  }, [dispatch, token, activeTab]);

  return (
    <div className="preview">
      <div className="preview-title">
        <h2>Preview</h2>
      </div>
        <Switch activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="cards-container">
        {activeTab === 'announcements' && announcements.map((announcement) => (
          <Card
            key={announcement.id}
            id={announcement.id}
            body={announcement.announcement_body}
          />
        ))}
      </div>
    </div>
  );
};

export default Preview;
