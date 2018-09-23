'use strict'
var config = require('./dicomSendSettings.json');
var spawn = require('child_process').spawn;
var fs = require('fs');
var dicomSend = function (path) {
    var targetAeTitle  = config.targetAeTitle;
    var targetIpAddress = config.targetIpAddress;
    var remotePort = config.remotePort;
    var sendingAeTitle = config.sendingAeTitle;
    var localIp = config.localIp;
    var localPort = config.localPort;
    var dirName = __dirname;
    var batFile = require.resolve(dirName+"\\dcm4che-5.10.6\\bin\\storescu.bat");
    //log(myPath);
   // log('-c STORESCP@127.0.0.1:11112 $dir\\$path'.replace('$path', path).replace('$dir', dirName));
    const bat = spawn(batFile, [ '-c $targetAe@$targetIp:$targetPort'
        .replace('$targetAe', targetAeTitle)
        .replace('$targetIp', targetIpAddress)
        .replace('$targetPort',remotePort),

        '-b $sendingAeTitle@$localIp:$localPort'
            .replace('$sendingAeTitle', sendingAeTitle)
            .replace('$localIp', localIp)
            .replace('$localPort',localPort),

        '$path'.replace('$path', path) ]);

    bat.stdout.on('data', (data) => {
        // As said before, convert the Uint8Array to a readable string.

        var str = String.fromCharCode.apply(null, data);

    if(str.includes("Sent 1 objects")) {
        deleteFile();
        }

    function deleteFile() {
        fs.unlink(path, function (error) {
            console.log("Deleting sent study: " + path );
            if (error) {
                throw error;
            }
            console.log('Deleted ' + path);
        });
    }
        console.info(str);
});
}
module.exports = {
    dicomSend:dicomSend
}