import '../../pages/Dashboard/DashboardPage.css';

// eslint-disable-next-line react/prop-types
const Card = ({ id, body }) => {
  console.log('Card props:', { id, body });
  return (
    <div className="card">
      <div className="id">Announcement Id: {id}</div>
      <div className="body">Announcement body:<br/>{body}</div>
    </div>
  );
};

export default Card;
