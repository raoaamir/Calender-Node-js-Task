const { Router } = require('express');
const calenderController = require('../controllers/calenderController');

const router = Router();

router.get('/send', calenderController.send_all_events)
router.get('/schedule',calenderController.calender_get);
router.get('/delete/:id' , calenderController.delete_get)
router.get('/edit/:id' , calenderController.Calender_edit)
router.get('/createEvent' , calenderController.calender_create_get);
router.post('/postEvent' , calenderController.calender_create_post);
router.put('/:id',calenderController.calender_update_Put)

module.exports = router;