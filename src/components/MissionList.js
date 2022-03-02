import PropTypes from 'prop-types';

const MissionList = (props) => {
  const {
    missionName, description, id,
  } = props;

  return (
    <tr key={id}>
      <td className="fs-5 fw-bold">{missionName}</td>
      <td>{description}</td>
      <td><span className="badge squared-pill bg-secondary text-light">NOT A MEMBER</span></td>
      <td><button className="btn btn-outline-secondary" type="button">Join Mission</button></td>
    </tr>
  );
};

MissionList.propTypes = {
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default MissionList;
