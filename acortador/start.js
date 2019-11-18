const path = require('path');
const colors = require('colors');
const {validarExpress} = require(path.join(__dirname,'server','connections','express.js'));
const {validarMongo} = require(path.join(__dirname,'server','connections','mongodb.js'));

validarExpress()
    .then(()=>{
        console.log(`EXPRESS: ${'ONLINE'.green}`);
    })
    .catch(()=>{
        console.log(`EXPRESS: ${'FAIL'.red}`);
    })

validarMongo()
    .then(()=>{
        console.log(`MONGO: ${'ONLINE'.green}`);
    })
    .catch(()=>{
        console.log(`MONGO: ${'FAIL'.red}`);
    })