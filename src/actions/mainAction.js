import axios from 'axios';  
import { LOGIN, ALL_AUDIT_LOGS, GET_ALL_APPLICATIONS, GET_ALL_ACTION_TYPES } from './types';
import { LOG_API } from './apiMiddleware';

export const _getLogin = (data) => dispatch =>  {
   console.log("data", data)
    axios.post(`http://ecorally.ng/api/ecorally/api/v1/authentication/login`, data)
       .then(res => dispatch({
               type: LOGIN,
               payload: res.data
             }))
       .catch((error) => {
           dispatch({
               type:  LOGIN,
               payload: error
             })
       })
  }
  // export const _registerUser = (data) => dispatch =>  {
  //    axios.post(`http://ecorally.ng/api/ecorally/api/v1/customer/registration`, data)
  //       .then(res => dispatch({
  //               type: REGISTER,
  //               payload: res.data
  //             }))
  //       .catch((error) => {
  //           dispatch({
  //               type:  REGISTER,
  //               payload: error
  //             })
  //       })
  //  }

  
  export const _getAllApplications = () => dispatch =>  {
    let params = {
      page: "1",
      size: "50"
  }
    axios.get(`${LOG_API}/api/v1/audit/apps`, {
      params})
       .then(res => dispatch({
               type: GET_ALL_APPLICATIONS,
               payload: res.data.data
             }))
       .catch((error) => {
           dispatch({
               type: GET_ALL_APPLICATIONS,
               payload: error
             })
       })
}

export const _getAllAuditLogs = (params) => dispatch =>  {
  axios.post(`${LOG_API}/api/v1/audit/logs/search`, 
    params)
     .then(res => dispatch({
             type: ALL_AUDIT_LOGS,
             payload: res.data.data
           }))
     .catch((error) => {
         dispatch({
             type: ALL_AUDIT_LOGS,
             payload: error
           })
     })
}

export const _getAllActionTypes = () => dispatch =>  {
  axios.get(`${LOG_API}/api/v1/audit/action-type/all`)
     .then(res => dispatch({
             type: GET_ALL_ACTION_TYPES,
             payload: res.data.data
           }))
     .catch((error) => {
         dispatch({
             type: GET_ALL_ACTION_TYPES,
             payload: error
           })
     })
}