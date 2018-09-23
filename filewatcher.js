'use strict'
var dicomSendConfig = require('./dicomSendSettings.json');
var dicomTagConfig = require('./dicomTagSettings.json');
var dicomEditor = require('./dicomEditor.js');
var dicomSender = require('./dicomSender.js');

var chokidar = require('chokidar');
var watcher = chokidar.watch('file, dir, or glob', {
    ignored: /[\/\\]\./, persistent: true
});

var log = console.log.bind(console);
var dicomDirectory = dicomSendConfig.dicomFilesLocation;
var dicomEditDirectory = dicomSendConfig.dicomEditDirectory;

require('chokidar').watch(dicomDirectory, {ignored: /[\/\\]\./, awaitWriteFinish:true, persistent: true, ignoreInitial:true})
    .on('all', function(event, path) {

        if(event === "add" ) {
            // log("File added");
            console.log("path is" + path);
           dicomEditor.addInstitutionDicomTag(path);
           dicomSender.dicomSend(path);

        }
        log(event, path);
    });