var express = require('express');
var feedModel=require('../modules/feed')
var router = express.Router();
var feed=feedModel.find({});
/* GET home page. */
router.get('/news', function(req, res, next) {
  feed.exec(function(err,data){
    if(err) throw err;
    console.log(data)
    res.render('index', { title: 'News updater', records:data });
  });
  
});
router.post('/news',function(req,res,next){
var feedDetails=new feedModel({
  regno:req.body.regno,
  date:req.body.date,
  title:req.body.title,
  data:req.body.subject,
  status:req.body.status
  
});

feedDetails.save(function(err,res){
  if(err) throw err;
  feed.exec(function(err,data){
    if(err) throw err;
    console.log(data)
    res.render('index', { title: 'Records', records:data });
  });
});



});


module.exports = router;
