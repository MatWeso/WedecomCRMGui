import { tassign } from 'tassign'; 
import { combineReducers } from 'redux'; 
import { IUserState, USER_INITIAL_STATE, userReducer } from './user/store';
import { User } from "app/user/user";
//import { IMessagingState, MESSAGING_INITIAL_STATE, messagingReducer } from './messaging/store';

export interface IAppState {
  user: IUserState
  //messaging: IMessagingState;
}

export const INITIAL_STATE: IAppState = { 
  user: USER_INITIAL_STATE
  //messaging: MESSAGING_INITIAL_STATE
}

export const rootReducer = combineReducers<IAppState>({
  user: userReducer
});