const { spawn } = require('child_process');


exports.handler = async (event) => {

  var child = spawn('ls -la');
  var output;
  child.stdout.on('data',
    function (data) {
      output = data;
      console.log('id command output: ' + data);
  });

  return {
    message: `Hello world ${output}`,

  }; 
};
