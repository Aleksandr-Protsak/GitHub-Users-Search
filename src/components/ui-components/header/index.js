import React from 'react';

import ModalWindow from '../modal/modal-repositories-list';
import ListIcon from '../../../assets/repos-list-icon.svg';

const Header = ( props ) => {
    return (
        <div className='main-header'>
            <a 
                className='list-icon-block'
                href="#modal-repositories-list" 
                data-toggle="modal"
                data-target=".bd-example-modal-lg"
                title='Favorite repositories'
            >
            <img alt='list-icon' src={ ListIcon } className='svg list-icon' />
        </a>
        <ModalWindow />
      </div>
    );
};

export default  Header;