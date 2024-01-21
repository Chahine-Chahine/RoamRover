import '../../pages/Dashboard/DashboardPage.css'; 

const QuickActions = () => {
  return (
    <div className="quick-actions">
      <div className="quick-action-title">
      <h2>Quick Actions</h2>
      </div>
      <div className="section">
        <h3>Announcements</h3>
        <div className="actions">
          <button className="action-button green">Create Announcement</button>
          <button className="action-button red">Delete Announcement</button>
          <button className="action-button yellow">Edit Announcement</button>
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
    </div>
  );
}

export default QuickActions;
