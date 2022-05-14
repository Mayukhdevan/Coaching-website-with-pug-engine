const express = require("express");
const app = express();
const path = require("path");
const port = 8000;

// app.use(express.static('static', options))
// // EXPRESS SPECIFIC STUFFS
app.use('/static', express.static('static')); //for serving static files
app.use(express.urlencoded({extended: true}));



// // PUG SPECIFIC STUFFS
app.set('view engine', 'pug'); //set the template engine as pug
app.set('views', path.join(__dirname, 'views')); //set the views directory


// Pug ENDPOINT
app.get('/', (req, res)=>{ 
    const params = { }
    res.status(200).render('home.pug', params);
});
app.get('/contact', (req, res)=>{ 
    const params = { }
    res.status(200).render('contact.pug', params);
});


// START THE SERVER 
app.listen(port, ()=>{
    console.log(`App has been started successfully on port ${port}`);
});
