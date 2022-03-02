import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const MISSIONS_API_URL = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  isFetching: false,
  data: [],
  error: {},
};

export const getMissions = createAsyncThunk(
  'redux/missions/missions.js',
  async () => {
    const response = await axios.get(MISSIONS_API_URL).catch((error) => error);
    const data = [];

    response.data.forEach((obj) => {
      const {
        missionId, missionName, description,
      } = obj;

      const formatedData = {
        missionId,
        missionName,
        description,
      };

      data.push(formatedData);
    });

    return data;
  },
);

const missionsSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [getMissions.pending.type]: (state) => ({ ...state, isFetching: true }),
    [getMissions.fulfilled.type]: (state, action) => (
      {
        ...state, isFetching: false, data: action.payload, error: {},
      }),
    [getMissions.rejected.type]: (state) => ({ ...state, isFetching: false, error: {} }),
  },
});

export default missionsSlice.reducer;
