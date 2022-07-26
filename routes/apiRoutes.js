// Require: router from express and restore from the helpers folder (something I create)
// Separates the fxn'ality of reading and writing the files (activities 21 and 22)
const router = require("express").Router();
// const { response } = require("express");
const store = require("../helpers/store");
router.get("/notes", (req, res) => {
  store
    .getNotes()
    .then((notes) => {
      return res.json(notes); // res b/c you are responding with this information... returning the data you get
    })
    .catch((err) => res.status(500).json(err));
});
router.post("/notes", (req, res) => {
  store
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});
router.delete("/notes/:id", (req, res) => {
  store
    .removeNote(req.params.id) // Params should show you what's happening... But later.
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});
module.exports = router;