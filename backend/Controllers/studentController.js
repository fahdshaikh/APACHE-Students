const Student = require('../Models/Student');

const getStudents = (req, res) => {
    console.log('get Students: ', req.body);
    Student.find()
        .then((students) => {
            res.json(students);
            console.log('get Students total: ', students.length);
        })
        .catch((err) => {
            res.status(400).json({ message: `Error: ${err}` });
        });
};

const addStudent = (req, res) => {
    console.log('add students: ', req.body);
    const { name, bloodGrp, email, city, imageLink, gender } = req.body;
    const newStudent = new Student({
        Name: name,
        BloodGrp: bloodGrp,
        Email: email,
        City: city,
        ImageLink: imageLink,
        Gender: gender,
    });

    newStudent
        .save()
        .then(() => res.json({ message: `Student Added Successfully` }))
        .catch((err) => {
            res.status(400).json({ message: `Error: ${err}` });
        });
};

const editStudent = (req, res) => {
    console.log('edit student: ', req.body);
    Student.findByIdAndUpdate(
        // { _id: req.params._id },
        { _id: req.body._id },
        {
            $set: {
                _id: req.body._id,
                Name: req.body.name,
                BloodGrp: req.body.bloodGrp,
                Email: req.body.email,
                City: req.body.city,
                ImageLink: req.body.imageLink,
                Gender: req.body.gender,
            },
        },
    )
        .then(() => {
            res.status(200).json({ message: `Student Updated Successfully` });
        })
        .catch((err) => {
            res.status(400).json({ message: `Error: ${err}` });
        });
};

const deleteStudent = (req, res) => {
    console.log('delete student', req.body);
    // Student.findByIdAndDelete(req.params._id)
    Student.findByIdAndDelete(req.body._id)
        .then(() => {
            res.status(200).json({
                message: `Student Details Deleted Successfully`,
            });
        })
        .catch((err) => {
            res.status(400).json({ message: `Error: ${err}` });
        });
};

const paginatedStudentsResults = async (req, res) => {
    // console.log('here', Student.countDocuments());
    const page = Number.parseInt(req.query.page) || 1;
    const limit = Number.parseInt(req.query.limit) || 5;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};

    if (endIndex < (await Student.countDocuments().exec())) {
        results.next = {
            page: page + 1,
            limit: limit,
        };
    }

    if (startIndex > 0) {
        results.prev = {
            page: page - 1,
            limit: limit,
        };
    }

    try {
        results.current = await Student.find()
            .limit(limit)
            .skip(startIndex)
            .exec();
        // res.pagination = results;
        res.json(results);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};

module.exports = {
    getStudents,
    addStudent,
    editStudent,
    deleteStudent,
    paginatedStudentsResults,
};
