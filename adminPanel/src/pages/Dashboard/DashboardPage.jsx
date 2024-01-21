import './DashboardPage.css';
import peopleImage from '../../assets/people.png';
import QuickActions from '../../components/common/QuickActions';


const DashboardPage = () => {

    return(
        <div className="dashboard-page">
            <div className="dashboard-wrapper">
                <div className="left-dashboard">
                    <div className="left-upper-card">
                        <img src={peopleImage} className='dashboard-image'/>
                        <h2 className='greeting-admin'>Hello, Chahine</h2>
                    </div>
                        <QuickActions />
                </div>
                <div className="right-dashboard"></div>
            </div>
        </div>
    )
};

export default DashboardPage;