// COMPLETED

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema(
    {
        Name: {
            type: String,
            required: true,
            trim: true,
            minLength: 3,
        },
        BloodGrp: {
            type: String,
            required: true,
            trim: true,
            minLength: 1,
        },
        Email: {
            type: String,
            required: true,
            trim: true,
            minLength: 3,
        },
        City: {
            type: String,
            required: true,
            trim: true,
            minLength: 3,
        },
        ImageLink: {
            type: String,
            // required: true,
            trim: true,
            // minLength: 3,
            default:
                'https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg',
        },
        Gender: {
            type: String,
            required: true,
            trim: true,
            minLength: 4,
        },
    },
    {
        versionKey: false,
    },
);

module.exports = mongoose.model('Student', studentSchema);
