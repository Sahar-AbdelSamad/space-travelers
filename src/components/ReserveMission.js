import PropTypes from 'prop-types';

const ReservedMissions = (props) => {
  const { missionName } = props;
  return (
    <tr>
      <td className="res-rocket">
        {missionName}
      </td>
    </tr>
  );
};

ReservedMissions.propTypes = {
  missionName: PropTypes.string.isRequired,
};

export default ReservedMissions;
