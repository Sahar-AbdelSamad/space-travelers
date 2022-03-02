const FETCH_SUCCESS = 'space-travelers/missions/FETCH_SUCCESS';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return (action.payload);
    default:
      return state;
  }
};

export default reducer;

export const fetchDataMissionsSuccess = (payload) => ({
  type: FETCH_SUCCESS,
  payload,
});

export const fetchDataMissions = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await response.json();
  const info = Object.entries(data).map(([key, value]) => ({
    mission_id: key,
    mission_name: value.mission_name,
    description: value.description,
  }));
  dispatch(fetchDataMissionsSuccess(info));
};
