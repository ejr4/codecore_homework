var express = require('express');
var router = express.Router();
let quizObj;

/* GET quiz page. */


const fs = require('fs');
console.log('in quiz',__dirname);
fs.readFile(__dirname + '/quiz1.json', 'utf8', 
    (err, data) => {      
        if(err) throw err;       
        quizObj =  JSON.parse(data);
    } 
);
router.get('/', function (req, res, next) {
  console.log("*** /quiz get engaged");
  res.render('quiz', { quizObj:quizObj });
});
router.post('/results', function (req,res,next) {
  console.log('*** /quiz post engaged');
  client_ans_obj = req.body
  res.render('results', { quizObj:quizObj, client_ans_obj:client_ans_obj })
});
router.get('/results', function (req, res, next) {
  console.log("*** /results get engaged");
  res.render('results', { quizObj:quizObj });
});

module.exports = router;


