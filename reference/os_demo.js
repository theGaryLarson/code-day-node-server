const os = require('os');

// Platform
console.log(os.platform());

// CPU Architecture
console.log(os.arch());

// CPU Core Info
console.log(os.cpus());

// Free Memory
console.log("Free Memory: " + os.freemem())
console.log("Total Memory: " + os.totalmem())

// Home dir
console.log(os.homedir());

// Uptime
console.log(os.uptime());