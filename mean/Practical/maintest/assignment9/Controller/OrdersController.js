
var order = require('../Model/order');
 //Add Orders
 exports.addData=function(req,res){
     savecat = order(req.body);
    savecat.save(function (err) { 
  if (err) {
             console.log("Here");
             res.send(err);
            //code
          }else{
               var status={"status":"Users Details Saved Successfully"};
               res.send(status);
  
          }
        
    
  });
 }
 
 
 // Listing of Orders
 exports.listingdata=function(req,res){
  
    order.findOne({}).populate('product_id').populate('sub_id').populate('user_id').exec(function(err,result){
  if (err) console.log(err);
  
  res.send('index',{result:result});
  
  
  
}) ;
 }


