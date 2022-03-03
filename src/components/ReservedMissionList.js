import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import ReservedMissions from './ReserveMission';

const ReservedMissionsList = () => {
  const missions = useSelector((state) => state.missionsReducer);
  const reserved = missions.filter((missions) => missions.reserved);

  return (
    <>
      <table className="profile-table">
        <tbody>
          {
          reserved.map((mission) => (
            <ReservedMissions
              key={uuidv4()}
              missionName={mission.mission_name}
              missionId={mission.mission_id}
            />
          ))
        }
        </tbody>
      </table>
    </>
  );
};

export default ReservedMissionsList;
