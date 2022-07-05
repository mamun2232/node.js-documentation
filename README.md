
# My Basic Node.js bangla Documentation




## What is Node js?
Explore:
- ১৯৯৫-২০০৯ সাল জাভাস্ক্রিপ্ট শুধু ক্লাইন্ট সাইটে ব্যবহার হত।
- ২০০৯ সালে Ryan Dahl Node js ক্রিয়েট করেন। এটি দিয়ে সার্ভারে কাজ করা যায়।
- সহজ ভাষায় নোড যে এস হলো জাভাস্ক্রিপ্ট কে সার্ভার সাইডে রান করায় অর্থাৎ সার্ভার সাইডে রান করার জন্য যেযে ফিউচার দরকার হয় , তা সাধারণত node js প্রধান করে থাকে।
- নোড যে এস তৈরি হুওয়ার পর নোড যে এস এর উপর জাভাস্ক্রিপ্ট এর থার্ড পাটি প্যাকেজ নিরভ হয়ে গেল।সেটিকে মেনেজ করার জন্য node package manager (Npm) তৈরি হলো।


## What is Module? 
Explore:
- মডিউল হচ্ছে অনেক গুলো কোডের সমষ্টি বা বান্ডিল।
-- #node.js includes three types of module
- Core modules , Local modules , Third party modules

Core module : nodejs এর নিজিস্ব মডিউল বা ফ্লাটফরম যেগুলো আছে সেগুলো হচ্ছে core modules.
নিজে থেকে তৈরি করলে local module.
থার্ড পার্টি ইউস করলে thrid party modules.


## Core modules এ যা যা আছেঃ

- http: এটির ভিতর ক্লাস মেথড যেগুলো আছে সেগুলো দিয়ে সার্ভার তৈরি করি। অর্থাৎ সার্ভার মেনেজ করার জন্য ব্যবহার করা হয়।
 
- url: url persing করার জন্য ব্যবহার করা হয়।
- Querysting: querysting মানেজ করতে ব্যবহার করা হয়।
- path: ভিবিন্ন ফাইল পুল্ডারে path গুলো মেনেজ করতে ব্যবহার করা হয়।
- fs:  ফাইলের ভিতর ডিলেট,  উপডেট একশন চালাইতে ব্যবহার করা হয়।
- Utilitis : এর বাহিরে যেগুলো রয়েছে…


## Node module server Create :
```javascript
const http = require('http');
const httpServer = http.createServer((req , res) => {
      res.end('hello World')
})

httpServer.listen(5000)
console.log('server start');
}
```
Code Explore: প্রথমে মডিউল থেকে http method টা নেব। 
সেই মডিল থেকে createServer নিয়ে এনোনিমাস ফাংশন ক্রেট করব।

server টা রান করার জন্য ভেরিবলে রেখে listen দেব। তার ভিতরে path সেড করে দেব।

 ## Request respone model
 Explore: 
 - ক্লাইন্ট সাইড থেকে সার্রভার সাইডে রিকুয়েষ্ট করা হয় সার্ভার তার এগেঞ্জ এ রেস্পন্স করে। এই পসেস টা হচ্ছে Request response model.
 - ক্লাইন্ট সাইড থেকে রিকুয়েট করতে http method er,  get, post, delete, update, put, ব্যবহার করা হয়।

- আর এসবের রেস্পন্স হিসাবে দুইটা জিনিস সার্ভার দেয়। status code or data.

## রিকুয়েষ্ট রেস্পন্স মডেল যেভাবে কাজ করেঃ

```javascript
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
```
Code Explore :
এখানে req.url যদি হয় তার ভিতরে একটা একশন চালানো হয়েছে।
যেহেতু সার্ভার স্টেটাস কোড আর ডাটা দিবে। সেই স্টেটাচ কোড সেট করার জন্য header code সেট করতে হবে।
res.writeHead() তার ভিতরে কোড এবং কন্টেন্ট টাইপ দেব।

## Understanding http client
Explore: যাহা সার্ভারে HTTP Request পাঠায় এবং Response Receive করে,  তাকেই Http client বলে।
- Example Of HTtp Client
Axios ,
Fetch, 
Jquery ajax ,
cURL (php) ,
Volly (java) ,
Retrofit (cShark) ,
RestSharp ,

- HTTP client for Testing
PostMan, Fiddler

## Understanding package json file
Explore: Package json file হচ্ছে Application এর নথি।
এই ফাইল ক্রিয়েট করার জন্য
- npm init –y

## Node js Url module
Explore: Build-in URl model
একটা url e অনেক গুলো অংশ থাকে।
host,path,query

- একটা Url কে যেভাবে ছোট ছোট খন্ডে ভাগ করবঃ
```javascript
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
```
Code Explore: প্রথমে url model রিকুয়ার করবো নোড থেকে।
যে url কে ভাগ করবো সেই url কে ভেরিবলে রাখবো।
এখন সেই url.parse() করবো তার ভিতরে Url টা বসিয়ে দেব। একটা অব্জেক্ট আকারে রিটান করব।
এখন host,  pathName , search/query ধরে রিড করতে পারব।


## File systam(fs) Module
Explore : একটা ফাইল মেনেজমেন্ট করার জন্য যা যা প্রয়োজন তা সব fs করে থাকে। অর্থাৎ একটা ফাইল ডিলেট, আপডেট ইত্যাদি করে থাকে।

fs module oparetion দুইভাবে হয়ে থাকে।
- Synchronous 
- Asynchronous 

#fs synchonus opertion তখনি চালাবো যখন কোনো ওয়েব সাইট যে কাজের জন্য কল করা হয়েছে সেই কাজ সম্পূর্ণ না হলে অন্য কোনো একশন হবে না।

#fs Asynchronous operation মাল্টিটাক্স করতে পারবে।

### Fs module operation চালাতে synchronous and asynchronous কিছু মেথড রয়েছে।


## Synchronous, Asynchronous

- When Synchronous Suitable: সিনকুনাস যেহেতু কাজ সম্পূর্ণ না হলে অন্য কোনো একশন সার্ভারে পাঠাতে পারবো না, সেই কারন ক্লাইন্ট সাইট থেকে সার্ভার সেইডে এমন রিকুয়েষ্ট পাঠাতে হবে যেটা পসেস হতে সার্ভারে কম সময় লাগে। তখন সিনকুনাস ব্যবহার করব।

 - When Asynchronous suitable:  যখন সার্ভারে রিকুয়েষ্ট করলে পসেস হতে অনেক সময় লাগে তখন এসিনকুনাস ব্যবহার করা হয়।
যেমনঃ youtube vedio uploding

## Fs module method
### Fs module essential operation Asynchronous method:
- fs.readFile(ফাইল রিড)
- fs.writeFile(ফাইল নিয়ে আসা)
- fs.rename()
- fs.exists()
- fs.unlink(ডিলেট করার জন্য)
- fs.appendFile(ফাইল এর ভিতর নতুন কিছু এড করতে)
- fs.open()
- fs.mkdir()
- fs.rmdir(এক্সজিস কোনো ফাইল কে রিনেম করতে চাইলে)
- fs.readding(ফাইল এর ভিতর যা আছে সব রিড করতে চাইলে)

### Fs module essential operation synchronous method:
- প্রতিটি মেথড এর শেষে Sync শব্ধটি আছে
- Example: fs.readFileSync()







