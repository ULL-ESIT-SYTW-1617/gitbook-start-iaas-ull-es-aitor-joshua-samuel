(() => {
    "use strict";

    var exec = require('child_process').exec;
    var fs=require('fs');
    var iaas = {

        initialize: () => {

            fs.appendFile('gulpfile.js', " var iaas = require('gitbook-start-plugin-iaas-ull-aitor-joshua-samuel')\nvar json = require('./package.json');\ngulp.task('deploy-iaas', function() {\n\tconsole.log(json.iaasip);\n\tconsole.log(json.iaaspath);\n\tiaas(json.iaasip,json.iaaspath);\n});", function(err) {
            if (err)
                console.error(err);
            });
        }

        deploy: (ipiaas, pathiaas) => {
            function puts(error, stdout, stderr) {
                console.log(stdout)
            }
            exec("ssh usuario@" + ipiaas + " 'cd " + pathiaas + "; git pull'", puts);
        };
    }
    module.exports = iaas;
})();
