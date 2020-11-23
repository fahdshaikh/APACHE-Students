const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Student = require('./Models/Student');
const studentsJSON = require('./apacheStudents.json');
const Routes = require('./Routes/Students');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/student', Routes);

mongoose.connect(
    process.env.ATLAS_URI,
    {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    },
    (err) => {
        if (err) {
            console.log('The Database is Not Connected');
        } else {
            console.log('The Database is Connected');
        }
    },
);

const db = mongoose.connection;

db.once('open', async () => {
    if ((await Student.countDocuments().exec()) > 0) {
        return;
    }
    Student.insertMany(studentsJSON)
        .then(() => {
            res.json({ message: 'Students added successfully' });
        })
        .catch((err) => {
            res.status(400).json({ message: `Error: ${err}` });
        });
});

app.listen(5000, () => {
    console.log('The server is up and running');
});
