import { LOGIN, IS_LOGIN, ALL_AUDIT_LOGS, GET_ALL_APPLICATIONS, GET_ALL_ACTION_TYPES} from '../actions/types.js';

const initialState = {
login: [],
allApplications: [],
allAuditLogs: [],
allActionTypes: []
}

export default function(state = initialState, action) {
    switch(action.type){
        case LOGIN: 
        return {
            ...state,
            login: action.payload.data,
        }
        case GET_ALL_APPLICATIONS: 
        return {
            ...state,
            allApplications: action.payload,
      }
      case ALL_AUDIT_LOGS: 
      return {
          ...state,
          allAuditLogs: action.payload,
    }
    case GET_ALL_ACTION_TYPES: 
    return {
        ...state,
        allActionTypes: action.payload,
  }
      default: 
      return state;
  }
}
