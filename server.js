
var express = require("express");

const apiRoutes = require("./routes/apiRoutes")
const htmlRoutes = require("./routes/htmlRoutes")


var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);



app.listen(PORT, () =>{
    console.log(`The app is listening on port: ${PORT}`)
})