const FETCH_SUCCESS = 'space-travelers/rockets/FETCH_SUCCESS';
const RESERVE_STATUS = 'space-travelers/rockets/RESERVE_STATUS';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return ([...action.payload]);
    case RESERVE_STATUS: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: !rocket.reserved };
      });
      return [...newState];
    }
    default:
      return state;
  }
};

export default reducer;

export const fetchDataSuccess = (payload) => ({
  type: FETCH_SUCCESS,
  payload,
});

export const reserveStatus = (payload) => ({
  type: RESERVE_STATUS,
  payload,
});

export const fetchData = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await response.json();
  const info = Object.entries(data).map(([key, value]) => ({
    id: key,
    rocket_name: value.rocket_name,
    description: value.description,
    flickr_images: value.flickr_images[0],
    reserved: false,
  }));
  dispatch(fetchDataSuccess(info));
};
