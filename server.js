const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const buildPath = path.join(__dirname, 'build');

app.use('/', express.static(buildPath));
app.get('*', (request, response) => {
  response.sendFile(path.resolve(buildPath, 'index.html'));
});

app.listen(port, () => console.log('Listening on Port', port));
