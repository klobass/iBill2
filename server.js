bodyParser = require('body-parser')
redis = require('redis')
fs = require('fs')
file = 'data.json'
express = require('express')
app = express()
config = require('./config/index') 

app.use(bodyParser.json())

var routes = require ('./api/routes/doRoutes');
routes(app)

app.listen(config.port , () => console.log('Application running on port ' + config.port))

if (fs.existsSync(file)) {}
else {
    console.log ('Datafile ' , file , ' is not present... creating it from scratch')
    fs.writeFileSync (file, `{"data": []}`,'utf-8')}

module.exports = app