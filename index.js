var ssh = require('ssh-exec');
var fs = require('fs');
var fsExtended = require('fs-extended');
var dir = require('path');

var initialize = (strategy) => {

    var secondPath = dir.resolve(__dirname, "./" + strategy)
    fsExtended.copyDir(secondPath, ".", function(err) {
        if (err)
            console.error(err)
    });

    fs.appendFile('gulpfile.js', "\nvar addUser = require('./models');\nvar iaas = require('gitbook-start-iaas-ull-es-aitor-joshua-samuel');\nvar json = require('./package.json');\nvar addUser = require('./models');\ngulp.task('deploy-iaas', function() {\n\tconsole.log(json.iaasip);\n\tconsole.log(json.iaaspath);\n\tiaas.deploy(json.iaasip,json.iaaspath);\n});\ngulp.task('new-user', function(cb) {\n\treturn addUser.createUser();\n});", function(err) {
        if (err)
            console.error(err);
    });

        if((strategy == 'db') || (strategy=='local')) {
      fs.appendFile('gulpfile.js', "\nvar addUser = require('./models'); \ngulp.task('new-user', function(cb) {\n\treturn addUser.createUser();\n});", function(err) {
          if (err)
              console.error(err);
      });
    }
    console.log("Ficheros de iaas-ull-es desplegados")
}

var deploy = (ipiaas, pathiaas) => {

    ssh('cd ' + pathiaas + '; git pull', 'usuario@' + ipiaas).pipe(process.stdout);
}

module.exports.initialize = initialize;
module.exports.deploy = deploy;
