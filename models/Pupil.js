const mongoose = require('mongoose');

const pupilSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    group: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const Pupil = mongoose.model('Pupils', pupilSchema);

module.exports = Pupil;