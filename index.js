const { spawn } = require('child_process');


exports.handler = async (event) => {

  var child = spawn('ls' , ['-l']);
  

    return {
      message: `Hello world`,

    }; 
};
