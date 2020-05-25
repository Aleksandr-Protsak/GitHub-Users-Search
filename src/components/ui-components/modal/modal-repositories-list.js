import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { removeFavoriteUserRepositories, getFavoriteUserRepositories } from '../../../actions/index';

import 'bootstrap/dist/js/bootstrap.js';

const ModalWindow = ( props ) => {
    const { getFavoriteRepositories } = props;

    useEffect( () => {
        getFavoriteRepositories();
    }, [  getFavoriteRepositories ] );

    function handleClick( id ){
        props.removeFavoriteRepositories( id )
        .then( 
            () => props.getFavoriteRepositories()
        );
    };

    if( props.favoriteUserRepositories.data.length ){
        return (
            <div id="modal-repositories-list" className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">List of repositories that interest you</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                        </div>
                        <div className="modal-body">
                            <table className="favorite-repos-list">
                                <tbody>
                                {
                                    props.favoriteUserRepositories.data.map( (repos, index) => (
                                        <tr key={ repos._id } >
                                            <td className="favorite-repos-name">
                                                <a href={ repos.url } >
                                                    { repos.name }
                                                    <span>
                                                        { repos.language }
                                                    </span>
                                                </a>                                           
                                            </td>
                                            <td className="favorite-repos-description">
                                                <a href={ repos.url } >
                                                    { repos.description ? repos.description : 'Description is empty!' }
                                                </a>
                                            </td>
                                            <td 
                                                className="remove-item"
                                                title="Remove this repository"
                                                onClick={ handleClick.bind( null, repos._id ) }
                                            >
                                            </td>
                                            
                                        </tr>   
                                        
                                    ))
                                }
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Закрыть</button>
                        </div>
                    </div>
                </div>
            </div>
        );  
    }else{
        return(
            <div id="modal-repositories-list" className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">List of repositories that interest you</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                        </div>
                        <div className="modal-body">
                            You don't have favorite repositories.
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Закрыть</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

const mapStateToProps = ( state ) => {
    return {
      favoriteUserRepositories: state.favoriteUserRepositories
    };
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        removeFavoriteRepositories: ( id ) => dispatch( removeFavoriteUserRepositories( id ) ),
        getFavoriteRepositories: () => dispatch( getFavoriteUserRepositories() )
    };
};

export default  connect( mapStateToProps, mapDispatchToProps )(  ModalWindow );