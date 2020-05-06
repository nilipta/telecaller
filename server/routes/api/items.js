const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'secretkey123456'

// Item Model
// const Item = require('../../models/Item');

var users = [];

//token 
function createToken(user){
  const expireIn = 60*60*24
  const accessToken = jwt.sign({uuid:user._id}, SECRET_KEY, {expiresIn:expireIn} )
  return {token:accessToken}
}
//-------------------

router.post('/login', (req, res) => {
  console.log(req.body);
  console.log(users);
  if(users.length)
  {
    // res.status(200).json(createToken(req.body));
    let loginUser = users.filter( user => { user.username == req.body.username && user.password == req.body.password})
    console.log('yes user found' , loginUser)
    if(loginUser.length)
      res.status(200).json({token: '1234'});
  }
  else
  {
    res.status(201).json({token: ''});
  }
});

router.post('/register', (req, res) => {
  users.push(req.body);
  res.status(200).json(createToken(req.body));
});

//@route  DELETE api/items:id
//@desc   Delete an item
//@access Public
router.delete('/:id', (req, res) => {
  // Item.findById(req.params.id)
  //   .then(item => item.remove().then(() => res.json({ success: true })))
  //   .catch(err => res.status(404).json({ success: false }))
})

module.exports = router;