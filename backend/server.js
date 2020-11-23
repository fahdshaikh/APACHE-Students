const express = require('express');
const students = require('./students');
var cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// GET: Get all Students Details
app.get('/', (req, res) => {
    res.status(200).json(students);
});

// GET: Get 1 Student Details
app.get('/student/:name', (req, res) => {
    const index = students.findIndex((element) => {
        return element.Name === req.params.name;
    });

    if (index >= 0) {
        res.status(200).json(students[index]);
    } else {
        res.status(404).json({ message: 'Name Not Found' });
    }
});

// POST: Enter new Student Details
app.post('/newStudent', (req, res) => {
    if (req.body.name <= 1) {
        res.status(403).json({ message: "Student's Name can not be empty" });
    } else {
        const newStudent = {
            Name: req.body.name,
            BloodGrp: req.body.bloodGrp || 'O+ve',
            Email: req.body.email || 'example@gmail.com',
            City: req.body.city || 'Pune',
            ImageLink: req.body.imageLink || 'https://via.placeholder.com/150',
            Gender: req.body.gender || 'Male',
        };
        students.push(newStudent);

        res.status(200).json({
            status: 'Success',
            message: `${req.body.name} has been added`,
        });
    }
});

// DELETE: Delete a Student Record
app.delete('/delete/:name', (req, res) => {
    const index = students.findIndex((element) => {
        return element.Name === req.params.name;
    });

    if (index >= 0) {
        students.splice(index, 1);
        res.status(200).json({
            status: 'Success',
            message: `${req.body.name} has been removed from the student`,
        });
    } else {
        res.status(404).json({ message: 'Name Not Found' });
    }
});

//PUT: Edit Student Details
app.put('/editdetails/:name', (req, res) => {
    // const index = students.findIndex((element) => {
    //     return element.Name === req.body.name;
    // });
    const index = students.findIndex((element) => {
        return element.Name === req.params.name;
    });
    console.log(index);
    console.log(req.body);
    if (index >= 0) {
        students.forEach((student, i) => {
            i === index
                ? ((student.Name = req.body.name),
                  (student.BloodGrp = req.body.bloodGrp),
                  (student.Gender = req.body.gender),
                  (student.Email = req.body.email),
                  (student.City = req.body.city))
                : student;
        });
        res.status(200).json({
            status: 'Success',
            message: `Details have been updated`,
        });
    } else {
        res.status(404).json({
            status: 'Failure',
            message: `Details have not been updated`,
        });
    }
});

app.get('/*', (req, res) => {
    res.status(404).json({ message: 'Path Not Found' });
});

app.listen(5000, () => {
    console.log('Server listening on port 5000');
});
