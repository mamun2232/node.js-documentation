// http module---------------
const http = require('http');

const httpServer = http.createServer((req , res) => {
      if(req.url == '/'){
            res.writeHead(200 , {'content-type': 'text/html'})
            res.write('this is home page')
            res.end()
      }
      if(req.url == '/login'){
            res.writeHead(200 ,{ 'content-type': 'text/html'})
            res.write('this is login page')
            res.end()
      }
})

httpServer.listen(5000)
console.log('server start');

// 2 , url module --------------------

const URL = require('url');

const urlServer = http.createServer((req , res) =>{
      const myUrl = "https://web.programming-hero.com/web-5/video/web-5-80-10-starting-of-a-new-journey-with-special-message"
      const myUrlObject = URL.parse(myUrl , true)
      const hostName = myUrlObject.hostname;
      const pathName = myUrlObject.pathname
      const Searchname = myUrlObject.search
      res.writeHead(200 , {'content-type': 'img/html'})
      res.write(hostName)
      res.end()
})

urlServer.listen(5001)
