const Calender = require('../models/calender')

const calender = (req, res) => {
    res.render('index1');
  }

  const calender_create = (req ,res)=>{
    res.render('create');
    }

  const create_event = (req ,res)=>{  
    const calenders = new Calender(req.body)
   
        
        calenders.save()
        .then((result)=>{
            res.redirect('/')
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const send_all_events =async (req ,res)=>{
       
        Calender.find({owner : req.user._id}).sort({createdAt:-1}).then((result)=>{
            res.status(201).json(result)
          
        })
        
    }

    const calender_edit =async (req ,res)=>{
       const data= await Calender.findById(req.params.id)
        if(!data)return res.send("EVENT NOT FOUND")
       
        res.render('edit',{calender : data})
      
    } 

    const calender_update = async (req ,res)=>{
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

    const delete_event = async (req , res)=>{
            const id = req.params.id
            Calender.findByIdAndDelete(id)
            .then(result =>{
                res.redirect('/calender')
            })
        
    }


    module.exports ={
        calender,
        calender_create,
        create_event,
        send_all_events,
        calender_edit,
        calender_update,
        delete_event

    }