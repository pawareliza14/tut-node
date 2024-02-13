//REPL : read evaluate print loop
//johnsmilga.com

// const amount=1

// if (amount<10){
//     console.log("small number");
// }

// else{
//     console.log("large number");
// }
// console.log("Hello World");
// console.log(process);
// setInterval(()=>{
//     console.log('hello world')
// },1000)

//GLOBALS
// __dirname - path to current directory
// __fl=ilename 
// require - function to use modules (CommonJS)
//module - info about current module (file)
// process = info about environment where the program is executed

//MODULES
// every file in node is module
// const names = require('./names')
// const sayHi = require('./function')
// console.log(names)
// console.log(data)


// sayHi('Susan')
// sayHi(names.john)
// sayHi(names.peter)

//node has various built-in modules
// OS PATH FS HTTP... and more

// const os = require('os')

//info about the current user
// const user = os.userInfo()
// console.log(user)

//method returns systems uptime in seconds
// console.log(`The system uptime is ${os.uptime()} seconds`)
// node helps us to interact with file system which is not allowed in javascript in-browser
// const currentOS = {
//     name:os.type(),
//     release:os.release(),
//     totalMem:os.totalmem(),
//     freeMem:os.freemem(),
// }

// console.log(currentOS)

// const path = require('path')
// console.log(path.sep)
// console.log(path.resolve)

// to read file using fs nodules there are two approaches that is sync and async

// const fs=require('fs')

//asynchronous approach
// const {readFile, writeFile} = require('fs')
// readFile('./content/first.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(err) 
//         return
//     }
//     console.log(`In the first text file: ${result}`)
//     const first = result;
//     readFile('./content/second.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(err) 
//         return
//     }
//       console.log(`In the second text file: ${result}`)
//    const second =  result;
// writeFile(
// './content/secon.txt',`Here is the result : ${first},${second}`,(err,result)=>{
//     if(err){
//         console.log(err) 
//         return
//     }
//     console.log(result) 
// }
// )
// })

// })

// console.log(result)
// const second=readFileSync('./content/second.txt','utf8')


//HTTP
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our HomePage');
    } else if (req.url === '/about') {
        res.end('Our short');
    } else {
        res.end(`
            <h1> Oops!</h1>
            <p>We can't seem to find the page that you are looking for</p>
            <a href="/">Go back home</a>
        `);
    }
});

server.listen(5000);

const _ = require('loadsh')

const items = [1,[2,[3,[4]]]]
const newItems=_.flattenDeep(items)
console.log(newItems)
console.log('hello world')

