const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');

    /*db.collection('Todos').findOneAndUpdate({
        _id : new ObjectID('5b55d10fa03104f8f1d73ec6')
    }, {
        $set :{
            completed:false
        }
    }, {returnOriginal: false}).then((res)=>{
        console.log(res);
    });*/

    db.collection('Users').findOneAndUpdate({
        _id : new ObjectID('5b55f45aa03104f8f1d74ea1')
    }, {
        $set :{name:'Mohamed Adel'},
        $inc :{age:1}
    }, {returnOriginal: false}).then((res)=>{
        console.log(res);
    });
    


    //db.close();
});