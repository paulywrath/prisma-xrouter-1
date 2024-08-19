const express = require('express');
const router = express.Router();

const { getChessClubs, getSpecificChessClub, createChessClub, updateChessClub } = require('../prisma/db/chess-club.cjs')

router.use(express.json())

router.get('/', async(req, res, next) => {
  try {
    const chessClubs = await getChessClubs();
    res.send(chessClubs);
  } catch (error) {
    next(error);
  }  
})

router.get('/:id', async(req, res, next) => {
  try {
    let { id } = req.params;
    id = Number(id);
    const specificChessClub = await getSpecificChessClub(id);
    res.send(specificChessClub);
  } catch (error) {
    next(error);
  }
})

router.post('/', async(req, res, next) => {
  try {
    const { name, meetsWhen, hostUsername, venueName } = req.body;
    await createChessClub(name, meetsWhen, hostUsername, venueName);
    res.send(`created`);
  } catch (error) {
    next(error);
  }
})

router.put('/:id', async(req, res, next) => {
  try {
    let { id } = req.params;
    id = Number(id);
    const { meetsWhen, hostUsername, venueName } = req.body;
    const updatedChessClub = await updateChessClub(id, meetsWhen, hostUsername, venueName);
    res.send(updatedChessClub);
  } catch (error) {
    next(error);
  }
})

module.exports = router;