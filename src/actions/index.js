import axios from 'axios';
import { 
          GET_ALL_USERS_DATA, 
          GET_USER_DATA,
          GET_USER_REPOSITORIES,  
          GET_ALL_USERS_DATA_ERROR, 
          GET_USER_DATA_ERROR, 
          GET_USER_REPOSITORIES_ERROR, 
          GET_FAVORITE_USER_REPOSITORIES,
          GET_FAVORITE_USER_REPOSITORIES_ERROR 
        } from './types';

export function getAllUsersData(){
  return async dispatch => {
    try{
      const res = await axios.get( 'https://api.github.com/users' );
      dispatch({
        type: GET_ALL_USERS_DATA,
        payload: res.data
      });
    }catch( err ){
      dispatch({
        type: GET_ALL_USERS_DATA_ERROR,
        payload: err
      });
    };
  };
};

export function getUserData( username ){
  return async dispatch => {
    try{
      const res = await axios.get( `https://api.github.com/search/users?q=${username}` );
      res.data.total_count
      ?
      dispatch({
        type: GET_USER_DATA,
        payload: res.data
      })
      :
      dispatch({
        type: GET_USER_DATA_ERROR,
        payload: 'Not Found!'
      });
    }catch( err ){
      dispatch({
        type: GET_USER_DATA_ERROR,
        payload: err
      });
    };
  };
};

export function getUserRepositories( login ){
  return async dispatch => {
    try{
      const res = await axios.get( `https://api.github.com/users/${login}/repos` );
      dispatch({
        type: GET_USER_REPOSITORIES,
        payload: res.data
      });
    }catch( err ){
      dispatch({
        type: GET_USER_REPOSITORIES_ERROR,
        payload: err
      });
    };
  };
};

export function addFavoriteRepositories( data ){
  return async () => {
    try{
      await axios.post( 'http://localhost:8080', data, { withCredentials: true } );
    }catch( err ){
      console.log( err );
    };
  };
};

export function getFavoriteUserRepositories(){
  return async dispatch => {
    try{
      const res = await axios.get( 'http://localhost:8080', { withCredentials: true } );
      dispatch({
        type: GET_FAVORITE_USER_REPOSITORIES,
        payload: res.data
      });
    }catch( err ){
      dispatch({
        type: GET_FAVORITE_USER_REPOSITORIES_ERROR,
        payload: err
      });
    };
  };
};

export function removeFavoriteUserRepositories( id ) {
  return async () => {
    try{
      await axios.delete( `http://localhost:8080/${id}`, { withCredentials: true } );
    }catch( err ){
      console.log( err );
    };
  };
};