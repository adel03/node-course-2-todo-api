var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

var Todo = mongoose.model('Todo', {
    text:{
        type: String
    },
    completed:{
        type: Boolean
    },
    completedAt:{
        type: Number
    }
});
/*
var newTodo = new Todo({
    text:'cook dinner'
});

newTodo.save().then((doc)=>{
    console.log('Saved Todo', doc);
},(e)=>{
    console.log(e);
});*/

var otherTodo = new Todo({
    text:'feed the cat',
    completed:true,
    completedAt :123
});

otherTodo.save().then((doc)=>{
    console.log(JSON.stringify(doc, undefined, 2));
},(e)=>{
    console.log(e);
});