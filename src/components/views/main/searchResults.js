import React from 'react';
import { Link } from 'react-router-dom';

const SearchResults = ( props ) => {
   return (
      <div className='user-informations-blocks'>
         {
            props.allUsersList.map( user => (
               <div 
                  className='col-md-4 user-block' 
                  key={ user.id } 
               >
                  <Link to={{ 
                              pathname: `/repos/${ user.login }`,  
                              state: { data: user.login } 
                           }}>
                     <img 
                           className='user-avatar' 
                           alt='avatar' 
                           src={ user.avatar_url } 
                     />
                     <div className='user-login'>{ user.login }</div>
                  </Link>
               </div>
            ))
         }
      </div>
   );
};

export default SearchResults;