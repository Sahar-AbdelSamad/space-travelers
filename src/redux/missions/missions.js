const FETCH_MISSIONS = 'space-travelers/missions/FETCH_MISSIONS';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return ([...action.payload]);
    default:
      return state;
  }
};

export default reducer;

export const fetchDataMission = (payload) => ({
  type: FETCH_MISSIONS,
  payload,
});

export const fetchData = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await response.json();
  const info = Object.entries(data).map(([key, value]) => ({
    mission_id: key,
    mission_name: value.mission_name,
    description: value.description,
    flickr_images: value.flickr_images[0],
    reserved: false,
  }));
  dispatch(fetchDataMission(info));
};