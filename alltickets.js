var exec = require('child_process');

function runCommand(args){
    var resp = exec.execSync(args);
    var res = resp.toString('UTF8');
    return res;
}

var args="curl -H 'Content-Type:application/json' https://alltickets.zendesk.com/api/v2/ticket_metrics -v -u your_emailaddress@xyz.com:your_password";
var today = new Date();
var hours = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();
if(hours == 0 && minutes==0 && seconds==0){
   var result = runCommand(args);
   console.log(result);
}
