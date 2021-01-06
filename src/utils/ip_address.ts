function ipAddress(): any {
    const interfaces = require('os').networkInterfaces();
    for (const dev in interfaces) {
      if (interfaces.hasOwnProperty(dev)) {
        const iface = interfaces[dev];
        for (const alias of iface) {
          if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
            return alias.address;
          }
        }
      }
    }
  
    return null;
}
console.log(ipAddress())