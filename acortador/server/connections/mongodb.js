const mongoose = require('mongoose');

const validarMongo = () => {
    return mongoose.connect('mongodb://localhost:27017/Acortador', {useNewUrlParser: true, useUnifiedTopology: true})
}

module.exports = {
    validarMongo
}