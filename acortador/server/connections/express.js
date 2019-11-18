const express =  require('express');
const bodyParser =  require('body-parser');
const path =  require('path');
const main =  require(path.join(__dirname,'..','routes','main'));

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(main);
app.use(express.static(path.join(__dirname, '..', '..', 'public')));

const validarExpress = () =>{
    return new Promise((resolve, reject)=>{
        app.listen(3000, (res)=>{
            resolve();
        })
        .on('error', (err)=>{
            reject();
        })
    })
}

module.exports = {
    validarExpress
}