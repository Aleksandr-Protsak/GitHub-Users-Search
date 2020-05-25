import { combineReducers } from 'redux';
import { 
            allUsersData, 
            userData, 
            userRepositories, 
            getFavoriteRepositories 
        } from './reducer';

const allReducers = combineReducers({
    allUsersList: allUsersData,
    userData: userData,
    userRepositories: userRepositories,
    favoriteUserRepositories: getFavoriteRepositories
});

export default allReducers;