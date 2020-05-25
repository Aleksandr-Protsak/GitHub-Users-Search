import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addFavoriteRepositories, getFavoriteUserRepositories } from '../../../actions/index';
import 'bootstrap/dist/js/bootstrap.js';

import ModalWindow from '../../ui-components/modal/modal-information';

const RepositoriesList = ( props ) => {
    const [ index, setIndex ] = useState( null );
    const { 
        selectedFavoriteRepositories, 
        addFavoriteRepositories, 
        getFavoriteRepositories 
    } = props;

    useEffect( () => {
  
        if(Object.keys(selectedFavoriteRepositories).length !== 0) 
            addFavoriteRepositories( selectedFavoriteRepositories )
            .then( 
                () => getFavoriteRepositories()
            );

    }, [ selectedFavoriteRepositories, addFavoriteRepositories, getFavoriteRepositories ] );
  
    return (
      <div className='repos-informations-blocks'>
            <h3>Repositories List:</h3>
            <table className="repos-block-content">
                <tbody>
                    {
                        props.repositoriesList.map( (repos, index) => (
                            <tr 
                                key={ repos.id } 
                                onClick={ () => setIndex( index ) }
                            >
                                <td className="repos-name">
                                    
                                    <a 
                                        href="#modal-information" 
                                        data-toggle="modal"
                                    >
                                        { repos.name }
                                    </a>                                           
                                </td>
                                <td className="repos-description">
                                    <a 
                                        href="#modal-information" 
                                        data-toggle="modal"
                                    >
                                        { repos.description ? repos.description : 'Description is empty!' }
                                    </a>
                                </td>
                                <td 
                                    className= {props.favoriteRepositories.find( item => item.id === repos.id ) ? 'star-icon-block active': 'star-icon-block' }
                                    onClick={ props.getReposetoryId.bind( null, repos ) }
                                >
                                </td>
                                
                            </tr>   
                        ))
                    }
                </tbody>
            </table>
            <ModalWindow 
                repositoriesInformation={ props.repositoriesList[ index ] }
            />
        </div>
    );
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        getFavoriteRepositories: () => dispatch( getFavoriteUserRepositories() ),
        addFavoriteRepositories: ( data ) => dispatch(addFavoriteRepositories( data ) )
    };
};
  
export default  connect( null, mapDispatchToProps )( RepositoriesList );