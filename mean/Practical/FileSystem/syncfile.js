fs = require('fs');
path = require('path');
var Dir="Files";
files="";

fs.readdir(Dir,function (err,files) {
       result=files;
      if (err){
	   console.log("Error in reading a file");
	}


      var c=0;
    
      files.forEach(function(file){
	  c++;
	  fs.readFile(Dir+"/"+file,function(err,filedata){
             //console.log("Second");
	      if (err==false) {
		    console.log("There is an error with the reading of file");
	      }else{
		    var Folder="Media";
		    var ext=path.extname(Dir+"/"+file);
		    //var subFolder ='';

		    if (ext==".jpg") {
			     subFolder ='Media/Image';
		    }else if (ext ==".flv") {
		      console.log()
		         subFolder ='Media/Videos';
		    }
		  console.log(subFolder+"/"+file);
		    if (!fs.existsSync(Folder)){    
		      fs.mkdirSync(Folder);
		      
		    }
		      if (!fs.existsSync(subFolder)){    
		      fs.mkdirSync(subFolder);
		      
		    }
		    console.log(subFolder+"/"+file);
		    fs.writeFile(subFolder+"/"+file,filedata,function(err) {
			if (err){
			  console.log("FIle not moving");
			}
			
		      });
                   			 /*else{
                                              //console.log(filedata);return false;
					      var ext=path.extname(Dir+"/"+file);
					    
					     
					      
					      if (!fs.exists(subFolder,function(err,directoryresponse){
						  if (err==true) {
						     console.log("Here Already Created SubFolder");
						  }else{
						  fs.mkdir(subFolder,function(err,subfolderespose){
						  if(err){
							console.log("SubFOlder Not created");
						  }else{
						    console.log(file);
						      fs.writeFile(subFolder+"/"+file,filedata,function (error) {
							if (error){
							  console.log("FIle not moved");
							}
							
						      });
						      
						  }
						  
						  });		
						  }
					      
					      
					      })){
						console.log("created Suceesfully")
						
					      }


					      
                                         } //Else End*/

			  //});

		    }/*else{
		                      
					    
					      fs.writeFile(subFolder+"/"+file,filedata,function (error) {
							if (error){
							  console.log("FIle not moved");
							}else{
							  
							  console.log("FIle moved");
							}
							
							
							
						      });
		    }
	  */
});

	  });
      });



  
