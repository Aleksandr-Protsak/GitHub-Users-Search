import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllUsersData, getUserData } from '../../../actions/index';

import GithubLogo from '../../../assets/github-logo.svg';
import Input from '../../ui-components/input';
import SearchResults from './searchResults';
import Loading from '../../ui-components/loading';

class Main extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      username: null,
      isLoading: false,
      errorMessage: null
    };

    this.onChangeInput = this.onChangeInput.bind(this);
  };

  componentDidMount(){
    if( !this.props.allUsersData.data.length ) this.props.getAllUsersData();
    this.timer = null;
  };

  componentDidUpdate( prevProps ){
    if( prevProps.userData.data !== this.props.userData.data){
      this.setState({ isLoading: this.props.userData.isLoading });
    };

    if( prevProps.userData.errorMessage !== this.props.userData.errorMessage ){
      this.setState({ 
                      isLoading: this.props.userData.isLoading, 
                      errorMessage: this.props.userData.errorMessage 
                    });
    };
    
    if( prevProps.allUsersData.data !== this.props.allUsersData.data ){
      this.setState({ isLoading: this.props.allUsersData.isLoading });
    };
 };

  checkInput( inputValue ) {
    return inputValue.replace( /\s+/g, '' ).length;
  };

  onChangeInput(e){
    this.setState({ isLoading: true });
    clearTimeout( this.timer );
    let username = e.target.value;

    this.setState({ username: username });

    this.checkInput( username )
    ? 
    this.timer = setTimeout( () => this.doneAction(), 1500 ) 
    : 
    this.setState({ 
                    isLoading: false, 
                    errorMessage: null 
                  });

  };

  doneAction(){
    this.props.getUserData( this.state.username );
  };

  render() {
    return (
      <div className='wrapper'>
        <div className='github-logo'>
          <img alt='github-icon' src={ GithubLogo } className='svg logo' />
        </div>
        <Input 
            className={ this.state.errorMessage ? 'search-input error' : 'search-input' }
            type={ 'text' }
            name={ 'search-input' }
            title={ 'Enter text' }
            placeholder={ 'Search GitHub Users' }
            onInput={ this.onChangeInput }
        />
        <span className={ this.state.errorMessage ? 'error-message show' : 'error-message hide' }>{ this.state.errorMessage }</span>
        <hr/>
        <div className='results-content'>
          {
            this.state.isLoading 
            ? 
            <Loading /> 
            : 
            <SearchResults 
              allUsersList={ this.props.userData.data.length && !this.props.userData.errorMessage ? this.props.userData.data : this.props.allUsersData.data }
            />
          }
        </div>
      </div>
    );
  };
};

const mapStateToProps = ( state ) => {
  return {
    allUsersData: state.allUsersList,
    userData: state.userData
  };
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    getAllUsersData: () => dispatch( getAllUsersData() ),
    getUserData: ( username ) => dispatch( getUserData( username ) ),
  };
};

export default  connect( mapStateToProps, mapDispatchToProps )( Main );