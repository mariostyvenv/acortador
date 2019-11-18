const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let linkSchema = new Schema({
    generate: {

    },
    url: {

    }
});

module.exports = mongoose.model('Link', linkSchema);