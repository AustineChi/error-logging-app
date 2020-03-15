import axios from "axios";
import {
  ALL_AUDIT_LOGS,
  GET_ALL_APPLICATIONS,
  GET_ALL_ACTION_TYPES,
  Add_NEW_APP,
  EDIT_APP,
  DELETE_APP,
  Add_ACTION_TYPE,
  EDIT_ACTION_TYPE,
  DELETE_ACTION_TYPE,
  UPDATE_TOAST
} from "./types";

import { LOG_API } from "./apiMiddleware";

export const _addNewApp = data => dispatch => {
  axios
    .post(`${LOG_API}/api/v1/audit/apps`, data)
    .then(res =>
      dispatch({
        type: Add_NEW_APP,
        payload: {
          visible: true,
          level: "success",
          message: res.data.message
        }
      })
    )
    .catch(error => {
      dispatch({
        type: Add_NEW_APP,
        payload: {
          visible: true,
          level: "danger",
          message:  error.message
        }
      });
    });
};

export const _editApp = data => dispatch => {
  axios
    .put(`${LOG_API}/api/v1/audit/apps`, data)
    .then(res =>
      dispatch({
        type: EDIT_APP,
        payload: {
          visible: true,
          level: "success",
          message: res.data.message
        }      
      })
    )
    .catch(error => {
      dispatch({
        type: EDIT_APP,
        payload: {
          visible: true,
          level: "danger",
          message:  error.message
        }
      });
    });
};

export const _deleteApp = id => dispatch => {
  axios
    .delete(`${LOG_API}/api/v1/audit/apps/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_APP,
        payload:  {
          visible: true,
          level: "success",
          message: "deleted Successfully"
        }
      })
    )
    .catch(error => {
      dispatch({
        type: DELETE_APP,
        payload:  {
          visible: true,
          level: "danger",
          message:  error.message
        }
      });
    });
};

export const _getAllApplications = () => dispatch => {
  let params = {
    page: "1",
    size: "50"
  };
  axios
    .get(`${LOG_API}/api/v1/audit/apps`, {
      params
    })
    .then(res =>
      dispatch({
        type: GET_ALL_APPLICATIONS,
        payload: res.data.data
      })
    )
    .catch(error => {
      dispatch({
        type: GET_ALL_APPLICATIONS,
        payload: error
      });
    });
};

export const _getAllAuditLogs = params => dispatch => {
  axios
    .post(`${LOG_API}/api/v1/audit/logs/search`, params)
    .then(res =>
      dispatch({
        type: ALL_AUDIT_LOGS,
        payload: res.data.data
      })
    )
    .catch(error => {
      dispatch({
        type: ALL_AUDIT_LOGS,
        payload: error
      });
    });
};

export const _getAllActionTypes = () => dispatch => {
  axios
    .get(`${LOG_API}/api/v1/audit/action-type/all`)
    .then(res =>
      dispatch({
        type: GET_ALL_ACTION_TYPES,
        payload: res.data.data
      })
    )
    .catch(error => {
      dispatch({
        type: GET_ALL_ACTION_TYPES,
        payload: error
      });
    });
};

export const _addActionType = data => dispatch => {
  axios
    .post(`${LOG_API}/api/v1/audit/action-type`, data)
    .then(res =>
      dispatch({
        type: Add_ACTION_TYPE,
        payload: {
          visible: true,
          level: "success",
          message: res.data.message
        }
      })
    )
    .catch(error => {
      dispatch({
        type: Add_ACTION_TYPE,
        payload:  {
          visible: true,
          level: "danger",
          message:  error.message
        }
      });
    });
};

export const _editActionType = data => dispatch => {
  axios
    .put(`${LOG_API}/api/v1/audit/action-type`, data)
    .then(res =>
      dispatch({
        type: EDIT_ACTION_TYPE,
        payload:{
          visible: true,
          level: "success",
          message: res.data.message
        }
      })
    )
    .catch(error => {
      dispatch({
        type: EDIT_ACTION_TYPE,
        payload:  {
          visible: true,
          level: "danger",
          message:  error.message
        }
      });
    });
};

export const _deleteActionType = id => dispatch => {
  axios
    .delete(`${LOG_API}/api/v1/audit/action-type/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_ACTION_TYPE,
        payload: {
          visible: true,
          level: "success",
          message: "deleted Successfully"
        }
      })
    )
    .catch(error => {
      dispatch({
        type: DELETE_ACTION_TYPE,
        payload:  {
          visible: true,
          level: "danger",
          message:  error.message
        }
      });
    });
};

export const _updateToast = (data) => dispatch =>  {
  dispatch({
      type:  UPDATE_TOAST,
      payload: data
    })
}


