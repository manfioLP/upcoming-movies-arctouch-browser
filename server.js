const express = require('express');
const path = require('path');
const app = express();

// Run the app by serving the static files in the dist directory
app.use(express.static(__dirname + `/dist/browser`));
const index = path.join(__dirname+'/dist/browser/index.html');
app.get('/*', (req, res) => {
    res.sendFile(index);
});
console.log(index);
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);