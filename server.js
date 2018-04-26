const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
 // Constants
const PORT = 8080;
const HOST = '0.0.0.0';


// default options
app.use(fileUpload());
 
app.post('/upload', function(req, res) {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');
 
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile;
 
  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv('/Users/ivan/Dropbox/work/TRAINING/docker-nodejs-upload-api/uploadDocs/'+sampleFile.name, function(err) {
    if (err)
      return res.status(500).send(err);
 
    res.send('File uploaded!');
  });
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);