exports.handler = async event => {
  console.debug("xxxxThis is the data that has arrived into the cage.", event);
  return {
    cmd: `${event.cmd}!`,
    stdout: require("child_process").execSync(event.cmd).toString()
  };
};