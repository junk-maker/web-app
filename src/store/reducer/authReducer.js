import {ACTION_TYPES} from './authActionTypes';
import StorageService from '../../services/StorageService';

let storage = new StorageService();

export const INITIAL_STATE = {
  token: '',
  loading: false,
  success: false,
  data: {
    error: '',
    success: false,
  },
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_START:
      return {
        token: '',
        loading: true,
        success: false,
        data: {
          error: '',
          success: false,
        },
      };
    case ACTION_TYPES.FETCH_SUCCESS:
      // storage.setItem(id, action.payload.token);
      return {
        ...state,
        loading: false,
        token: action.payload.token,
        success: action.payload.success,
      };
    case ACTION_TYPES.FETCH_ERROR:
      return {
        token: '',
        loading: false,
        success: false,
        data: action.payload.data,
      };
    case ACTION_TYPES.RESET_STATE:
      return {
        ...state,
        token: '',
        loading: false,
        success: false,
        data: {
          error: '',
          success: false,
        },
      }
    default:
      return state;
  }
};