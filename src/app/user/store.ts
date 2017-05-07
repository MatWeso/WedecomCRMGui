


import { ADD_USER, DELETE_USER, UPDATE_USER, LIST_USERS } from "app/user/actions";
import { tassign } from "tassign/lib";
import { User } from "app/user/user";
import { Observable } from "rxjs/Observable";

export interface IUserState {
    selectedUser : User;
    users: Observable<User[]>;
    
}

export const USER_INITIAL_STATE: IUserState = { 
  selectedUser : new User(),
  users : null
  //userList : [],
  // selectedUser : new User(),
  // selectedObservableUser : null
}


function deleteUser(state, action): IUserState {
  return tassign(state, {
    userList : []
  });
}

function addUser(state, action): IUserState {
  return tassign(state, {
    userList : []
  });
}

function updateUser(state, action): IUserState {
  return tassign(state, {
    userList : []
  });
}

function listUsers(state, action): IUserState {
  return tassign(state, {
    userList : []
  });
}

export function userReducer(state: IUserState = USER_INITIAL_STATE, action): IUserState {
  switch (action.type) {
    case ADD_USER: return addUser(state, action);
    case DELETE_USER: return deleteUser(state, action);
    case UPDATE_USER: return updateUser(state, action);
    case LIST_USERS: return listUsers(state, action);
  }

  return state; 
}