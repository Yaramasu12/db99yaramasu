var express = require('express');
const animal_controlers= require('../controllers/animal');
var router = express.Router();
/* GET animal */
router.get('/', animal_controlers.animal_view_all_Page );
/* GET detail animal page */
router.get('/detail', animal_controlers.animal_view_one_Page);
/* GET create animal page */
router.get('/create', animal_controlers.animal_create_Page);
/* GET create update page */
router.get('/update', animal_controlers.animal_update_Page);
/* GET create animal page */
router.get('/delete', animal_controlers.animal_delete_Page);


module.exports = router;
