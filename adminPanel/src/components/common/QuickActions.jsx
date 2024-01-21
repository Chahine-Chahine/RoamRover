import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAnnouncement } from '../../core/redux/actions/announcementActions'; 
import '../../pages/Dashboard/DashboardPage.css'; 
import Modal from './Modal';

const QuickActions = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [announcementData, setAnnouncementData] = useState({ body: '' });
    const token = useSelector(state => state.auth.token); 
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setAnnouncementData({ ...announcementData, [e.target.name]: e.target.value });
    };

    const handleCreateAnnouncement = (e) => {
      e.preventDefault();
      const dataToSend = {
          announcement_body: announcementData.body
      };
      dispatch(createAnnouncement(dataToSend, token));
      setIsModalOpen(false);
  };

    return (
        <>
            <button onClick={() => setIsModalOpen(true)}>Create Announcement</button>
            <button className="action-button red">Delete Announcement</button>
            <button className="action-button yellow">Edit Announcement</button>

            <div className="section">
                <h3>Places</h3>
                <div className="actions">
                    <button className="action-button green">Add a Place</button>
                    <button className="action-button red">Delete a Place</button>
                    <button className="action-button yellow">Edit a Place</button>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Create Announcement">
                <form onSubmit={handleCreateAnnouncement}>
                    <input 
                        type="text"
                        name="body"
                        value={announcementData.body}
                        onChange={handleInputChange}
                        placeholder="Announcement Body"
                    />
                    <button type="submit">Submit</button>
                </form>
            </Modal>
        </>
    );
}

export default QuickActions;
