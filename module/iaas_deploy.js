var exec = require('child_process').exec;

module "deploy" {
    export function deploy() {
      function puts(error, stdout, stderr) { console.log(stdout) }
      exec("ssh sytw  'cd /home/usuario/prac3/practica-despliegues-en-iaas-y-heroku-aitor-joshua-samuel; git pull'", puts);
    }
}
