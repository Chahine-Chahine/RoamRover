import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAnnouncement, deleteAnnouncement, updateAnnouncement } from '../../core/redux/actions/announcementActions';
import '../../pages/Dashboard/DashboardPage.css';
import Modal from './Modal';

const QuickActions = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [announcementData, setAnnouncementData] = useState({ body: '' });
  const [announcementIdToDelete, setAnnouncementIdToDelete] = useState('');
  const [announcementIdToUpdate, setAnnouncementIdToUpdate] = useState('');
  const [updatedAnnouncementBody, setUpdatedAnnouncementBody] = useState('');
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setAnnouncementData({
      ...announcementData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateAnnouncement = (e) => {
    e.preventDefault();
    dispatch(createAnnouncement({ announcement_body: announcementData.body }, token));
    setIsCreateModalOpen(false);
  };

  const handleDeleteAnnouncement = (e) => {
    e.preventDefault();
    dispatch(deleteAnnouncement(announcementIdToDelete, token));
    setIsDeleteModalOpen(false);
  };

  
const handleUpdateAnnouncement = (e) => {
  e.preventDefault();
  dispatch(updateAnnouncement(announcementIdToUpdate, { announcement_body: updatedAnnouncementBody }, token));
  setIsUpdateModalOpen(false);
};

  return (
    <div className="quick-actions">
      <h2>Quick Actions</h2>
      <div className="section">
        <h3>Announcements</h3>
        <div className="actions">
          <button className="action-button green" onClick={() => setIsCreateModalOpen(true)}>Create Announcement</button>
          <button  className="action-button red" onClick={() => setIsDeleteModalOpen(true)}>Delete Announcement</button>
          <button className="action-button yellow" onClick={() => setIsUpdateModalOpen(true)}>Edit Announcement</button>
        </div>
      </div>
      <div className="section">
        <h3>Places</h3>
        <div className="actions">
          <button className="action-button green">Add a Place</button>
          <button className="action-button red">Delete a Place</button>
          <button className="action-button yellow">Edit a Place</button>
        </div>
      </div>
      {/* Create Announcement Modal */}
      <Modal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} title="Create Announcement">
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

      {/* Delete Announcement Modal */}
      <Modal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} title="Delete Announcement">
        <form onSubmit={handleDeleteAnnouncement}>
          <input
            type="text"
            value={announcementIdToDelete}
            onChange={(e) => setAnnouncementIdToDelete(e.target.value)}
            placeholder="Announcement ID to delete"
          />
          <button type="submit">Delete</button>
        </form>
      </Modal>

     {/* Update Announcement Modal */}
<Modal isOpen={isUpdateModalOpen} onClose={() => setIsUpdateModalOpen(false)} title="Edit Announcement">
  <form onSubmit={handleUpdateAnnouncement}>
    <input
      type="text"
      value={announcementIdToUpdate}
      onChange={(e) => setAnnouncementIdToUpdate(e.target.value)}
      placeholder="Announcement ID to update"
    />
    <input
      type="text"
      value={updatedAnnouncementBody}
      onChange={(e) => setUpdatedAnnouncementBody(e.target.value)}
      placeholder="New Announcement Body"
    />
    <button type="submit">Update</button>
  </form>
</Modal>
    </div>
  );
};

export default QuickActions;
