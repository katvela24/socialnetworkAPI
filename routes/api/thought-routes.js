const thoughtModel = require('../../Models/thoughtModel');

const router = require('express').Router();

router.get('/', async (req, res) => {
  // find all categories
  try {
    const thoughts = await thoughtModel.find()
  
    res.status(200).json(thoughts);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

// find one category by its `id` value
router.get('/:id', async (req, res) => {
  try {
   const thought = await thoughtModel.findById(req.params.id);
    res.status(200).json(thought);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const thought = await thoughtModel.create(req.body);
     res.status(200).json(thought);
   } catch (err) {
     console.log(err)
     res.status(500).json(err);
   }
});

// update product data
router.put('/:id', async (req, res) => {
  try {
    const thought = await thoughtModel.findByIdAndUpdate(req.params.id,req.body,{
      new: true
    });
     res.status(200).json(thought);
   } catch (err) {
     console.log(err)
     res.status(500).json(err);
   }
})

// Delete route 
router.delete('/:id', async (req, res) => {
  try {
    const thought = await thoughtModel.findByIdAndDelete(req.params.id);
     res.status(200).json(thought);
   } catch (err) {
     console.log(err)
     res.status(500).json(err);
   }
});

// find one category by its `id` value
router.post('/:thoughtId/reactions', async (req, res) => {
  try {
    const thought = await thoughtModel.findByIdAndUpdate(req.params.thoughtId,{
      $addToSet: {
        reactions: req.body
      }
    },{
      new: true
    });
    res.status(200).json(thought);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

// find thought by id and pulling(deleting) the reaction that matches the :reactionId
router.delete('/:thoughtId/reactions/:reactionId', async (req, res) => {
  try {
    const thought = await thoughtModel.findByIdAndUpdate(req.params.thoughtId,{
      $pull: {
        reactions: {
          reactionId: req.params.reactionId
        }
      }
    },{
      new: true
    });
    if(!thought)
      res.status(500).json("thought does not exist")
    res.status(200).json(thought);
   } catch (err) {
     console.log(err)
     res.status(500).json(err);
   }
});

module.exports = router;
