let express = require('express')
let path =require('path')
let app = express();
app.use(express.static(path.resolve(__dirname,'./src')));

app.listen(8080, function () {
    console.log('static file at 8080')
})