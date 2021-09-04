const router = require('express').Router()
const pool = require('./db')
const { DAILY_QUERY, WEEKLY_QUERY, MONTHLY_QUERY, ADD_NEW, SELECT_ALL } = require('./queries')


router.post('/new', async (req, res) => {
    try {
        const { name, description, amount } = req.body
        const _ = await pool.query(ADD_NEW, [name, description, amount]);
        const result = await pool.query(SELECT_ALL)
        const data = result.rows
        res.json(data)
    } catch (err) {
        res.json(err.message)
    }
})
router.get('/:duration', async (req, res) => {
    try {
        const { duration } = req.params
        let result;
        if (duration === "daily") {
            result = await pool.query(DAILY_QUERY)
        }
        else if (duration === "weekly") {
            result = await pool.query(WEEKLY_QUERY)
        }
        else if (duration === "monthly") {
            result = await pool.query(MONTHLY_QUERY)
        }
        else {
            res.json({ message: "please specify a valid duration" })
        }
        const data = result.rows
        res.json(data)

    } catch (err) {
        res.json(err.message)
    }
})

module.exports = router