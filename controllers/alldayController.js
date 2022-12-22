const allday = require('../models/allday')

module.exports.calender_All_Day = (req ,res)=>{
    res.render ('allDayEvent')
}

module.exports.calender_All_Day_post=(req ,res)=>{
    const alldays = new allday(req.body)

    alldays.save()
    .then((result)=>{
        res.redirect('/')
    })
    .catch((err)=>{
        console.log(err)
    })

}

module.exports.send_all_day_Events = async(req ,res)=>{

    // const alldays = await allday.find()
    allday.find({owner:req.user._id}).then((result)=>{
        res.status(201).json(result)  
    })


}
module.exports.allday_edit = async (req ,res)=>{
    const data = await allday.findById(req.params.id)
    if(!data)return res.send("EVENT NOT FOUND")
    res.render('alldayedit' , {allday : data})
}

module.exports.allday_update = async (req , res)=>{
    try {
          const id  = req.params.id
          const result = await allday.findByIdAndUpdate(id ,{
              
                  name: req.body.name,
                  loc : req.body.loc,
                
            },{new:true})
              res.send({result})
            
       } catch (e) {
          console.log(e)
       }

}

module.exports.delete_dayEvent = (req ,res)=>{
    const id = req.params.id
    allday.findByIdAndDelete(id)
    .then(result=>{
        res.redirect('/calender')
    })
}