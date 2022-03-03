import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import ReservedMissions from './ReservedMissions';

const ReservedMissionsList = () => {
  const missions = useSelector((state) => state.missions);
  const reserved = missions.data.filter((missions) => missions.reserved);

  return (
    <>
      { reserved.length === 0
      && <p >&emsp; Join a Mission First</p> }
      <table className="table table-bordered rounded">
        <tbody>
          {
          reserved.map((mission) => (
            <ReservedMissions
              key={uuidv4()}
              missionName={mission.mission_name}
              missionId={mission.mission_id}
              wikipedia={mission.wikipedia}
            />
          ))
        }
        </tbody>
      </table>
    </>
  );
};

export default ReservedMissionsList;
