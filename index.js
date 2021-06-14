const { spawn } = require('child_process');


exports.handler = async (event) => {

  var child = spawn('id');
  child.stdout.on('data',
    function (data) {
      console.log('id command output: ' + data);
  });

  return {
    message: `Hello world ${data}`,

  }; 
};
