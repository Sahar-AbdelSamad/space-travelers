import { PropTypes } from 'prop-types';
import store from '../redux/configureStore';

const ReservedMissions = (props) => {
  const { missionName, missionId, wikipedia } = props;
  return (
    <tr>
      <td className="p-3 pb-4">
        {missionName}
        <button type="button" onClick={() => store.dispatch((missionId))}>Leave Mission</button>
        <button type="button" onClick={() => window.open(wikipedia)}>Read More</button>
      </td>
    </tr>
  );
};

ReservedMissions.propTypes = {
  missionName: PropTypes.string.isRequired,
  missionId: PropTypes.string.isRequired,
  wikipedia: PropTypes.string.isRequired,
};

export default ReservedMissions;
