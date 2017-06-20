


import { CREATE_USER, DELETE_USER, UPDATE_USER, LIST_USERS, LOAD_USERS_SUCCESS, LOAD_USER_BY_ID, SERVICE_REQUEST, SERVICE_REQUEST_ERROR, CHECK_USERNAME_SUCCESS } from "./actions";
import { tassign } from "tassign/lib";
import { User } from "./user";
import { Observable } from "rxjs/Observable";

export interface IUserState {
    selectedUser : User;
    users: User[];
    loading;
    error: any;
}

export const USER_INITIAL_STATE: IUserState = { 
  selectedUser : new User(),
  users : [new User()],
  loading : false,
  error : ''
}


function deleteUser(state, action): IUserState {
  return tassign(state, {
    users : []
  });
}

function createUser(state, action): IUserState {
  return tassign(state, {
    users : []
  });
}

function updateUser(state, action): IUserState {
  var user = state.users.find((usr => usr.id === action.user.id));
  var index = state.users.indexOf(user);

  return tassign(state, {
    users : [
      ...state.users.slice(0, index),
      tassign(user, action.user),
      ...state.users.slice(index + 1),
    ]
  });
}

function loadServiceRequest(state, action): IUserState {
  return tassign(state, {
    loading : true
  });   
}

function loadServiceRequestError(state, action): IUserState {
  return tassign(state, {
    error : action.error
  });   
}

function loadUsersSuccess(state, action): IUserState {
  var loadedUsers = action.users;
  return tassign(state, {
    users: loadedUsers,
    loading : false
  }); 
}

function loadUserById(state, action) {
  var user = state.users.find(t => t.id === action.id);
  return tassign(state, {
    selectedUser: state.selectedUser = user
  }); 
}

function checkUsernameSuccess(state, action) {
  return tassign(state, {
    loading : false
  }); 
}

export function userReducer(state: IUserState = USER_INITIAL_STATE, action): IUserState {
  switch (action.type) {
    case CREATE_USER:            return createUser(state, action);
    case DELETE_USER:         return deleteUser(state, action);
    case UPDATE_USER:         return updateUser(state, action);
    case SERVICE_REQUEST:  return loadServiceRequest(state, action);
    case SERVICE_REQUEST_ERROR:  return loadServiceRequestError(state, action);
    case LOAD_USERS_SUCCESS:  return loadUsersSuccess(state, action);
    case LOAD_USER_BY_ID:     return loadUserById(state, action);
    case CHECK_USERNAME_SUCCESS:     return checkUsernameSuccess(state, action);
    
  }

  return state; 
}