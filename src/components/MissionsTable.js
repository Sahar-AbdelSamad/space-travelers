import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import MissionList from './MissionList';

const MissionsTable = () => {
  const missions = useSelector((state) => state.missions.data);

  return (
    <div>
      <table className="table table-striped table-hover">
        <tr className="fs-5">
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
        <tbody>
          {
            missions.map((mission) => (
              <MissionList
                key={uuidv4()}
                missionName={mission.mission_name}
                description={mission.description}
              />
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default MissionsTable;
