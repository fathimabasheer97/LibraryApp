const express = require("express");
const cors = require("cors");
const Bookdata = require("./src/model/BookData");
const jwt = require('jsonwebtoken');



const app = new express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

username='admin@gmail.com';
password='123456';


function verifyToken(req,res,next){

  if(!req.headers.authorization) {
          return res.status(401).send('Unauthorized request')
        }
        let token = req.headers.authorization.split(' ')[1]
        if(token === 'null') {
          return res.status(401).send('Unauthorized request')    
        }
        let payload = jwt.verify(token, 'secretKey')
        console.log(payload)
        if(!payload) {
          return res.status(401).send('Unauthorized request')    
        }
        req.userId = payload.subject
        next()
      }

app.post('/login',(req,res)=>{
    let userData = req.body
            if(!username) {
              res.status(401).send('Invalid Username')
            }else
            if(password !== userData.password) {
              res.status(401).send('Invalid Password')    
            }else{
                let payload ={ subject:username+password}
                let token= jwt.sign(payload,'secretkey')
                res.status(200).send(token)
            }
})

// API
app.get('/books', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    Bookdata.find()
        .then(function (books) {
            res.send(books);
        })
});

// app.post('/addbook', function (req, res) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
//     console.log(req.body);
//     var books = {
//         bookName: req.body.item.bookName,
//         authorsName: req.body.item.authorsName,
//         imageURL: req.body.item.imageURL
//     }
//     console.log("Hello");
//     var books = new Bookdata(books);
//     books.save();

// })


  app.post('/addbook',verifyToken,function(req,res)
  {
    console.log('addbook')
    console.log(req.body);
  
    var books = {
        bookName: req.body.item.bookName,
        authorsName: req.body.item.authorsName,
        imageURL: req.body.item.imageURL
    }
    console.log("Hello");
    var books = new Bookdata(books);
    books.save();
  })

app.listen(3000, () => {
    console.log("Server up in Port 3000 ");
});


    