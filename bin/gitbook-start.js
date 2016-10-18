#! /usr/bin/env node

var argv = require('minimist')(process.argv.slice(2));
var fs = require('fs-extended');
var path = require('path');

if(JSON.stringify(argv) == '{"_":[]}'){
 console.log("Añada un comando correcto");
 console.log("-> -n [NOMBRE DE DIR] (Crea la estructura de directorios)");
}

if(argv.n){
	var second_path=path.resolve(__dirname,"../template")
	fs.copyDir(second_path, "./" + argv.n, function (err) {
  	if (err)
      console.error(err)
	});

}else if(argv.d){
	var second_path=path.resolve(__dirname,"../template")
	fs.copyFile(second_path + "/gulp.js", "./" + argv.n + "/gulpfile.js" , function(err){
	if (err)
    	console.error(err);
	});
}
else {
  console.log("Añada un comando correcto");
  console.log("-> -n [NOMBRE DE DIR] (Crea la estructura de directorios)");
}

