const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post('/api/posts',(req,res,next) =>{
  const posts = req.body;
  console.log(posts);
  res.status(201).json({
    message:'Post added successfully'
  })

});

app.use('/api/posts',(req,res,next) => {
  const post = [
    {
      id:1,
      title:'first title',
      content:'first content'
    },
    {
      id:1,
      title:'first title',
      content:'first content'
    },
    {
      id:1,
      title:'first title',
      content:'first content'
    }
  ]
  res.status(200).json({
    posts:post,
    message:'post fetched successfully'
  });
});

module.exports = app;

