const { Router } = require('express');
const calenderController = require('../controllers/calenderController');

const router = Router();

router.get('/send', calenderController.send_all_events)
router.get('/schedule',calenderController.calender);
router.get('/delete/:id' , calenderController.delete_event)
router.get('/edit/:id' , calenderController.calender_edit)
router.get('/createEvent' , calenderController.calender_create);
router.post('/postEvent' , calenderController.create_event);
router.put('/:id',calenderController.calender_update)

module.exports = router;