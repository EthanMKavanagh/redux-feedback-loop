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
    let queryString = `SELECT * FROM "feedback" ORDER BY "id" DESC;`;
    pool.query(queryString).then(results => {
        res.send(results.rows);
    }).catch(err => {
        console.error('Error in server GET:', err);
        res.sendStatus(500);
    });
});

// DELETE route
router.delete('/:id', (req, res) => {
    let id = req.params.id
    let queryString = `DELETE FROM "feedback" WHERE "id" = $1;`;
    pool.query(queryString, [id]).then(response => {
        console.log('Response in DELETE:', response);
        res.sendStatus(200);
    }).catch(err => {
        console.error('Error in server DELETE:', err);
        res.sendStatus(500);
    });
});

router.put('/:id', (req, res) => {
    let queryString = `UPDATE "feedback" SET "flagged" = TRUE WHERE "id" = $1;`;
    pool.query( queryString, [id]).then(results => {
        console.log('Updated flagged to:', results);
        res.sendStatus(200);
    }).catch(err => {
        console.log('Error in server PUT:', err);
        res.sendStatus(500);
    });
});

module.exports = router;