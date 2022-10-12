const db = require('../data-base')

class UserController {
    async addScore(req, res) {
        const {
            nickName,
            score
        } = req.body;
        const bestScores = await db.query('SELECT * FROM best_scores ORDER BY best_score::int DESC')
        if (bestScores.rows.length < 10) {
            const newScore = await db.query('INSERT INTO best_scores (nick_name, best_score) values ($1, $2) RETURNING *', [nickName, score])
            res.json(newScore.rows[0])
        } else {
            for (let i = 0; i < 10; i++) {
                if (bestScores.rows[i].best_score < score) {
                    const removableId = bestScores.rows[9].id
                    const newScore = await db.query('INSERT INTO best_scores (nick_name, best_score) values ($1, $2) RETURNING *', [nickName, score])
                    res.json(newScore.rows[0])
                    const removableScore = await db.query(`DELETE FROM best_scores WHERE id = ${removableId}`);
                    break
                }
            }
        }
    }
    async getBestScores(req, res) {
        const bestScores = await db.query('SELECT * FROM best_scores ORDER BY best_score::int DESC')
        res.json(bestScores.rows)
    }

    async addPlayer(req, res) {
        const {
            nickName
        } = req.body;
        const players = await db.query('SELECT * FROM players')
        const playerNicknames = [];
        const playerIds = []
        players.rows.forEach((player) => {
            playerNicknames.push(player.nick_name)
            playerIds.push(player.id)
        })
        if (!playerNicknames.includes(nickName)) {
            const newPlayer = await db.query('INSERT INTO players (nick_name) values ($1) RETURNING *', [nickName])
            res.json(newPlayer.rows[0])
        } else {
            res.json({
                message: 'пользователь уже зарегистрирован',
                nick_name: nickName,
                id: playerIds[playerNicknames.indexOf(nickName)]
            })
        }
    }

    async getPlayers(req, res) {
        const players = await db.query('SELECT * FROM players')
        res.json(players.rows)
    }

    async addPlayerScore(req, res) {
        const {
            nickName,
            score,
            id
        } = req.body;
        const newPlayer = await db.query('INSERT INTO scores (nick_name, score, id) values($1, $2, $3) RETURNING *', [nickName, score, id])
        res.json(newPlayer.rows[0])

    }

    async getPlayerScores(req, res) {
        const id = req.params.id
        const playerScores = await db.query(`SELECT * FROM scores WHERE id = ${id} ORDER BY score::int DESC LIMIT 10`)
        res.json(playerScores.rows)
    }
}

module.exports = new UserController()