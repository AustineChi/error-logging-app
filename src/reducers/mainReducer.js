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
  } from "../actions/types.js";
  
  const initialState = {
    allApplications: [],
    allAuditLogs: [],
    allActionTypes: [],
    toast: {
        visible: false,
        level: "success",
        message: null
      }
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_ALL_APPLICATIONS:
        return {
          ...state,
          allApplications: action.payload
        };
      case ALL_AUDIT_LOGS:
        return {
          ...state,
          allAuditLogs: action.payload
        };
      case GET_ALL_ACTION_TYPES:
        return {
          ...state,
          allActionTypes: action.payload
        };
        case Add_NEW_APP:
        case EDIT_APP:
        case DELETE_APP:
        case Add_ACTION_TYPE:
        case EDIT_ACTION_TYPE:
        case DELETE_ACTION_TYPE:
        case UPDATE_TOAST:
        return {
          ...state,
          toast: action.payload
        };
      default:
        return state;
    }
  }
  