var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/about', function(req, res, next) {
//res.send(req.param);
console.log(req.query);
res.render('index', { title: 'Express' });
});

router.get('/', function(req, res, next) {
//res.send(req.param);
console.log(req.query);
res.render('custom', { title: 'Express' });
});


module.exports = router;
