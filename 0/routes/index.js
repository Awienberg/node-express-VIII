const worldControllers = require("../controllers/worldControllers");
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Node VIII' });
});

/* GET country page. */
router.get('/country', function(req, res, next) {
  res.render('country', { title: 'Country' });
});

/* /country:country */
router.get("/country/:country", function(req, res, next) {  // route with country name
  worldControllers.retrieveCountry(req, res, next);  // get data from
  res.render('chosenCountry', { title: 'Chosen Country', name: 'Danmark', continent: 'Europa', area: '43.094', popu: '5.869.410', run: 'Monarki'  });
});

module.exports = router;

