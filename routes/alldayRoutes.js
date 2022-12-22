const { Router } = require('express');
const alldayController = require('../controllers/alldayController');

const router = Router();


router.get('/sendAllDay' , alldayController.send_all_day_Events)
router.get('/del/:id' , alldayController.delete_dayEvent)
router.get('/all/:id',alldayController.allday_edit)
router.get('/allday', alldayController.calender_All_Day)
router.post('/postAllday' , alldayController.calender_All_Day_post);
router.put('/edit/:id', alldayController.allday_update)



module.exports = router;