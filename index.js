var ssh = require('ssh-exec');
var fs = require('fs');


var initialize = () => {

    fs.appendFile('gulpfile.js', " var iaas = require('gitbook-start-iaas-ull-es-aitor-joshua-samuel');\nvar json = require('./package.json');\ngulp.task('deploy-iaas', function() {\n\tconsole.log(json.iaasip);\n\tconsole.log(json.iaaspath);\n\tiaas.deploy(json.iaasip,json.iaaspath);\n});", function(err) {
        if (err)
            console.error(err);
    });
}

var deploy = (ipiaas, pathiaas) => {

    ssh('cd ' + pathiaas + '; git pull', 'usuario@'+ ipiaas).pipe(process.stdout);
};

module.exports.initialize = initialize;
