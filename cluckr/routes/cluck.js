var express = require('express');
var router = express.Router();
const knex = require("../db");
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Cluckr' });
// });



/* GET new cluck page. */
router.get('/', function(req, res, next) {
    res.render('new_cluck', { title: 'Cluckr' });
  });

// router.post("/", (req, res, next) => {
//     knex.insert({
//         content: req.body.content,
//         img_url: req.body.img_url,
//         username: req.cookies.username
//     }).into("clucks").returning('*')
//         .then(([created_cluck]) => {
//             console.log('created', created_cluck);

//             //res.redirect(`/${created_cluck.id}`);
//             res.render('index',{ title: 'Cluckr' });
//         })
//         .catch((err) => {
//             console.log(err);
//             next(err);
//         });
// });

router.get("/:id", (req, res, next) => {

	const cluck_id = req.params.id;

	knex
		.select("*")
		.from("clucks")
		.where({
			id: cluck_id
		})
		.then(data => {
			const [cluck] = data;

			if (cluck) {
				res.render("clucks/show", {cluck});
			} else {
				res.send('cluck doesnt exist');
			}
		})
		.catch(err => {
			console.log(err);
		});
});
/// FAKE DEBUG POST TO FIX ROUTING
// router.post("/", (req, res, next) => {
    
//             console.log('created', created_cluck);

//             //res.redirect(`/${created_cluck.id}`);
//             res.render('index',{ title: 'Cluckr' });
//         });
router.post("/", (req, res) => {
    
    res.render('spindex',{ title: 'Cluckr' });
    });        



module.exports = router;



