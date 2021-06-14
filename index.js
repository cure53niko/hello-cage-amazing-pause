const { spawn } = require('child_process');


exports.handler = async (event) => {

  var child = spawn('ls -la');
  child.stdout.on('data',
    function (data) {
      console.log('ls command output: ' + data);
  });

  return {
    message: `Hello world ${data}`,

  }; 
};
