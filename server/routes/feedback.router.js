const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

// POST route
router.post('/', (req, res) => {
    console.log('In server POST');
    let newFeedback = req.body;
    let queryString = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                       VALUES ($1, $2, $3, $4);`;
    pool.query(queryString,
        [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
        .then(result => {
            res.sendStatus(201);
    }).catch(err => {
        console.error('Error in server POST:', err);
        res.sendStatus(500);
    });
});

// GET route
router.get('/', (req, res) => {
    console.log('In server GET');
    let queryString = `SELECT * FROM "prime_feedback" ORDER BY "id" DESC;`;
    pool.query(queryString).then(results => {
        res.send(results.rows);
    }).catch(err => {
        console.error('Error in server GET:', err);
        res.sendStatus(500);
    });
});

module.exports = router;