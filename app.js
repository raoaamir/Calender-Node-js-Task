const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const calenderRoutes = require('./routes/calenderRoutes')
const alldayRoutes = require('./routes/alldayRoutes')
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');
const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json())
app.use(cookieParser())

// view engine
app.set('view engine', 'ejs');

// database connection
mongoose.connect(process.env.DBURL,{ useNewUrlParser : true , useUnifiedTopology : true})
.then(()=>app.listen(process.env.PORT,()=>{
  console.log('Server Running')
}))
.catch((err)=>console.log(err))

// routes
app.get('*', checkUser)
app.get('/', (req, res) => res.render('home'));
app.get('/calender', requireAuth ,(req, res) => res.render('index1'));
app.use(authRoutes)
app.use(calenderRoutes)
app.use(alldayRoutes)
