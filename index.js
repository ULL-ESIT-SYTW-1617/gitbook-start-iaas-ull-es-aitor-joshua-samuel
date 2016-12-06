var ssh = require('ssh-exec');
var cli = require('./src');

var initialize = (strategy) => {

    cli.deploy.createDir(strategy);
    cli.dependencias.addDeps();
};

var deploy = (ipiaas, pathiaas) => {

    ssh('cd ' + pathiaas + '; git pull', 'usuario@' + ipiaas).pipe(process.stdout);
};

module.exports.initialize = initialize;
module.exports.deploy = deploy;
