const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const port = 8000;
const app = express();

app.use(express.static('assets'));
app.use(expressLayouts);
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

app.set('view engine','ejs');
app.set('views','./views');

app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log('Error in running the server');
    }
    console.log('Server running on port :',port);
});