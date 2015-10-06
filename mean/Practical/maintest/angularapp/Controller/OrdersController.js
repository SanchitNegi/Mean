
var express = require('express');
var app = express();
var orders = require('../Model/product');
var categories = require('../Model/categories');
var session = require('express-session');

 //Add Orders
 
 
 
 // Listing of Orders
 exports.listingdata=function(req,res){
 
 
    orders.find({}).exec(function(err,result){
  if (err) console.log(err);
  
  res.json(result);
  
  
  
}) ;
 }  
 exports.product=function(data,req,res){
    //if(req.session.userName) {
    //     console.log(req.session.userName);
    //     console.log("Bi");
    //    //code
    //}
    categories.findOne({"path":data}).exec(function(err,result){
  if (err) console.log(err);
  
  res.json(result);
  
  
  
})
 }
 
 exports.addcart=function(data,req,res){
       
       
        
        data.quantity=1;
        data.subtotal=data.quantity*data.price;
       
       
        carts = new Array();
        oldarray=new Array();
        total=0;
        if (req.session.cart == undefined) {
            
           total=total+data.price;
           carts[0]=data;
           req.session.cart=carts;
          req.session.cart.total=total;
          
        }else{
            counting=req.session.cart.length;
          
            
            for(var i = 0; i < counting; i++) {
             
            if (req.session.cart[i]._id == data._id) {
                
                res.json(401);
                break;
                
               
            }
            }
             
               
                
                //req.session.cart.price=total;
                //console.log("Derere");
                oldarray=req.session.cart;
                oldarray.push(data);
                req.session.cart=oldarray;  
            
           
            
           
          
             
        
       
    
        
      
       
 
 }
       console.log(req.session.cart);
        res.json(req.session.cart);
       
 }
 
 exports.checkcart=function(data,req,res){
       
       
        
        
       
        
           
        if (req.session.cart != undefined) {
         res.json(req.session.cart);
          
          
        }
     
       
       
    
        
      
       
 
 }
  exports.checkcartvalue=function(req,res){
       
       
        
     
       
       res.json(req.session.cart);
           
    
  }
    exports.checkpcartvalue=function(req,res){
       
       
        
     
       
       res.json(req.session.cart);
           
    
  }

  
   exports.remove=function(data,req,res){
       
        counting=req.session.cart.length;
            for(var i = 0; i < counting; i++) {
           
           
            if (req.session.cart[i]._id == data.id) {
                  req.session.cart.splice(i, 1);
                 
            }
            
        }
        res.json(req.session.cart);
   }
   
   
      exports.addquan=function(data,req,res){
         
             counting=req.session.cart.length;
            for(var i = 0; i < counting; i++) {
           
           
            if (req.session.cart[i]._id == data.id) {
              
                 req.session.cart[i].quantity=data.quan;
                 price=req.session.cart[i].quantity*req.session.cart[i].price;
                 req.session.cart[i].subtotal=price;
            }
            
            }
            console.log(req.session.cart);
          
        res.json(req.session.cart);
   }
   
   
 
 ;



