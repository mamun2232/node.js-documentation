const http = require('http');
const URL = require('url');
const fs = require('fs');

const server = http.createServer((req , res) =>{
      const myUrl = 'https://web.programming-hero.com/web-5/video/web-5-80-10-starting-of-a-new-journey-with-special-message'
      const objectUrl = URL.parse(myUrl , true)
      const host = objectUrl.host
      res.writeHead(200 , {'content-type': 'url/html'})
      res.write(host)
      res.end()

})
server.listen(5000)
console.log('surver Run');

// file read by asyn -----------
const fileReadAsyn = http.createServer((req , res) =>{
      if(req.url == '/'){
       fs.readFile('home.html' , (error , data) =>{
            res.writeHead(200 , {'content-type': "readfile/html"})
            res.write(data)
            res.end()
       })
      }
})

fileReadAsyn.listen(5001)

// fileRead synchnas
const fileReadSyn = http.createServer((req , res)=>{
      if(req.url == '/'){
            const myData = fs.readFileSync('home.html')
            res.writeHead(200 , {'content-type': "readFile/html"})
            res.write(myData)
            res.end()
      }
})
fileReadSyn.listen(5002)