import '../../pages/Dashboard/DashboardPage.css'; 
import Card from './Card';
import Switch from './Switch';

const Preview = () => {
  return (
    <div className="preview">
      <div className="preview-title">
        <h2>Preview</h2>
      </div>
      <Switch />
      <div className="cards-container">
        <Card id={1} body="Hello all, this is the first announcement in the app" />
        <Card id={2} body="Hello all, this is the second announcement in the app" />
        <Card id={3} body="Hello all, this is the third announcement in the app" />
        <Card id={4} body="Hello all, this is the fourth announcement in the app" />
        <Card id={5} body="Hello all, this is the fifth announcement in the app" />
        <Card id={6} body="Hello all, this is the sixth announcement in the app" />
      </div>
    </div>
  );
}

export default Preview;
