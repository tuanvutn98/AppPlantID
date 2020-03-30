import axios from 'axios';
import { API_URL, CLIENT_ROOT_URL } from './index';
import { returnErrors } from './errorActions';

import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
} from './type';

// Login User
export const login = ({ email, password }) => dispatch => {
    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    // Request body
    const body = JSON.stringify({ email, password });
    axios
        .post(`${API_URL}/auth/signin`, body, config, console.log("success"))
        .then(res =>
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            }),
            console.log("success")
            // window.location.href = `${CLIENT_ROOT_URL}`
        )
        .catch(err => {
            dispatch(
                returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
            );
            dispatch({
                type: LOGIN_FAIL
            });
        });
};