//Import express js Frameworks
const express = require("express");












// Initialsingan app instant
const app = express();
//make app listen to port address
const port = 5000;
app.listen(port, () => {
    console.log('Server started in port ${port}');
});