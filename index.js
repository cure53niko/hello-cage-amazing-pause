exports.handler = async (event) => {
  console.debug('This is the data that has arrived into the cage.', event);

 
  if (event.name && event.name.length > 0) {
    
    return {
      message: `Hello, ${event.name}!`,
      details: `The cage is decrypting your name and retuurning it in plainntext. also this is your env variable: ${process.env.test}`,
      encrypted: await evervault.encrypt(event.name),
    };
  } else {
    return {
      message: 'Hello, world!',
      details:
        'Please send an encrypted `name` parameter to show cage decryption in action',
    };
  }
};