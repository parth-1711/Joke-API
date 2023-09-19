const express = require("express");
const Jokes = require("../Models/jokes");

const router = express.Router();

// router.get('/',async(req,res,next)=>{
//     const foundjokes = await Jokes.find();
//     res.json(foundjokes);
// })

//get Request to get a random joke.
router.get("/random", async (req, res, next) => {
  const randomInd = Math.floor(Math.random() * 200000);
  const foundjokes = await Jokes.findOne().skip(randomInd);
  res.json(foundjokes);
});

//get Request to get a joke with given Id.
router.get("/random/:id", async (req, res, next) => {
  const ID = req.params.id;
  const foundjoke = await Jokes.find({ id: ID });
  res.json(foundjoke);
});

//get  request to fetch all jokes with given score
router.get("/filter", async (req, res, next) => {
  const Score = parseInt(req.query.score);
  const foundjokes = await Jokes.find({ score: Score });
  res.json(foundjokes);
});

//post request to add a joke to collection
router.post("/jokes", async (req, res, next) => {
  let Joke = new Jokes({
    id: req.body.id,
    title: req.body.title,
    body: req.body.body,
    score: req.body.score,
  });
  await Joke.save();
  res.status(201).json({ message: "Joke Saved !" });
});

//put request to upadate a joke
router.put("/jokes/:id", async (req, res, next) => {
  const ID = req.params.id;
  const response = await Jokes.deleteOne({ id: ID });

  if (response.deletedCount === 1) {
    let Joke = new Jokes({
      id: ID,
      title: req.body.title,
      body: req.body.body,
      score: req.body.score,
    });
    await Joke.save();
    res.status(201).json({ message: "Joke is replaced" });
  } else {
    res.status(401).json({ message: "Some error occured while updating Joke" });
  }
});

//patch request to update a joke.
router.patch("/jokes/:id", async (req, res, next) => {
  const ID = req.params.id;
  const foundJoke = await Jokes.find({ id: ID });
  const response = await Jokes.updateOne(
    { id: ID },
    {
      id: ID,
      title: req.body.title || foundJoke.title,
      body: req.body.body || foundJoke.body,
      score: req.body.score || foundJoke.score,
    }
  );
  if (response.acknowledged) {
    res.status(201).json({ message: "Joke is updated" });
  } else {
    res.status(401).json({ message: "Some error occured while updating Joke" });
  }
});

router.delete("/jokes/:id",async(req,res,next)=>{
    const ID = req.params.id;
    const response = await Jokes.deleteOne({ id: ID });
    if(response.deletedCount!=0){
        res.status(201).json({message:"Joke deleted successfully !"});
    }
    else res.status(401).json({message:"Joke with given ID is not found !"})
})
module.exports = router;
