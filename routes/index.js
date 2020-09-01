const express = require('express');
const Pupil = require('../models/Pupil');
const router = express.Router();

router.get('/get', async (req, res) => {
    const pupil = await Pupil
    .find()
    res.render('data', {
        records: pupil
    });
});

router.get('/post', (req, res) => {
    res.render('index')
})
router.post('/post', async (req, res) => {
    const pupil = new Pupil({
        name: req.body.first_name,
        group: req.body.group,
        password: req.body.password
    });

    await pupil.save();
});
module.exports = router;