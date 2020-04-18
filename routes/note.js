const express = require('express');
const Note = require('../models/Note');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    next(error);
  }
});

router.get('/:noteId', async (req, res, next) => {
  const { noteId } = req.params;
  try {
    const note = await Note.findById(noteId);
    if (note) {
      res.json(note);
    } else {
      res.json({});
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
