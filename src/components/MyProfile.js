import { useSelector } from 'react-redux';
import './MyProfile.css';

const Profile = () => {
  const rockets = useSelector((state) => state.rocketsReducer);
  const rocket = rockets.filter((item) => (item.reserved === true));

  return (
    <div className="profile">
      <section className="missions-profile">Missions</section>
      <section className="rockets-profile">
        <h1>My Rockets</h1>
        <table className="profile-table">
          {rocket.map((rocket) => (
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
