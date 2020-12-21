
var express = require("express");

const apiRoutes = require("./routes/apiRoutes")
const htmlRoutes = require("./routes/htmlRoutes")


var app = express();
app.set('port', (process.env.PORT || 3000));

app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);



app.listen(PORT, () =>{
    console.log(`The app is listening on port: ${PORT}`)
})