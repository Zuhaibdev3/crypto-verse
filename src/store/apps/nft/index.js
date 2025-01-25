import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import NftServices from '../../../Services/nft.service';
import { toast } from 'react-toastify';

// Initial State
const initialState = {
  allNft: {},
  nft: {},
  status: 'idle',
};

// Fetch Clients
export const GetAllAction = createAsyncThunk('nft/getAll', async (body, { dispatch, getState }) => {
  dispatch(slice.actions.handleStatus('pending'))
  try {
    const response = await NftServices.GetAll(body);
    dispatch(slice.actions.handleStatus('success'));
    return response?.data
  } catch (error) {
    dispatch(slice.actions.handleStatus('error'));
    toast.error(error.response.data.message || "Something went wrong!")
    return error.response.data;
  }
});

// Fetch Clients
export const getOneAction = createAsyncThunk('nft/getOne', async (body, { dispatch, getState }) => {
  dispatch(slice.actions.handleStatus('pending'))
  try {
    const response = await NftServices.getOne(body);
    dispatch(slice.actions.handleStatus('success'));
    return response?.data
  } catch (error) {
    dispatch(slice.actions.handleStatus('error'));
    toast.error(error.response.data.message || "Something went wrong!")
    return error.response.data;
  }
});

// Fetch Clients
export const handleNftLikeReaction = createAsyncThunk('nft/getAll', async (body, { dispatch, getState }) => {
  dispatch(slice.actions.handleStatus('pending'))
  try {
    const response = await NftServices.handleLikeReaction(body.id, { action: body.action });
    dispatch(slice.actions.handleStatus('success'));
    return response?.data
  } catch (error) {
    dispatch(slice.actions.handleStatus('error'));
    toast.error(error.response.data.message || "Something went wrong!")
    return error.response.data;
  }
});

// Fetch Clients
export const updateAction = createAsyncThunk('nft/update', async (body, { dispatch, getState }) => {
  dispatch(slice.actions.handleStatus('pending'))
  let nftId = body.id
  delete body.id
  try {
    const response = await NftServices.update(nftId, { ...body });
    dispatch(slice.actions.handleStatus('success'));
    return response?.data
  } catch (error) {
    dispatch(slice.actions.handleStatus('error'));
    toast.error(error.response.data.message || "Something went wrong!")
    return error.response.data;
  }
});

// export const getAllNFTAction = createAsyncThunk('nft/getAll', async (body, { dispatch, getState }) => {
//   dispatch(slice.actions.handleStatus('pending'))
//   try {
//     const response = await DalleServices.getAll();
//     dispatch(slice.actions.handleStatus('success'));
//     return response?.data
//   } catch (error) {
//     dispatch(slice.actions.handleStatus('error'));
//     toast.error(error.response.data.message || "Something went wrong!")
//     return error.response.data;
//   }
// });

export const slice = createSlice({
  name: 'stabilityAi',
  initialState,
  reducers: {
    handleStatus: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GetAllAction.fulfilled, (state, action) => {
      const { data } = action?.payload;
      state.allNft = data || []
    });
    builder.addCase(getOneAction.fulfilled, (state, action) => {
      const { data } = action?.payload;
      state.nft = data || []
    });

  },

});

export default slice.reducer;
