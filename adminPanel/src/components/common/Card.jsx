import '../../pages/Dashboard/DashboardPage.css';

// eslint-disable-next-line react/prop-types
const Card = ({ title_id,body_title,  id, body }) => {
  console.log('Card props:', { id, body });
  return (
    <div className="card">
      <div className="id"> {title_id} {id}</div>
      <div className="body"> {body_title}:<br/>{body}</div>
    </div>
  );
};

export default Card;
