const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use('/', express.static(path.join(__dirname, 'build')));
app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => console.log('Listening on Port', port));
