const fs = require('fs');
const http = require('http');

const OurReadStream = fs.createReadStream(`${__dirname}/read.txt` , 'utf8')
const ourWriteStrem = fs.createWriteStream(`${__dirname}/outPut.txt` , 'utf8')
const server = http.createServer((req , res) =>{
      if(req.url == '/'){
            res.write('<html><head><title>From</title></head></html>')
            res.write('<body><form method="post" action="/process"><input name="massage" type="text"></form></body>')
            res.end()
      }
      else if(req.url == '/process'){
            const reciveBody = []
            req.on('data' , (data )=>{
                  reciveBody.push(data)
                  // console.log(data.toString());

            })
            req.on('end' , (data )=>{
                  console.log('Stream Fnish');
                  const parseBody = Buffer.concat(reciveBody).toString()
                  // console.log(parseBody);
            })
            res.write('Thank You Submitting')
            res.end()
      }
})


server.listen(5000)

OurReadStream.on('data' , (data) =>{
      ourWriteStrem.write(data)
})

