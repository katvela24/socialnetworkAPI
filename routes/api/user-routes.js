const router = require('express').Router();
const userModel = require('../../Models/userModel');

router.get('/', async (req, res) => {
  // find all categories
  try {
    const users = await userModel.find()
  
    res.status(200).json(users);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

// find one category by its `id` value
router.get('/:id', async (req, res) => {
  try {
   const user = await userModel.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const user = await userModel.create(req.body);
     res.status(200).json(user);
   } catch (err) {
     console.log(err)
     res.status(500).json(err);
   }
});

// update product data
router.put('/:id', async (req, res) => {
  try {
    const user = await userModel.findByIdAndUpdate(req.params.id,req.body,{
      new: true
    });
     res.status(200).json(user);
   } catch (err) {
     console.log(err)
     res.status(500).json(err);
   }
})

// Delete route 
router.delete('/:id', async (req, res) => {
  try {
    const user = await userModel.findByIdAndDelete(req.params.id);
     res.status(200).json(user);
   } catch (err) {
     console.log(err)
     res.status(500).json(err);
   }
});

// find one category by its `id` value
router.get('/:id/friends/:friendId', async (req, res) => {
  try {
   const user = await userModel.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

// find user by id and pulling(deleting) the friend that matches the :friendId
router.delete('/:id/friends/:friendId', async (req, res) => {
  try {
    const user = await userModel.findByIdAndUpdate(req.params.id,{
      $pull: {
        friends: req.params.friendId
      }
    },{
      new: true
    });
    if(!user)
      res.status(500).json("user does not exist")
    res.status(200).json(user);
   } catch (err) {
     console.log(err)
     res.status(500).json(err);
   }
});

module.exports = router;
