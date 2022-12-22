const Calender = require('../models/calender')

module.exports.calender_get = (req, res) => {
    res.render('index1');
  }

  module.exports.calender_create_get = (req ,res)=>{
    res.render('create');
    }

  module.exports.calender_create_post = (req ,res)=>{  
    const calenders = new Calender(req.body)
   
        
        calenders.save()
        .then((result)=>{
            res.redirect('/')
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    module.exports.send_all_events =async (req ,res)=>{
       
        Calender.find({owner : req.user._id}).sort({createdAt:-1}).then((result)=>{
            res.status(201).json(result)
          
        })
        
    }

    module.exports.Calender_edit =async (req ,res)=>{
       const data= await Calender.findById(req.params.id)
        if(!data)return res.send("EVENT NOT FOUND")
       
        res.render('edit',{calender : data})
      
    } 

    module.exports.calender_update_Put = async (req ,res)=>{
        try {
           const id  = req.params.id
           const result = await Calender.findByIdAndUpdate(id ,{
               
                   Ename: req.body.Ename,
                   loc : req.body.loc,
                   sTime : req.body.sTime,
                   eTime : req.body.eTime
       
               },{new:true})
               res.send({result})
             
        } catch (e) {
           console.log(e)
        }
        
       }

    module.exports.delete_get = async (req , res)=>{
            const id = req.params.id
            Calender.findByIdAndDelete(id)
            .then(result =>{
                res.redirect('/calender')
            })
        
    }