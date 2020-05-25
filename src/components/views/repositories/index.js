import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserRepositories } from '../../../actions/index';

import RepositoriesList from './repositoriesList';
import Loading from '../../ui-components/loading';

class Repositories extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      isLoading: true,
      selectedFavoriteRepositories: {},
      favoriteRepositories: []
    };

    this.getRepositoryId = this.getRepositoryId.bind(this);
  };
  
  componentDidMount(){
    this.props.getUserRepositories( this.props.location.state.data );

    if( this.props.favoriteUserRepositories.data ){
      this.setState({ favoriteRepositories: this.props.favoriteUserRepositories.data });
    };
  };

  componentDidUpdate( prevProps ){
    if( prevProps.userRepositories.data !== this.props.userRepositories.data ){
      this.setState({ isLoading: this.props.userRepositories.isLoading });
    };

    if( prevProps.favoriteUserRepositories.data !== this.props.favoriteUserRepositories.data ){
      this.setState({ favoriteRepositories: this.props.favoriteUserRepositories.data });
    };
 };

  getData( data ){
    return  data = {
                      id: data.id,
                      name: data.name,
                      description: data.description,
                      language: data.language,
                      url: data.html_url
                    };
  };

  getRepositoryId( repository ){
    let repositoryData = this.getData( repository );

      this.setState({
        favoriteRepositories: [ ...this.state.favoriteRepositories, repositoryData ],
        selectedFavoriteRepositories: repositoryData
      });
  };
  
  render() {
    return (
      <div className='repositories-list-content'>
         <div className='header-block'>
            <Link 
                to='/' 
                title='Return to search'
            >
              <i className="arrow left"></i>
            </Link>
            <h2 className='repos-title'>{ this.props.location.state.data }</h2>
        </div>
          {
            this.state.isLoading 
            ?
            <Loading />
            :
            !this.props.userRepositories.data.length
            ?
            <h2 className='repositories-list-empty'>Repositories list is empty!</h2>
            :
            <RepositoriesList 
                        repositoriesList={ this.props.userRepositories.data }
                        getReposetoryId={ this.getRepositoryId }
                        favoriteRepositories={ this.state.favoriteRepositories }
                        selectedFavoriteRepositories={ this.state.selectedFavoriteRepositories }
            />
          }
      </div>
    );
  };
};

const mapStateToProps = ( state ) => {
  return {
    userRepositories: state.userRepositories,
    favoriteUserRepositories: state.favoriteUserRepositories
  };
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    getUserRepositories: ( login ) => dispatch( getUserRepositories( login ) )
  };
};

export default  connect( mapStateToProps, mapDispatchToProps )( Repositories );