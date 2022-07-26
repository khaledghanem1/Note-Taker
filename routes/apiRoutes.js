// require router from express - activity 21 and 22, specifically in the routes in activity 22
const router = require('express').Router();
// require store from the helpers folder 

// GET ALL THE NOTES //
router.get('/notes', (req, res) => {
  store
    // getNotes()
    // then take the notes and return them with res.json
})

// POST A NEW NOTE //
router.post('/notes', (req, res) => {
  store
    // addNote(req.body)
    // then return note with res.json
})

// DELETE A NOTE //
router.delete('notes/:id', (req, res) => {
  store
    // removeNote(req.params.id)
    // give a status letting you know it's been deleted
})

// export your router
module.exports = router;