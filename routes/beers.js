const express = require("express");
const router = express.Router();

const { getAllBeers,
        getOneBeer,
        postOneBeer,
        updateBeer,
        deleteBeer
        } = require("../handlers/beerQueries")

//Get all route
router.get("/", (req, res) => {
  getAllBeers()
   .then(beers => {
     res.json({ beers: beers })
   })
});

//Get one route
router.get("/:id", (req, res, next) => {
 const id = req.params.id
  getOneBeer(id)
   .then(beer => {
     res.json({ beers: beer })
   })
});

//Post
router.post("/", (req, res, next) => {
 const body = req.body
  postOneBeer(body)
   .then(beer => {
     res.json({ beer: beer[0] })
   })
});

//put
router.put("/:id", (req, res) => {
 const id = req.params.id
 const body = req.body
  updateBeer(id, body)
   .then(updatedBeer => {
     res.json({ beer: updatedBeer[0] })
   })
});

//delete
router.delete("/:id", (req, res) => {
 const id = req.params.id
  deleteBeer(id)
   .then(deletedBeer => {
     res.json({ beer: deletedBeer[0] })
   })
});

module.exports = router