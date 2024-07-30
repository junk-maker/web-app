// import {useReducer} from 'react';
// import {authReducer} from './authReducer';
// import {INITIAL_STATE} from './authReducer';
import {ACTION_TYPES} from './authActionTypes'
import {httpLinksService} from '../../services/HttpLinksService';

export const authEventHandler = async (type, uid, password, dispatch) => {
    dispatch({type: ACTION_TYPES.FETCH_START});
    let {data, token, success} = await httpLinksService.getApi(null, httpLinksService.auth()[type], {uid, password}, null).post();
    
    if (success) {
        dispatch({type: ACTION_TYPES.FETCH_SUCCESS, payload: {token, success}});
    } else {
        dispatch({type: ACTION_TYPES.FETCH_ERROR, payload: {data}});
    };
};

export const authResetStateHandler = async (dispatch) => {
    dispatch({type: ACTION_TYPES.RESET_STATE});
};