import { useSelector } from 'react-redux';
import './MyProfile.css';
import ReservedMissionsList from './ReservedMissionList';

const Profile = () => {
  const rockets = useSelector((state) => state.rocketsReducer.filter((item) => item.reserved));

  return (
    <div className="profile">
      <section className="section-profile">
        <h2>My Missions</h2>
        <ReservedMissionsList />
      </section>
      <section className="section-profile">
        <h2>My Rockets</h2>
        <table className="profile-table">
          {rockets.map((rocket) => (
            <tbody key={rocket.id}>
              <tr>
                <td className="res-rocket">
                  {rocket.rocket_name}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </section>
    </div>
  );
};

export default Profile;
