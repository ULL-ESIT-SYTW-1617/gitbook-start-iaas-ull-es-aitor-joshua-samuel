(() => {
    "use strict";

    var exec = require('child_process').exec;

    var iaas = () => {

        var initialize() => {

        }

        var deploy = (ipiaas, pathiaas) => {
            function puts(error, stdout, stderr) {
                console.log(stdout)
            }
            exec("ssh usuario@" + ipiaas + " 'cd " + pathiaas + "; git pull'", puts);
        };
    }
    module.exports = iaas;
})();
