import { useSelector } from 'react-redux';
import MissionList from './MissionList';

const MissionsTable = () => {
  const missions = useSelector((state) => state.missionsReducer);

  return (
    <div>
      <table className="table-bordered table-striped table-hover">
        <thead>
          <tr className="fs-5">
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {
            missions.map((mission) => (
              <MissionList
                key={mission.mission_id}
                id={mission.mission_id}
                missionName={mission.mission_name}
                description={mission.description}
                reserved={mission.reserved}
              />
            ))
          }
        </tbody>
      </table>
    </div>
  );
};
export default MissionsTable;