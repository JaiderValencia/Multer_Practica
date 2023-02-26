// externals modules
const express = require("express");
const methodOverride = require("method-override");


//natives modules
const path = require('path');


//express instance
const app = express();


// port
const port = process.env.PORT || 3000;


// import routes
const mainRoutes = require("./routes/mainRoutes");


// ejs config
app.use("view engine", "ejs");
app.use("views", path.join(__dirname, "/views"));


// method-override config
app.use(methodOverride("_method"));


// method post config
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// use routes
app.use("/", mainRoutes);


// host run
app.listen(port, () => {
    console.log(`Servidor levantado http://localhost:${port}`);
})