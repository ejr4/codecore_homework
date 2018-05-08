var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cluckr' });
});
/* GET sign-in. */


router.get("/sign_in", (req, res) => {
  res.render("sign_in");
});
// POST sign-in
router.post("/sign_in", (req, res) => {
  res.cookie("username", req.body.username, {
    maxAge: 1000*60*60*4
  });
  res.redirect("/");
});

// POST sign-out
router.post("/sign_out", (req, res) => {
  res.clearCookie("username");
  res.redirect("/");
});

module.exports = router;


