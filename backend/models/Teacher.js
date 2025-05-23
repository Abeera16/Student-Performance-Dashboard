const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Teacher', teacherSchema);
