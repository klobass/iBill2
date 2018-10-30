let client = redis.createClient()

exports.getCount = function (req, res) {
    client.get ("count", function(err,reply){                                   // ask Redis for value of "count"
        if (!reply) res.sendStatus(404)                                         // if there is no "count" defined yet in Redis let user know
        else res.send(String(+reply))                                           // if there is return its value
    })
}

exports.postTrack = function (req, res){                                            // receive POST data
    postBody = req.body                                               
         if (postBody.count){                                                       // if there is "count" key
             client.incrby("count", + postBody.count )}                             // add its value to redis
    fs.readFile (file, 'utf-8', function readFileCallback(err,data){                // appending data by reading old file
        if (err) console.log(err)
    var obj=JSON.parse(data)
    obj.data.push (postBody)                                                        // adding new JSON data to old JSON data
    fs.writeFile(file, JSON.stringify(obj), 'utf-8', function(err){                 // and writing it back to file
        if (err) console.log(err)
        else res.status(200).end()
        })
    })
}