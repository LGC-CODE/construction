var express = require('express');
var router = express.Router();

var content = '<p class="wow fadeInUp"' + 'data-wow-delay="1s" >' + 'Copyright &copy; 2016 White Eagle General Construction |' + 
                '<a href="http://luisconstante.com"' + 'title="Awesome Web Development"' + ' target="_blank">' + 'Webmaster</a></p>'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', footer: content });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express', footer: content });
});

router.get('/gallery', function(req, res, next) {
  res.render('gallery', { link: 'Contact Us', footer: content });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express', footer: content });
});

module.exports = router;
