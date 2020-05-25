import React from 'react';

import 'bootstrap/dist/js/bootstrap.js';

const ModalWindow = ( props ) => {
    if( props.repositoriesInformation ){
        return (
            <div id="modal-information" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">{ props.repositoriesInformation.name }</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                        </div>
                        <div className="modal-body">
                            <div className='modal-descriprion-block'>
                                <span>Description:</span>
                                { props.repositoriesInformation.description ? props.repositoriesInformation.description : 'Description is empty!' }
                            </div>
                            <p className='modal-language-block'>
                                <span>Language:</span>
                                { props.repositoriesInformation.language }
                            </p>
                            <span>Link:</span>
                            <a href={ props.repositoriesInformation.html_url } target='_blank' rel="noopener noreferrer">
                                { props.repositoriesInformation.html_url }
                            </a>
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
            <div id="modal-information" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Not Found!</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                        </div>
                        <div className="modal-body">
                            Not Found!
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

export default ModalWindow;