var exec = require('child_process').exec;

module "deploy" {
    export function deploy() {
      function puts(error, stdout, stderr) { console.log(stdout) }
      exec("ssh sytw './scripts/pull_iass'", puts);
    }
}
/*
var server = app.listen(80, function () {

              var host = server.address().address
              var port = server.address().port

              console.log('Example app listening at http://%s:%s', host, port)

            });
*/
