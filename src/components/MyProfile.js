import { useSelector } from 'react-redux';
import './MyProfile.css';

const Profile = () => {
  const rockets = useSelector((state) => state.rocketsReducer);
  const rocket = rockets.filter((item) => (item.reserved === true));

  return (
    <>
      <section className="mission">Profile</section>
      <section className="rockets">
        <h1>My Rockets</h1>
        <table>
          {rocket.map((rocket) => (
            <tbody key={rocket.id}>
              <tr>
                <td>
                  {rocket.rocket_name}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </section>
    </>
  );
};

export default Profile;
