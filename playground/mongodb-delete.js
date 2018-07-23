const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');

    //Delete Many
    /*db.collection('Todos').deleteMany({text:'Eat launch'}).then((res)=>{
        console.log(res);
    });
    //Delete Once
    db.collection('Todos').deleteOne({text:'Eat luanch'}).then((res)=>{
        console.log(res);
    });
    //Find&Delete
    db.collection('Todos').findOneAndDelete({completed:'false'}).then((res)=>{
        console.log(res);
    });*/

    db.collection('Users').deleteMany({name:'Mohamed Adel'}).then((res)=>{
        console.log(res);
    });
    
    db.collection('Users').findOneAndDelete({_id : new ObjectID("5b55e582a03104f8f1d74516")}).then((res)=>{
        console.log(res);
    });


    //db.close();
});