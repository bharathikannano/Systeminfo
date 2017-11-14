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
    hostname: () => {
        return os.hostname();

    },
    homedir: () => {
        return os.homedir();
    }
}
console.log(bk.myLocalIp());
console.log(bk.hostname());
console.log(bk.homedir());