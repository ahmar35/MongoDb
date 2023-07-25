const mongoose=require('mongoose')
const Schema=mongoose.Schema
const productSchema=new Schema({
  title:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true
  },
  imageUrl:{
    type:String,
    required:true
  },

  description:{
    type:String,
    required:true
  },
  userId:{
    type:Schema.Types.ObjectId,
    ref:'User',
    required:true

  }
})
module.exports=mongoose.model('Product',productSchema)

/* const mongodb=require('mongodb')

const getdb = require('../util/database').getdb;
class Product{
  constructor(title,price,imageUrl,description,id,userId){
    this.title=title
    this.price=price
    this.imageUrl=imageUrl
    this.description=description
    this._id=id
    this.userId=userId

  }
  save(){
    const db=getdb()
    let dbop
    if(this._id){
      dbop=db.collection('products')
      .updateOne({_id:new mongodb.ObjectId(this._id)},{$set:this})


    }
    else{
   dbop=db.collection('products')
    
  .insertOne(this)
    }
    return dbop
  .then(result =>{
    console.log(result)
  })
  .catch(err =>{
    console.log(err)
  })
}
static fetchAll(){
  const db=getdb()

  return db.collection('products').find().toArray()
  .then(products =>{
    console.log(products)
    return products
  })
  .catch(err =>{
    console.log(err)
  })
}
static findById(prodId){
  const db=getdb()

  return db.collection('products').find({_id:new mongodb.ObjectId(prodId)}).next()
  .then(product =>{
    console.log(product)
    return product
  })
  .catch(err =>{
    console.log(err)
  })
}
static deleteById(prodId){
  const db=getdb()

  return db.collection('products').deleteOne({_id:new mongodb.ObjectId(prodId)})
  .then(result =>{
    console.log('deleted')
  })
  .catch(err =>{
    console.log(err)
  })
}
}



module.exports = Product;
 */