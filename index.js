const http = require('http');
const fs = require('fs');
const URL = require('url');

const picPPerse = http.createServer((req , res) => {
      const myPic = 'https://web.programming-hero.com/web-5/video/web-5-80-10-starting-of-a-new-journey-with-special-message'
      const picObject = URL.parse(myPic , true)
      const host = picObject.host
      const path = picObject.path
      res.writeHead(200 , {'content-type': "pic/html"})
      res.write(host)
      res.end()
})

picPPerse.listen(5000)
console.log('server open');

// fs oparetion 

const fileRead = http.createServer((req , res) =>{
      if(req.url == '/'){
            fs.readFile('home.html' , (erorr , data) =>{
                  if (erorr) {
                        res.writeHead(200 , {'content-type': "pic/html"})
                        res.write('file read fail')
                        res.end()
                        
                  }
                  else{
                        res.writeHead(200 , {'content-type': "pic/html"})
                        res.write('file read Success')
                        res.end()
                        
                  }
            })
      }
})

fileRead.listen(5001)

const fileRedSyn = http.createServer((req , res)=>{
      if(req.url == '/'){
            const myDAta = fs.readFileSync('home.html')
            if (myDAta) {
                  res.writeHead(200 , {'content-type': "pic/html"})
                  res.write('file read Success')
                  res.end()
                  
            }
      
      }
})
fileRedSyn.listen(5002)


const fileWrite = http.createServer((req , res)=>{
      if(req.url == '/'){
            fs.writeFile('text.html', 'Hey file how are you?' , (error)=>{
                  if (error) {
                        res.writeHead(200 , {'content-type': "pic/html"})
                        res.write('file write fail')
                        res.end()
                        
                  }
                  else{
                        res.writeHead(200 , {'content-type': "pic/html"})
                        res.write('file write Success')
                        res.end()
                        
                  }
            })
      }
})

fileWrite.listen(5003)

const writeFileSync = http.createServer((req , res)=>{
      if(req.url == '/'){
            const error = fs.writeFileSync('text.txt' , 'hey text iam syn')
            if (error) {
                  res.writeHead(200 , {'content-type': "pic/html"})
                  res.write('file write fail')
                  res.end()
                  
            }
            else{
                  res.writeHead(200 , {'content-type': "pic/html"})
                  res.write('file write Success')
                  res.end()
                  
            }
      }
})

writeFileSync.listen(5004)


const fileRename = http.createServer((req , res) =>{
      if(req.url == '/'){
            fs.rename('text.txt' , 'mamun.txt' , (error) =>{
                  if (error) {
                        res.writeHead(200 , {'content-type': "pic/html"})
                        res.write('file rename fail')
                        res.end()
                        
                  }
                  else{
                        res.writeHead(200 , {'content-type': "pic/html"})
                        res.write('file rename Success')
                        res.end()
                        
                  }

            })
      }
})

fileRename.listen(5005)

const fileRenameSyn = http.createServer((req , res)=>{
      if(req.url == '/'){
            const error = fs.renameSync('mamun.txt' , 'text.txt')
            if (error) {
                  res.writeHead(200 , {'content-type': "pic/html"})
                  res.write('file rename fail')
                  res.end()
                  
            }
            else{
                  res.writeHead(200 , {'content-type': "pic/html"})
                  res.write('file rename Success')
                  res.end()
                  
            }

      }

})
fileRenameSyn.listen(5006)

const deleteFile = http.createServer((req , res) =>{
      if(req.url == '/'){
      fs.unlink('text.txt' , (error)=>{
            if (error) {
                  res.writeHead(200 , {'content-type': "pic/html"})
                  res.write('file deleete fail')
                  res.end()
                  
            }
            else{
                  res.writeHead(200 , {'content-type': "pic/html"})
                  res.write('file delete Success')
                  res.end()
                  
            
      }
    

      })}
})

deleteFile.listen(5007)

