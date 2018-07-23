const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');

/*db.collection('Todos').insertOne({
    text : 'SomeThing to do',
    completed : 'false'
},(err, result)=>{
    if(err){
        return console.log('Unable to insert Todo ', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
});*/

db.collection('Users').insertOne({
    name : 'Mohamed Adel',
    age : 21,
    location : 'Alexandia'
},(err, result)=>{
    if(err){
        return console.log('Unable to insert Todo ', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
});

    db.close();
});