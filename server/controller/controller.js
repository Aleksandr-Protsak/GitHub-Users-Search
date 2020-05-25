const Repositories = require( '../models/Repositories' );

const ObjectID = require( 'mongodb' ).ObjectID;


exports.addRepositories = function( data ) {
    let newRepositories = new Repositories( data );
    
    return newRepositories .save();
};

exports.getRepositories = function() {

    return Repositories.find();

};

exports.removeRepositories = function( id ) {
   
    return Repositories.deleteOne({ '_id' : new ObjectID( id ) });

};  