fs = require('fs');
path = require('path');
fs.readFile('Files/007-Logo.jpg', function (err,files) {
  
   var c=0;
  if (err) {
    return console.log(err);
  }else{ // On Succes of file read

	var dir = 'Media';

	if (!fs.exists(dir,function(err,data){  // checekc for the Dir

                   if(err){
			 return console.log(err);
                    }else{
                    
                          fs.mkdir(dir,function(err,datas){
                                        if(err){
			 			return console.log(err);
                   			 }else{
                                              console.log("folder created");
					      var ext=path.extname('Files/007-Logo.jpg');
					      console.log(ext);
					      if (ext==".jpg") {
						var dir = 'Media/Image';
						

						//code
					      }
                                         }

			  });

		    }
	})){
	  
	 console.log("folder already created");
	 var ext=path.extname('Files/007-Logo.jpg');
	      if (ext==".jpg") {
		    var dirs = 'Media/Image';
	      }
			if (!fs.exists(dirs,function(err,datass){
			  if (err) {
				 fs.writeFile('Media/Image/my.jpg', data, function (err) {
				  if (err) return console.log(err);
				  console.log('Hello World > helloworld.txt');
				});
			       }else{
				    fs.mkdir(dirs,function(err,datasss){
					       if(err){
						       return console.log(err);
						}else{
						     console.log("I am here");
						     
						}
       
				   });		
			       }
			  
			  
			}));
    
						    //code
	    
	}
  }
});
