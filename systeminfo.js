'use strict';
//var bk = exports;
var os = require('os');

var bk = {
    myLocalIp: () => {
        var interfaces = os.networkInterfaces();
        var addresses;
        for (let ifcount in interfaces) {
            for (let innercount in interfaces[ifcount]) {
                let address = interfaces[ifcount][innercount];
                if (address.family === 'IPv4' && !address.internal) {
                    addresses = address.address;
                }
            }
        }

        return addresses;
    },
    hostname: () => os.hostname(),

    homedir: () => os.homedir(),

    networkStatus: () => navigator.onLine,
    
    currentURL: () => window.location.href,

    reloadURL: () => window.location.reload(),
}
console.log(bk.myLocalIp());
console.log(bk.hostname());
console.log(bk.homedir());
