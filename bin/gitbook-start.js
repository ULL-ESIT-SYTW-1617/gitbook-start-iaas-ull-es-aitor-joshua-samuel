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
    fs.copyDir(second_path, "./" + argv.n + "/lib", function(err) {
        if (err)
            console.error(err)
    });

    fs2.appendFile('gulpfile.js', "var iaas = require('./lib/lib.js'); var json = require('./package.json'); gulp.task('deploy-iaas', function() {console.log(json.iaasip);console.log(json.iaaspath);iaas(json.iaasip,json.iaaspath);});", function(err) {
        if (err)
            console.error(err);
    });

} else {
    console.log("Añada un comando correcto");
    console.log("-> -n [NOMBRE DE DIR] (Crea la estructura de directorios)");
}
