const express = require('express');
const router = express.Router();
const {
    getStudents,
    addStudent,
    editStudent,
    deleteStudent,
    paginatedStudentsResults,
} = require('../Controllers/studentController');

router.get('/', getStudents);
router.get('/pagination', paginatedStudentsResults);
router.post('/addStudent', addStudent);
router.put('/editStudent', editStudent);
router.delete('/deleteStudent', deleteStudent);

module.exports = router;
