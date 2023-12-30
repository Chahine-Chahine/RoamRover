import './Sidebar.css'


function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="menu">
        <ul>
          <li className="li-title"><a>User Managemnet</a></li>
          <li className="li-body"><a>Delete a user</a></li>
          <li className="li-body"><a>Delete a trip</a></li>
          <li className="li-body"><a>Read trips</a></li>
          <li className="li-body"><a>Initiate Conversation</a></li>
        </ul>
        <ul>
          <li className="li-title"><a>Content Management</a></li>
          <li className="li-body"><a>Add Place</a></li>
          <li className="li-body"><a>delete Place</a></li>
          <li className="li-body"><a>update Place</a></li>
          <li className="li-body"><a>Read Place</a></li>
        </ul>
        <ul>
          <li className="li-title"><a>Announcements</a></li>
          <li className="li-body"><a>Create Announcement </a></li>
          <li className="li-body"><a>Edit Announcement </a></li>
          <li className="li-body"><a>Delete Announcement </a></li>
        </ul>
        <ul>
        <li className="li-title"><a>Content Moderation</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
