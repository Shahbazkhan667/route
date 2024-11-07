const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.route('/data/personal/:id')
.all((req, res, next) =>{
    console.log( 'all methods');
    next();
})
.patch((req , res , next) => {
    console.log('update my data');
    next();
})
.delete( (req , res , next) => {
    console.log('delete my data');
    next();
})

// app.get('/data/personal/:id' , (req , res , next) => {
//     console.log('get by data my personl');
//     next();
// });

// app.patch('/data/personal/:id' , (req , res , next) => {
//     console.log('update my data');
//     next();
// });

// app.delete('/data/personal/:id' , (req , res , next) => {
//     console.log('delet my data');
// });



app.listen(8003, () => {
    console.log('server running on  http://localhost:8003');
})