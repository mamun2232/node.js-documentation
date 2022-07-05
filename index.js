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


// file write Asunchonus 
const fileWriteAsyn = http.createServer((req , res) =>{
      if(req.url == '/'){
            fs.writeFile('text.txt' , "Hello , File write How are you?" ,(error , data) =>{
                  if(error){
                        res.writeHead(200 , {"content-type": "fileWrite/asn"})
                        res.write('File Write Fail')
                        res.end()
                  }
                  else{
                        res.writeHead(200 , {"content-type": "fileWrite/asn"})
                        res.write('File Write Success')
                        res.end()

                  }
            })
      }
})
fileWriteAsyn.listen(5003)

// file write syn 

const fileWriteSyn = http.createServer((req , res) =>{
      if(req.url == '/'){
            const error = fs.writeFileSync('text.txt' , "hello , Im Sync Write file now")
            if(error){
                  res.writeHead(200 , {"content-type": 'synWrite/syn'})
                  res.write('File Write Fail')
                  res.end()
            }
            else{
                  res.writeHead(200 , {"content-type": 'synWrite/syn'})
                  res.write('File Write Success')
                  res.end()
            }
      }
})
fileWriteSyn.listen(5004)

// fs rename file asyn 

const reNameFile = http.createServer((req , res)=>{
      if(req.url == '/'){
            fs.rename('text.txt' , 'demo.txt' , (error) =>{
                  if(error){
                        res.writeHead(200 , {"content-type": 'synWrite/syn'})
                        res.write('File Write Fail')
                        res.end()
                  }
                  else{
                        res.writeHead(200 , {"content-type": 'synWrite/syn'})
                        res.write('File Write Success')
                        res.end()

                  }
            })
      }
})

reNameFile.listen(5005)

// fs file rename syn 

const renameFileSyn = http.createServer((req , res) =>{
      if(req.url == '/'){
            const error = fs.renameSync('demo.txt' , "newDemo.txt")
            if(error){
                  res.writeHead(200 , {"content-type": 'synWrite/syn'})
                        res.write('File rename Fail')
                        res.end()

            }
            else{
                  res.writeHead(200 , {"content-type": 'synWrite/syn'})
                  res.write('File rename Success')
                  res.end()
            }
      }
})

renameFileSyn.listen(5006)


const fileDelete = http.createServer((req , res)=>{
      if(req.url == '/'){
            fs.unlink('newDemo.txt' ,(error)=>{
                  if(error){
                        res.writeHead(200 , {"content-type": 'synWrite/syn'})
                              res.write('File delete Fail')
                              res.end()
      
                  }
                  else{
                        res.writeHead(200 , {"content-type": 'synWrite/syn'})
                        res.write('File delete Success')
                        res.end()
                  }

            })
      }
})

fileDelete.listen(5007)

// fs file asun 
const deleteFileSyn = http.createServer((req , res) =>{
      if(req.url == '/'){
            const error = fs.unlinkSync('mamun.txt')
            if(error){
                  res.writeHead(200 , {"content-type": 'synWrite/syn'})
                        res.write('File Delete Fail')
                        res.end()

            }
            else{
                  res.writeHead(200 , {"content-type": 'synWrite/syn'})
                  res.write('File Delete Success')
                  res.end()
            }
      }
})

deleteFileSyn.listen(5008)

