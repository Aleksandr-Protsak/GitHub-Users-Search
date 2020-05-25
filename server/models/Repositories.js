const mongoose = require ( 'mongoose' );
const Schema = mongoose.Schema;

const RepositoriesSchema = new Schema (
    {
        id: Number,
        name: String,
        description: String,
        language: String,
        url: String
    }, 
    { collection : 'repositories' },
    { versionKey: false });

module.exports = mongoose.model ( "repositories" , RepositoriesSchema );