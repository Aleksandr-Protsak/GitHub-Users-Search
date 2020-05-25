import { 
     GET_ALL_USERS_DATA, 
     GET_USER_DATA, 
     GET_USER_REPOSITORIES,  
     GET_ALL_USERS_DATA_ERROR, 
     GET_USER_DATA_ERROR, 
     GET_USER_REPOSITORIES_ERROR, 
     GET_FAVORITE_USER_REPOSITORIES,
     GET_FAVORITE_USER_REPOSITORIES_ERROR 
   } from './../actions/types';

const DEFAULT_STATE = {
     data: [],
     isLoading: true,
     errorMessage: null,
};

export function allUsersData ( state = DEFAULT_STATE, action ){
    switch ( action.type ) {
          case GET_ALL_USERS_DATA:
               return { ...state, data: action.payload, isLoading: false, errorMessage: null }
          case GET_ALL_USERS_DATA_ERROR:
               return { ...state, errorMessage: action.payload, isLoading: false }
          default:
               return state
     };
};

export function userData ( state = DEFAULT_STATE, action ){
     switch ( action.type ) {
          case GET_USER_DATA:
               return { ...state, data: action.payload.items, isLoading: false, errorMessage: null }
          case GET_USER_DATA_ERROR:
               return { ...state, errorMessage: action.payload, isLoading: false }
          default:
               return state
     };
 };

export function userRepositories ( state = DEFAULT_STATE, action ){
     switch ( action.type ) {
          case GET_USER_REPOSITORIES:
               return { ...state, data: action.payload, isLoading: false, errorMessage: null }
          case GET_USER_REPOSITORIES_ERROR:
               return { ...state, errorMessage: action.payload, isLoading: false }
          default:
               return state
     };
 };

export function getFavoriteRepositories ( state = DEFAULT_STATE, action ){
    switch ( action.type ) {
          case GET_FAVORITE_USER_REPOSITORIES:
               return { ...state, data: action.payload, isLoading: false, errorMessage: null }
          case GET_FAVORITE_USER_REPOSITORIES_ERROR:
               return { ...state, errorMessage: action.payload, isLoading: false }
          default:
               return state
     };
 };