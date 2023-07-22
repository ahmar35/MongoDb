const mongodb=require('mongodb')
const MongoClient=mongodb.MongoClient
let _db
const mongoConnect= callback =>{
  MongoClient.connect('mongodb+srv://muhammadahmar35:Rahil123@cluster0.wsvyht3.mongodb.net/shop?retryWrites=true&w=majority')
.then(client=>{
  console.log('connected')
  _db=client.db()
})
.catch(err =>{
  console.log(err)

})

}
const getdb=()=>{
  if(_db){
    return _db
  }
  throw 'no database found'
}
exports.mongoConnect = mongoConnect
exports.getdb=getdb
