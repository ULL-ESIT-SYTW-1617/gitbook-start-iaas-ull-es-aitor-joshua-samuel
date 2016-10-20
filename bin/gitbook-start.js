#! /usr/bin/env node

var argv = require('minimist')(process.argv.slice(2));
var fs = require('fs-extended');
var path = require('path');
var fs2 = require('fs');


if (argv.n) {
    var second_path = path.resolve(__dirname, "../template")
    fs.copyDir(second_path, "./" + argv.n, function(err) {
        if (err)
            console.error(err)
    });

} else if (argv.d) {

    var second_path = path.resolve(__dirname, "../lib");

    fs2.appendFile('gulpfile.js', "var iaas = require('" + second_path + "/lib.js');\nvar json = require('./package.json');\ngulp.task('deploy-iaas', function() {\n\tconsole.log(json.iaasip);\n\tconsole.log(json.iaaspath);\n\tiaas(json.iaasip,json.iaaspath);\n});", function(err) {
        if (err)
            console.error(err);
    });

} else {
    console.log("Añada un comando correcto");
    console.log("-> -n [NOMBRE DE DIR] (Crea la estructura de directorios)");
}
