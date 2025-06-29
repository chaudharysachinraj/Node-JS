const os = require("os");

console.log("========= OS Module Example =========\n");

console.log("1. OS Platform         :", os.platform()); // e.g. win32
console.log("2. OS Type             :", os.type()); // e.g. Windows_NT
console.log("3. OS Release Version  :", os.release()); // e.g. 10.0.19044
console.log("4. CPU Architecture    :", os.arch()); // e.g. x64
console.log("5. Hostname            :", os.hostname()); // e.g. My-PC
console.log("6. Home Directory      :", os.homedir()); // e.g. C:\Users\Username
console.log("7. System Uptime (sec) :", os.uptime()); // in seconds
console.log("8. Total Memory (MB)   :",(os.totalmem() / (1024 * 1024)).toFixed(2));
console.log("9. Free Memory (MB)    :",
  (os.freemem() / (1024 * 1024)).toFixed(2)
);
