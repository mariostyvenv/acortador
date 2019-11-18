const path = require('path');
const express = require('express');
const Link = require(path.join(__dirname,'..','schemas', 'link'));

const app = express();

app.post('/register', function(req, res) {

    let valor = Math.random().toString(36).substring(2, 5) + Math.random().toString(36).substring(2, 5);

    let link = new Link({
        generate: valor,
        url: cleanUrl(req.body.url)
    });

    link.save((err, link) => 
    {
        if (err) 
        {
            res.json({
                estado: 'error',
                message: 'error in operation'
            });
        } 
        else 
        {
            res.json({
                estado: 'ok',
                message: 'ready insert',
                id: link.generate
            });
        }
    });

});

app.get('/:id', function(req, res) {
    Link.find({ generate: req.params.id }, (err, link) => {
        if(link != null && link != "" && link != undefined)
        {
            res.redirect(`http://${link[0].url}`);
        }
    });
});

const cleanUrl = (url) => {
    let u = url.replace('http://', '');
    u = u.replace('https://', '');
    return u;
}

module.exports = app;