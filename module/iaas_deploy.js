var exec = require('child_process').exec;

module "deploy" {
    export function deploy(ipiaas,pathiaas) {
      function puts(error, stdout, stderr) { console.log(stdout) }
      exec("#ssh usuario@" + ipiaas + " 'cd " + pathiaas + "; git pull'", puts);
    }
}
