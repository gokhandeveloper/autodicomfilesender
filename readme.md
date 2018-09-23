This application scans the configured directory and sends them to a DICOM server.

DICOM server configuration is located in dicomSendSettings.json (It uses dcm4che to send files)
DICOM tag edit on the fly by dicomTagSettings.json (it uses dcmtk to edit dicom tags)

**Installation Instructions**

<li>0 - Install java jre8 64 bit version </li>
<li>1- Download dcm4che-5.10.6 and unpack the zipped file into dicomSender folder</li>
<li>2- Download dcmtk-3.6.2-win64-dynamic and unpack the zipped file into dicomSender folder </li>
<li>3- Download and install Visual libraries for dcmtk otherwise edit function will not work</li>

<li>4- Go to project folder in the terminal and do
<i>npm install</i> to install node packages.</li>

<li>5- Edit the dicomSendSettings.json file depending on your needs. Make sure the file path for sending and pending folders are correct based on your environment.</li>
<li>6- Edit the dicomTagSettings.json file depending on your needs</li>
<li>7- Edit the dicom.bat (check the file path for this as well and make sure it can run the filewatcher.js file).</li>

<li>8- Run dicom.bat in windows to start the application.</li>
<li>9- Drop dicom files into your sending folder.</li>
& Voila. Files will be edited and sent. Once they are sent, sending folder will be cleared!.

**Warning!!**

It will delete the files automatically in the sending folder once they are sent!
So please copy the files into the sending folder instead of cutting and pasting!

This project works with Windows however, dcm4chee and dcmtk binaries are for Mac as well as Linux.
You should be able to run on other operating systems  as well.
