const { Router } = require('express');
const alldayController = require('../controllers/alldayController');

const router = Router();


router.get('/sendAllDay' , alldayController.send_all_day_Events)
router.get('/del/:id' , alldayController.delete_event)
router.get('/all/:id',alldayController.edit_event)
router.get('/allday', alldayController.allday_view)
router.post('/postAllday' , alldayController.create_event);
router.put('/edit/:id', alldayController.update_event)

module.exports = router;