const allday = require('../models/allday')

const allday_view = (req ,res)=>{
    res.render ('allDayEvent')
}

const create_event=(req ,res)=>{
    const alldays = new allday(req.body)

    alldays.save()
    .then((result)=>{
        res.redirect('/')
    })
    .catch((err)=>{
        console.log(err)
    })

}

const send_all_day_Events = async(req ,res)=>{

    // const alldays = await allday.find()
    allday.find({owner:req.user._id}).then((result)=>{
        res.status(201).json(result)  
    })


}
const edit_event = async (req ,res)=>{
    const data = await allday.findById(req.params.id)
    if(!data)return res.send("EVENT NOT FOUND")
    res.render('alldayedit' , {allday : data})
}

const update_event = async (req , res)=>{
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

const delete_event = (req ,res)=>{
    const id = req.params.id
    allday.findByIdAndDelete(id)
    .then(result=>{
        res.redirect('/calender')
    })
}

module.exports ={
    allday_view,
    create_event,
    send_all_day_Events,
    edit_event,
    update_event,
    delete_event

}