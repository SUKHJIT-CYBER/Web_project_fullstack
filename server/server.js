//Import express js Frameworks
const express = require("express")

// Initialsingan app instant
const app = express();
//make app listen to port address
const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

//import root
const root = require("./routes/root");


//add the route to middle ware
app.use("/", root);