const jwt = require('jsonwebtoken')
const User = require('../models/user.js')

const requireAuth = (req ,res , next)=>{
const token = req.cookies.jwt
    // check json web token exist & is validate
    if(token){
        jwt.verify(token , 'this is my secret key ' , (err ,decodedToken)=>{
    if(err){
        res.redirect('/login')

    }
    else{
        next()
    }

})
      
}
else{
    res.redirect('/login')
}
}

//check current user

const checkUser = (req ,res ,next)=>{
    const token = req.cookies.jwt
    if(token){
        jwt.verify(token , 'this is my secret key ' ,async (err ,decodedToken)=>{
            if(err){
                res.locals.user = null
               next()
        
            }
            else{
                let user = await User.findById(decodedToken.id)
                res.locals.user = user
                req.user = user
                next()
            }
        })
    }
    else{

        res.locals.user = null
        next()

    }
}

 


module.exports ={requireAuth , checkUser}