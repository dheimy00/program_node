const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title:{
    type: String,
    required: true
  },
  price:{
    type: Number,
    required: true
  },
  description:{
    type: String,
    required: true
  },
  imageURL:{
    type: String,
    required: true
  },
  userId:{
    type: Schema.Types.ObjectId,
    ref:'User'
  }  
});

module.exports = mongoose.model('Product',productSchema);

// const mongodb = require('mongodb');
// const getDb = require('../util/database').getDb;

// class Product {
//   constructor(title,price,description,imageURL,id,userId){
//     this.title = title;
//     this.price = price;
//     this.description = description;
//     this.imageURL = imageURL;
//     this._id = id ? new mongodb.ObjectId(id) : null;
//     this.userId = userId;
//   }
//   save(){
//     const db = getDb();
//     let dbOp;
//     if(this._id){
//       dbOp = db.collection('products')
//       .updateOne({_id: this._id},{$set: this});
      
//     }else{
//       dbOp = db.collection('products')
//       .insertOne(this);
//     }
//      return dbOp
//     .then(resutl => {
//       console.log(resutl);
//     })
//     .catch(err =>{
//       console.log(err);
//     })
//   }

//   static fetchAll(){
//     const db = getDb();
//     return db
//     .collection('products')
//     .find()
//     .toArray()
//     .then(products =>{
//       console.log(products);
//       return products;
//     })
//     .catch(err => {
//       console.log(err);
//     });
//   }

//   static findById(prodId){
//     const db = getDb();
//     return db
//     .collection('products')
//     .find({_id: new mongodb.ObjectId(prodId)})
//     .next()
//     .then(products =>{
//       console.log(products);
//       return products;
//     })
//     .catch(err => {
//       console.log(err);
//     });
//   }

//   static deleteById(prodId){
//     const db = getDb();
//     return db
//     .collection('products')
//     .deleteOne({_id: new mongodb.ObjectId(prodId)})
//     .then(resutl =>{
//       console.log('Delete');
//       console.log(resutl);
//     })
//     .catch(err => {
//       console.log(err);
//     });

//   }
// }

// module.exports = Product;