var mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/feedbackdb', {useNewUrlParser: true});
var conn=mongoose.connection;
var feedBack=new mongoose.Schema({
    regno: String,
    date: String,
    title: String,
    data: String,
    status: String,

    
})
var feedModel=mongoose.model('Feed',feedBack);

module.exports=feedModel;
