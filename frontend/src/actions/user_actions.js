import * as UserApiUtil from '../util/user_api_util';
import { receiveCurrentUser } from './session_actions';




export const RECEIVE_USER = "RECEIVE_USER";
// export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
// export const CLEAR_USER_ERRORS = "CLEAR_USER_ERRORS";

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
});

export const fetchUser = (userId) => (dispatch) => (
    UserApiUtil.fetchUser(userId).then(user => dispatch(receiveUser(user)))
)

export const fetchUserRefresh = (userId) => (dispatch) => (
    UserApiUtil.fetchUser(userId).then(user => {
        
        // debugger
        dispatch(receiveCurrentUser(user.data))})
)

export const updateUser = (data) => (dispatch) => (
    UserApiUtil.updateUser(data).then(newUser => dispatch(receiveUser(newUser)))
)