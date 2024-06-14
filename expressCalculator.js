const express = require('express')
const app = express();

app.get('/mean', (req, res, next) {
    if (!req.query.nums) {

    }
})

app.get('/median', (req, res, next) {
    if (!req.query.nums) {
        
    }
})

app.get('/mode', (req, res, next) {
    if (!req.query.nums) {
        
    }
})

app.listen (3000, function() {
    console.log('app on port 3000');
})