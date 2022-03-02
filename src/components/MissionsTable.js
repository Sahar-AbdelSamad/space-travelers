import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import MissionList from './MissionList';
import { fetchDataMissions } from '../redux/missions/missions';

const MissionsTable = () => {
  const missions = useSelector((state) => state.missionsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataMissions());
  }, []);

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
                key={mission.mission_id}
                id={mission.mission_id}
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
