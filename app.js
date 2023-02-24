/*const fruits=['Apple','Peach','banana'];

function checkLength(arr){
    console.log(arr.length);
}

checkLength(fruits);
*/
/*let numbers=[10,20,30];
function addElement(numbers){
    console.log(numbers.push(40))
}
addElement(numbers);
*/
/*let numbers = [10, 20, 30];
numbers.push(40);

console.log(numbers);
*/
/*let colors = ['Green','Orange','white'];
let cmyk = ['light','blue','red'];
for(const color of cmyk){
    colors.push(color);
}
console.log(colors);
*/
/*let colors = ['Green','Orange','white'];
let cmyk = ['light','blue','red'];
colors.push(...cmyk);
console.log(colors);
*/
/*let greetings={
    0:'Hi',
    1:'Hello',
    length:2,
    append(message){
        [].push.call(this, message);
    },
}
greetings.append('Muhammad');
greetings.append('Mohsin');
greetings.append('All');
console.log(greetings)
*/
/*let numbers=[10,20,30];
const length=numbers.unshift(40);
console.log({length});
console.log({numbers});
*/
/*let days=['Monday','Tuesday','wednesday','Thursday','Friday'];
let weekends=['saturday','sunday'];
for(const weekend of weekends){
    days.unshift(weekend);
}
console.log(days);*/

/*const { clear } = require("console");
const { resolve } = require("path");*/


/*let days=['Monday','Tuesday','wednesday','Thursday','Friday'];
let weekends=['saturday','sunday'];
days.unshift(...weekends);
console.log(days);
*/
/*const numbers=[10,20,30];
const last = numbers.pop();
console.log(last);
console.log(numbers.length);
*/
/*let greetings = {
    0: 'Hi',
    1: 'Hello',
    2: 'Howdy',
    length: 2,
    removeLast() {
      return [].pop.call(this);
    },
  };
  
  let greting = greetings.removeLast();
  
  console.log(greting);
  console.log(greetings)
  */
 /*const numbers=[10,20,30];
 const number=numbers.shift();
 console.log({number});
 console.log({numbers});
 console.log({length: numbers.length});
 */
/*const numbers=[10,20,30];
numbers;
while((number=numbers.shift()) !=undefined){
    console.log(number);
}
*/
/*let scores=[1,2,3,4,5];
let deletedScores=scores.splice(0,3)
console.log(scores);
console.log(deletedScores);
*/
/*let colors=['Red','blue','green'];
colors.splice(2,0,'purple');
console.log(colors);
*/
/*let languages=['c','c++','java','javascript'];
languages.splice(1,1,'Pythone')
console.log(languages);
*/
/*let colors=['white','red','green','yellow','orange'];
let rgba=colors.slice(0,3)
console.log(rgba);
*/
/*function toArray(){
    return Array.prototype.slice.call(arguments);
}
let classification=toArray('A','B','C');
console.log(classification);
*/
/*let scores=[10,20,40,10,40,20];
console.log(scores.indexOf(10));
console.log(scores.indexOf(20));
console.log(scores.indexOf(30));
console.log(scores.indexOf(50));
console.log(scores.indexOf(20,-1));
*/
/*function find(needle,haystack){
    let results=[];
    let idx=haystack.indexof(needle);
    while(idx!=-1){
    results.push(idx);
    idx=haystack.indexof(needle, idx+1);
    }
    return results;
    */
   /*let numbers=[1,2,3];
   if(numbers.indexOf(4) !==-1){
    console.log('This is element of an array');
   }else{
    console.log('This is not an element of an array');
   }*/
   /*let numbers=[1,2,3];
   numbers.includes(2);
   connsole.log(numbers.includes(2));
   */
  /*let numbers=[1,2,3,4,5];
  console.log(numbers.find(e=>e%2==0));
  */
 /*let customers=[{
    name: 'ABC',
    credit: 100
 },{
    name: 'BCD',
    credit: 200
 },{
    name: 'DEF',
    credit: 300
 }]
 console.log(customers.find(c=>c.credit>100));*/
 /*let ranks=[1,5,7,8,10,7];
 let index=ranks.findIndex(rank=>rank===7);
 console.log(index);*/
 /*let ranks=[1,5,7,8,10,7];
 let index=ranks.findIndex((rank, index) => rank===7 && index > 2);
 console.log(index);*/
 /*let circles=[10,30,50];
 function circleArea(radius){
    return Math.floor(Math.PI*radius*radius);
 }
 let areas=circles.map(circleArea);
 console.log(areas);*/
 /*let circles=[10,30,50];
 let areas=circles.map(radius=> Math.floor(Math.PI*radius*radius));
 console.log(areas);*/
 /*let numbers = [16,36,25];
 let results=numbers.map(Math.sqrt);
 console.log(results);*/
 /*
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];
let bigCities=cities.filter(function(e){
    return e.population>3000000;
});
console.log(bigCities);*/
/*function isInRange(value){
    if(typeof value !== Number){
         return false;
    }
    return value >=this.lower && value<=this.upper;
}*/
/*let numbers=[1,2,3];
let sum=0;
for(let i=0; i<numbers.length;i++ ){
    sum+=numbers[i]
}
console.log(sum);*/
/*let numbers = [1, 2, 3];

function getOrdinalSuffix(i) {
  let j = i % 10, k = i % 100;
  if (j == 1 && k != 11) return i + 'st';
  if (j == 2 && k != 12) return i + 'nd';  
  if (j == 3 && k != 13) return i + 'rd';
  return i + 'th';
}

let call = 1;
let sum = numbers.reduce(function (previousValue, currentValue, currentIndex, array) {
    let result = previousValue + currentValue;

    // show the 1st call, 2nd call, etc.
    console.log(`${getOrdinalSuffix(call)} call`);
    call++;

    // show the immediate values
    console.table({ previousValue, currentValue, currentIndex, result });

    return result;
},100);

console.log(`Result: ${sum}`);*/
/*let shoppingCart = [
  {
    product: 'phone',
    qty: 1,
    price: 500,
  },
  {
    product: 'Screen Protector',
    qty: 1,
    price: 10,
  },
  {
    product: 'Memory Card',
    qty: 2,
    price: 20,
  },
];
let total=shoppingCart.reduce(function(previousValue, currentValue){
         return previousValue+ currentValue.qty*currentValue.price
},0);
console.log(total);
/*let numbers=[1,3,5];
let result=numbers.every(e=> e>0);
console.log(result);*/
/*let odds=[1,3,5];
let even=[2,4,6];
let combined=[].concat(odds,even);
console.log('Result:',combined);*/
/*for (var i=0;i<5; i++){
    setTimeout(function(){
        console.log(i);
    },1000)
}*/
/*for(let i=0;i<5;i++){
    setTimeout(()=>console.log(i),1000);
}*/
/*const myName = require("./second");
/*const stationary=require("./second");*/
/*console.log(myName);*/
/*var myName='Mohsin';
 myName='Ahmad';
 myName='Saad';
module.exports=myName;
*/
/*function getUsers(){
    return[
        {username:'mohsin',email:'mohsin@gmail.com'},
        {username:'saad',email:'mohsin@gmail.com'},
    ];
}
function findUser(username){
    const users=getUsers();
    const user=users.find((user)=>user.username===username);
    return user;
}
console.log(findUser('Saad'));*/
/*function getUsers() {
    return [
      { username: 'john', email: 'john@test.com' },
      { username: 'jane', email: 'jane@test.com' },
    ];
  }
  
  function findUser(username) {
    const users = getUsers(); 
    const user = users.find((user) => user.username === username);
    return user;
  }
  
  console.log(findUser('john'));*/
  
/*function getUsers(){
    let users=[];
    setTimeout(()=>{
          users=[
            {username:'mohsin',email:'mohsin@gmail.com'},
            {username:'saad',email:'saad@gmail.com'},
          ];
          },1000);
          return users;
    }
    function findUser(username) {
        const users = getUsers(); // A
        const user = users.find((user) => user.username === username); // B
        return user;
    }
console.log(findUser('mohsin'));*/
/*function getUsers(callback) {
    setTimeout(() => {
      callback([
        { username: 'john', email: 'john@test.com' },
        { username: 'jane', email: 'jane@test.com' },
      ]);
    }, 5000);
  }
  
  function findUser(username, callback) {
    getUsers((users) => {
      const user = users.find((user) => user.username === username);
      callback(user);
    });
  }
  
  findUser('jane', console.log);*/
  /*const promise=new Promise((resolve,reject)=>{
    if(success){
        resolve(value);
    }else
    {
        reject(error);
    }
  });*/
 /* function getUsers(){
    return new Promise((resolve,rejected)=>{
        setTimeout(() => {
            resolve([
                {username:'mohsin',email:'mohsin@gmail.com'},
            ]);
        }, 1000);
    });
  }
     function onFulfilled(users){
        console.log(users);
     }
     const promise = getUsers();
     promise.then(onFullfilled);*/
     /*function getUsers() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve([
              { username: 'john', email: 'john@test.com' },
              { username: 'jane', email: 'jane@test.com' },
            ]);
          }, 1000);
        });
      }
      
      function onFulfilled(users) {
        console.log(users);
      }
      
      const promise = getUsers();
      promise.then(onFulfilled);*/
      /*console.log("Hello World!");*/
      /*var http=require('http');

      http.createServer(function(request,response){
        response.writeHead(200,{'content-type':'text/plain'})
        response.end('Hello World');
      }).listen(8081);
console.log('Server running at http://127.0.0.1:8081/');*/
/*var fs=require('fs');
var data=fs.readFileSync('input.text');
console.log(data.toString());
console.log('program Ended');
*/
/*var fs= require('fs');
fs.readFile('input.text',function(err,data){
  if(err) return console.error(err);
  console.log(data.toString());
});
console.log('Program Ended');*/
/*var events=require('events');
var eventEmitter=new events.EventEmitter();
var connectHandler= function connected(){
  console.log('connetion Successful');
  eventEmitter.emit('data_received');
}
eventEmitter.on('connection',connectHandler);
eventEmitter.on('data-received', function(){
  console.log('Received data successfully');
});
eventEmitter.emit('connection');
console.log('Program ended');*/
/*var events=require(events);
var eventEmitter=new events.EventEmitter();
//listener 1
var listener1= function(listener1){
  console.log('listener1 executed');
}*/
//listener 2
/*var listener2= function(listener1){
  console.log('listener2 executed');
}
eventEmitter.addListener('connection', listener1);
eventEmitter.on('connection', listener1);
var eventListeners = require('events').EventEmitter.listenerCount (eventEmitter,'connection');
   
console.log(eventListeners + " Listner(s) listening to connection event");
eventEmitter.emit('connection');
eventEmitter.removeListener('connection', listener1);
console.log('Listener1 will not listen now');
console.log('Programe ended');*/
/*var events = require('events');
var eventEmitter = new events.EventEmitter();

// listener #1
var listner1 = function listner1() {
   console.log('listner1 executed.');
}

// listener #2
var listner2 = function listner2() {
   console.log('listner2 executed.');
}

// Bind the connection event with the listner1 function
eventEmitter.addListener('connection', listner1);

// Bind the connection event with the listner2 function
eventEmitter.on('connection', listner2);

var eventListeners = require('events').EventEmitter.listenerCount
   (eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

// Fire the connection event 
eventEmitter.emit('connection');

// Remove the binding of listner1 function
eventEmitter.removeListener('connection', listner1);
console.log("Listner1 will not listen now.");

// Fire the connection event 
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

console.log("Program Ended.");*/
/*var buf=require('buffer');
buf = new buffer(256);
len = buf.write("Simply Easy Learning");

console.log("Octets written : "+  len);
*/

/*var buf = Buffer.from('Simply Easy Learning');
var json = buf.toJSON(buf);

console.log(json);*/
/*var fs=require('fs');
var data = '';
var readerStream=fs.ReadStream('input.text');
readerStream.setEncoding('UTF8');
readerStream.on('data',function(chunk){
  data+=chunk;
});
readerStream.on('end',function(){
  console.log(data);
});
readerStream.on('eror',function(){
  console.log(err.stack);
});
console.log('Program Ended');*/
/*var fs=require('fs');
console.log('Going to get file info!');
fs.stat('input.text',function(err,stats){
  if(err){
  return console.error(err);
  }
  console.log(stats);
  console.log('Got file info successfully');
  //Check file type
  console.log('isFile:'+ stats.isFile());
  console.log('isDirectory:'+ stats.isDirectory());
  
});*/
/*function printHello(){
  console.log('Hello World');
}
var t=setTimeout(printHello,2000);
clearImmediate(t);*/
/*setImmediate(()=>{
  console.log('1st Immediate');
});
setImmediate(()=>{
  console.log('2nd Immediate');
});
process.nextTick(()=>{
  console.log('1st Process');
});
process.nextTick(()=>{
  console.log('2nd Process');
});*/
/*function message(name, callback){
  console.log('Hi'+''+name);
  callback();
}
function callMe(){
  console.log('I am node js');
}
message('node',callMe);*/
/*const event=require('events');
const eventEmitter=new event.EventEmitter();
eventEmitter.on('sum',function(num1,num2){
  console.log('Totalt:'+(num1+num2));
});
eventEmitter.emit('sum',10,30);*/
/*function sum(number){
  console.log('Total:'+number);
}
function calculator(num1,num2,callback){
  let total=num1+num2;
  callback(total);
}
calculator(10,20,sum);*/
/*function sum(number) {
  console.log('Total: ' + number);
}

function calculator(num1, num2, callback) {
  let total = num1 + num2;
  callback(total);
}

calculator(10, 20, sum);*/
/*const fs=require('fs');
fs.readFile('file.json',function(err,data){
  if(err){

    console.eror(err);
  }
  console.log(data);
});*/
//Promises
/*const myPromise =new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('succesful');
  },300);
});
*
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Successful!");
  }, 300);
});
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Successful!");
  }, 300);
});
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Successful!");
  }, 300);
});*/
/*const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Successful!");
  }, 300);
});
console.log(resolve);
console.log(Math.floor(5.95));*/
/*const fs =require('fs');
let data='';
//creat readable stream
const readerStream=fs.createReadStream('input.text');
//set encoding
readerStream.setEncoding('utf-8');
//Handle stream events data end err
readerStream.on('data',function(chunk){
  data+=chunk;
});
readerStream.on('end',function(){
  console.log(data);
});
readerStream.on('error',function(){
  console.log(error.stack);
});*/
/*const fs=require('fs');
let data='Hi we are here';
const writerStream=fs.createWriteStream('input.text');
writerStream.write(data,'utf8');
writerStream.end();
writerStream.on('finish',function(){
  console.log('Task completed');
});
writerStream.on('error',function(){
  console.log('error.stack');
});*/
/*const fs=require('fs');
//readable stream
const readerStream=fs.createReadStream('input.text');
//writeable stream
const writerStream=fs.createWriteStream('output.text');
readerStream.pipe(writerStream);*/
//cluster Module
/*const cluster = require('cluster');
if(cluster.isMaster){
  console.log('Master processing is running');
  cluster.fork();
  cluster.fork();
  
}
else{
console.log('worker process running');
}*/
/*const cluster=require('cluster');
const express=require('express');
const os = require ('os');
if(cluster.isMaster){
  console.log('Master PID ${process.pid} is running');

//Get the number cpus
const nCPUs=os.cpus().length;
for(let i=0;i<nCPUs;i++ ){
  cluster.fork();
}
cluster.on('exit',(worker,code,signal)=>{
     console.log('worker PID${worker.process.pid}died');
});
}else{
  const app= ('express');
  app.get('/',(req,res)=>{
    res.send('Node is running');
  });
  app.listen(3000,()=>{
    console.log('App listening at http://localhost:3000/');
  });
  console.log('worker PID${process.pid}started');

}*/
/*const cluster = require("cluster");
const express = require("express");
const os = require("os");

if (cluster.isMaster) {
  console.log(`Master PID ${process.pid} is running`);

  // Get the number of available cpu cores
  const nCPUs = os.cpus().length;
  // Fork worker processes for each available CPU core
  for (let i = 0; i < nCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker PID ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an Express server
  const app = express();
  app.get("/", (req, res) => {
    res.send("Node is Running...");
  });

  app.listen(3000, () => {
    console.log(`App listening at http://localhost:3000/`);
  });

  console.log(`Worker PID ${process.pid} started`);
}*/
/*function add(a,b){
  return a+b;
}
function print(n){
  console.log('Two times the number${n} is'+add(n,n));
}
print(5);*/

/*const body=require('body-parser');
const express=require('express');

const app1 = express();
const app2 = express();
//Parse the request bodu as json 
app1.use(body.json());
app1.use(body.json());

const handler=serverNum=>(req,res)=>{
  console.log('server ${serverNum}', req.mathod,req.url,req.body);
  res.send('Hello from server${serverNum}');
};
//only handle get and post requests
app1.get('*',handler(1)).post('*',handler(1));
app1.get('*',handler(1)).post('*',handler(2));
app1.listen(3000);
app2.listen(3000);
const body = require('body-parser');
const express = require('express');

const app1 = express();
const app2 = express();

// Parse the request body as JSON
app1.use(body.json());
app2.use(body.json());

const handler = serverNum => (req, res) => {
  console.log(`server ${serverNum}`, req.method, req.url, req.body);
  res.send(`Hello from server ${serverNum}!`);
};

// Only handle GET and POST requests
app1.get('*', handler(1)).post('*', handler(1));
app2.get('*', handler(2)).post('*', handler(2));

app1.listen(3000);
app2.listen(3001);*/
/*const {spawn}=require("child_process");
const child=spawn("dir",["D:\\empty"],{shell:true});
child.stdout.on("data",(data)=>{
  console.log('stdout${data}');
});*/
/*const { spawn } = require("child_process");
const child = spawn("dir", ["D:\\empty"], { shell: true });

child.stdout.on("data", (data) => {
  console.log(`stdout ${data}`);
});*/
/*const express=require('express');
const router =express.Router();
const bodyParser=require('body-parser');
const user= require('../user/User');
const jwt=require('jsonwebTOken');
const bcrypt = require('bcryptjs');
const config = require('../config');
router.use(bodyParser.urlencode({extended:false}));
router.use(bodyParser.jsson());
router.post('/register',function(req,res){
  let hashedPassword=bcrypt.hashSync(req.body.password,8);
  user.create({
    name:req.body.name,
    email:req.body.email,
    password:hashedPassword
  },
  function(err,data){
    if(err) return res.status(500).send("There was a probem in loading")
    let token=jwt.sign({id:user._id},config.secret,{expiresIn:86400});
    res.status(200).send({ auth: true, token: token });
  }
  );

  
});*/
/*const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const User = require('../user/User');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config');


router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post('/register', function(req, res) {
  
  let hashedPassword = bcrypt.hashSync(req.body.password, 8);
  
  User.create({
    name : req.body.name,
    email : req.body.email,
    password : hashedPassword
  },
  function (err, user) {
    if (err) return res.status(500).send("There was a problem registering the user.")
    // create a token
    let token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).send({ auth: true, token: token });
  });
});*/
/*const express = require('express')
const app = express();
const port = process.env.PORT || 3000;

const routes = require('./api/routes');
routes(app);
app.listen(port, function() {
   console.log('Server started on port: ' + port);
});*/
/**
 * myLogger
 */
/*const express = require("express");
const app = express();

const myLogger = function (req, res, next) {
  console.log("LOGGED");
  next();
};

app.use(myLogger);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000);*/
/*const express=require('express');
const helmet=require('helmet');
const app =express()
app.use(helmet());
*/

const express = require('express');
const productsArr=require('./array')
const app = express();


app.get('/array', (req, res) => {
  res.send(productsArr);
});
app.listen(3000,()=>{
  console.log("Listening")
});
