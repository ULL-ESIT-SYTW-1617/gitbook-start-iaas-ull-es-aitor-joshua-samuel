var exec = require('child_process').exec;
var fs = require('fs');



var initialize = () => {

    fs.appendFile('gulpfile.js', " var iaas = require('gitbook-start-iaas-ull-es-aitor-joshua-samuel');\nvar json = require('./package.json');\ngulp.task('deploy-iaas', function() {\n\tconsole.log(json.iaasip);\n\tconsole.log(json.iaaspath);\n\tiaas.deploy(json.iaasip,json.iaaspath);\n});", function(err) {
        if (err)
            console.error(err);
    });
}

var deploy = (ipiaas, pathiaas) => {
    function puts(error, stdout, stderr) {
      if(stdout){
        console.log(stdout);
      }
      if(stderr){
        console.log(stderr);
      }
    }
    exec("ssh usuario@" + ipiaas + " 'cd " + pathiaas + "; git pull'", puts);
};

module.exports.initialize = initialize;
module.exports.deploy = deploy;
