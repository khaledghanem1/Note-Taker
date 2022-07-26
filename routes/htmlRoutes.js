//require paths
//require express
const path = require('path');
const router = require('express').Router();

//routes for /notes that responds to notes.html file
router.get('/notes', (req, res) =>{
    res.sendFile(path.join(__dirname,'../public/notes.html'));
});

router.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname,'../public/index.html'));
});

//for other routes using * as path, youcan respond with theindex.html file

module.exports = router;