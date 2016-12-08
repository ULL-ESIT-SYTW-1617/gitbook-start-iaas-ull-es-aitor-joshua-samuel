var fs = require('fs');
var fsExtended = require('fs-extended');
var path = require('path');
var npmInstallPackage = require('npm-install-package');


exports.addDeps = () => {
    console.log("Instalando y añadiendo dependencias necesarias para iaas...");
    var deps = ["bcrypt", "body-parser", "connect-ensure-login", "cookie-parser", "dropbox", "ejs", "express", "express-session", "fs-extended", "inquirer", "morgan", "mysql", "octonode", "passport", "passport-github","passport-local", "readjson", "simple-git"];

    const opts = {
        save: true,
        cache: true
    };

    npmInstallPackage(deps, opts, (err) => {
        if (err) {
            console.log(err);
        }
        console.log("Dependencias instaladas con éxito.");
    });
};
