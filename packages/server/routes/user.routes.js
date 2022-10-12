const Router = require('express')
const router = new Router()
const userController = require('../controller/user.controller')

router.post('/score', userController.addScore)
router.get('/scores', userController.getBestScores)

router.post('/player', userController.addPlayer)
router.get('/players', userController.getPlayers)

router.post('/player/score', userController.addPlayerScore)
router.get('/player/scores/:id', userController.getPlayerScores)
// router.delete('/score/:id', userController.deleteBestScore)
// router.put('/score', userController.updateBestScore)
module.exports = router

