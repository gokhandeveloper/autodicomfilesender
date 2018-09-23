'use strict'
var config = require('./dicomTagSettings.json');
var spawn = require('child_process').spawn;
var exec = require('child_process').exec;

var child;

//addInstitutionDicomTag(path);
function addInstitutionDicomTag (path) {
    var institutionName  = config.institutionName;
    var dirName = __dirname;
    var executableCommander = dirName+"\\dcmtk-3.6.2-win64-dynamic\\bin\\dcmodify.exe";
    var executableOptions = " -nb -i ";
    var dicomTags = "\"(0008,0080)=";

    child = exec(executableCommander  + executableOptions + dicomTags+ institutionName + "\"" + " " + path
        .replace('$dicomTags',dicomTags)
        .replace('$institutionName', institutionName)
        .replace('$path', path), function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
            console.log('exec error: ' + error);
        }
        if (error == null) {

            console.log('No error. Dicom edited');
        }
    });
}

var addInstitutionDicomTag = function (path, doNext) {
    var institutionName  = config.institutionName;
    var dirName = __dirname;
    var executableCommander = dirName+"\\dcmtk-3.6.2-win64-dynamic\\bin\\dcmodify.exe";
    var executableOptions = " -nb -i ";
    var dicomTags = "\"(0008,0080)=";

    child = exec(executableCommander  + executableOptions + dicomTags+ institutionName + "\"" + " "
        + "\""+ path + "\""
        .replace('$dicomTags',dicomTags)
        .replace('$institutionName', institutionName)
        .replace('$path', path), function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
            console.log('exec error: ' + error);
        }
        if (error == null) {

            console.log('No error. Dicom edited');
          //  doNext();
        }
    });
}
module.exports = {
    addInstitutionDicomTag:addInstitutionDicomTag
}