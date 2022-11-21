
const {MongoClient} = require('mongodb');
const express = require("express");
const cors = require("cors");
const http = require('http');
const fs = require('fs');

const app = express();

// const options = {
//   key: fs.readFileSync('key.pem'),
//   cert: fs.readFileSync('cert.pem')
// };


// var httpsServer = https.createServer(options, app);
// httpsServer.listen(5000);

var httpServer = http.createServer(app);
httpServer.listen(5000)
console.log("HTTP server started")

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())



const uri = "mongodb+srv://fastlodge49:fastlodge@cluster0.c99b7.mongodb.net/?retryWrites=true&w=majority"
global.client = new MongoClient(uri);

client.connect()
console.log("MongoDB Server Connected Successfully!!")




app.post("/api/start", async (req, res) => {
	let { message } = req.body

	    console.log(message)

        
    res.send("All Connections Established!!")
})







app.post("/api/sendData", async (req, res) => {
	let {data} = req.body
    var usr

    mess = "Success"
    try{
        await client.db("Academy").collection("Student").insertOne(data)
        }
    catch(e){
      
        mess = "Failed"
        console.log(e)
    }

    res.send(mess)
    
})


app.post("/api/olevelRegister", async(req,res) =>{
    let {data} = req.body
    var usr
    mess = "Success"

    try{
        await client.db("Academy").collection("OLevel").insertOne(data)
        }
    catch(e){
        mess = "Failed"
        console.log(e)
    }


    res.send(mess)
})



