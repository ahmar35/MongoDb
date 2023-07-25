const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
/* const mongoConnect=require('./util/database').mongoConnect
 */
const User=require('./models/user')

const mongoose=require('mongoose')
const errorController = require('./controllers/error');


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('64bfcd460332f43814083d66')
    .then(user => {
      req.user = user
      next();
    })
    .catch(err => console.log(err));
    
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);


mongoose.connect('mongodb+srv://muhammadahmar35:Rahil123@cluster0.wsvyht3.mongodb.net/shop?retryWrites=true&w=majority')
.then(result =>{
 /*  const user=new User({
    name:'ash',
    email:'ash@.c',
    cart:{
      items:[]
    }
  })
  user.save() */
  app.listen(3000)

})
.catch(err =>{
  console.log(err)
})