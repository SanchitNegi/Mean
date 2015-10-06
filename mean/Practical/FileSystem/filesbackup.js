fs = require('fs');
path = require('path');
var Dir="Files";

fs.readdir(Dir,function (Direrror,files) {
  if (Direrror){
	   console.log("Error in reading a file");
  }
   var c=0;
   
    var checkFolder=function (Folder){
      
      //console.log(Folder);
      
             fs.exists(Folder,function(Foldererr){ //Folder Create Media
		             //console.log(Foldererr);
			     if (Foldererr==false) {
			         fs.mkdir(Folder,function(err,subfolderespose){
			      })
			     }
		});
      
      
      
    }
    var checksubFolder=function (ext,file,filedata){
      
      //console.log(Folder);
      var subFolder;
		   if (ext==".jpg") {
			     subFolder ='Media/Image';
		    }
		    if (ext==".flv") {
			     subFolder ='Media/Videos';
		    }
			    fs.exists(subFolder,function(Foldererr){ //Folder Create Media
		          
			     if (Foldererr==false) {
			         fs.mkdir(subFolder,function(err,subfolderespose){
				  
				  });
			      }else{
				
			      }
		      //console.log("subFolder=>"+subFolder+"file=>"+file);
		      
		      witeFile(subFolder,file,filedata);
		      //
		     });
      
	  
      //
    }
    
    var witeFile=function (subFolder,file,filedata){
      
      //console.log("subFolder=>"+subFolder+"file=>"+file);
       fs.writeFile(subFolder+"/"+file,filedata,function(error) {
		                   if (error) {
				     console.log(error);
				   }else{
				    console.log("Done");
				   }
		     });
      
      
    }
    
   var readFileCheck=function (file){
      fs.readFile(Dir+"/"+file,function(Filerror,filedata){
	        
		if (Filerror) {
		    console.log("There is an error with the reading of file");
		}else{
		    var Folder="Media";
		    var ext=path.extname(Dir+"/"+file);
		    var subFolder ='';
		    checkFolder(Folder);//call Folder Check 
		    //console.log(Dir+"/"+file+"="+ext);
		    checksubFolder(ext,file,filedata); //call Sub Folder Check

		}

	   });

     }
     
    files.forEach(function(file){
        // c++;
	//console.log(file);
	readFileCheck(file);
	   
      
    });
    
     
    
    
    
   
    
     
    
  
  
  
  
});
