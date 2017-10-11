const express = require('express');
const User = require('./models/user');
const cors = require('cors');
var app = express();

app.use(cors());

app.get('/', function(req, res){
  res.send('Hello World');
});

app.get('/users', function(req, res, next){
  User.findAll({}).then( users => {
    if ( users == null ) {
      res.send("nope");
    } else {
      res.send(JSON.stringify(users));
    }
  })
})

/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}
