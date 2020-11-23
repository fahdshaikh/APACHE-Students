import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        // backgroundColor: theme.palette.background.paper,
        backgroundColor: '#eceff1',
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function EditStudentModal(props) {
    const { id, name, email, bloodGrp, gender, place, image, getData } = props;
    const [open, setOpen] = useState(false);
    const [newName, setNewName] = useState(name);
    const [newEmail, setNewEmail] = useState(email);
    const [newCity, setNewCity] = useState(place);
    const [newGender, setNewGender] = useState(gender);
    const [newBloodGrp, setNewBloodGrp] = useState(bloodGrp);
    const [newAvatar, setNewAvatar] = useState(image);
    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleEditStudent = () => {
        axios
            .put(`http://localhost:5000/api/student/editStudent`, {
                _id: id,
                name: newName,
                email: newEmail,
                bloodGrp: newBloodGrp,
                city: newCity,
                imageLink:
                    newAvatar ||
                    'https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg',
                gender: newGender,
            })
            .then((res) => {
                getData();
                alert('Student Details Edited');
            })
            .catch((err) => {
                console.log(err);
                alert(err);
            });
        handleClose();
    };

    return (
        <div>
            <Tooltip title='Edit Student Details.' placement='top-start'>
                <Button
                    size='small'
                    style={{ marginLeft: '25px' }}
                    onClick={() => {
                        handleOpen();
                        // getDetails();
                    }}
                >
                    <span style={{ fontSize: '2em' }}>
                        <i
                            className='fas fa-edit'
                            style={{ marginRight: '5px', color: 'darkgray' }}
                        ></i>
                    </span>
                    Edit
                </Button>
            </Tooltip>
            <Modal
                aria-labelledby='transition-modal-title'
                aria-describedby='transition-modal-description'
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 style={{ marginTop: '0px' }}>
                            Edit Student Details.
                        </h2>
                        <Divider />
                        <TableContainer>
                            <Table aria-label='New Student' size='small'>
                                <TableHead></TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell
                                            component='th'
                                            scope='row'
                                            align='left'
                                        >
                                            <p style={{ fontSize: '20px' }}>
                                                Name:
                                            </p>
                                        </TableCell>
                                        <TableCell align='left'>
                                            <TextField
                                                variant='filled'
                                                value={newName}
                                                onChange={(e) =>
                                                    setNewName(e.target.value)
                                                }
                                            />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component='th' scope='row'>
                                            <p style={{ fontSize: '20px' }}>
                                                Email:
                                            </p>
                                        </TableCell>
                                        <TableCell align='left'>
                                            <TextField
                                                variant='filled'
                                                value={newEmail}
                                                onChange={(e) =>
                                                    setNewEmail(e.target.value)
                                                }
                                            />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component='th' scope='row'>
                                            <p style={{ fontSize: '20px' }}>
                                                City:
                                            </p>
                                        </TableCell>
                                        <TableCell align='left'>
                                            <TextField
                                                variant='filled'
                                                value={newCity}
                                                onChange={(e) =>
                                                    setNewCity(e.target.value)
                                                }
                                            />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component='th' scope='row'>
                                            <p style={{ fontSize: '20px' }}>
                                                Gender:
                                            </p>
                                        </TableCell>
                                        <TableCell align='left'>
                                            <TextField
                                                variant='filled'
                                                value={newGender}
                                                onChange={(e) =>
                                                    setNewGender(e.target.value)
                                                }
                                            />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component='th' scope='row'>
                                            <p style={{ fontSize: '20px' }}>
                                                Blood Group:
                                            </p>
                                        </TableCell>
                                        <TableCell align='left'>
                                            <TextField
                                                variant='filled'
                                                value={newBloodGrp}
                                                onChange={(e) =>
                                                    setNewBloodGrp(
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component='th' scope='row'>
                                            <p style={{ fontSize: '20px' }}>
                                                Avatar:
                                            </p>
                                        </TableCell>
                                        <TableCell align='left'>
                                            <TextField
                                                variant='filled'
                                                value={newAvatar}
                                                onChange={(e) =>
                                                    setNewAvatar(e.target.value)
                                                }
                                            />
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Grid
                            container
                            spacing={0}
                            // style={{ border: '1px solid black' }}
                            // className={classes.gridContainer}
                        >
                            <Grid
                                item
                                xs={3}
                                sm={3}
                                md={2}
                                // style={{ border: '1px solid red' }}
                            >
                                <Button
                                    variant='contained'
                                    color='primary'
                                    style={{ marginTop: '10px' }}
                                    onClick={handleEditStudent}
                                >
                                    Edit
                                </Button>
                            </Grid>
                            <Grid
                                item
                                xs={6}
                                sm={6}
                                md={6}
                                // style={{ border: '1px solid red' }}
                                // className={classes.gridContainer}
                            >
                                <Button
                                    variant='contained'
                                    color='secondary'
                                    style={{ marginTop: '10px' }}
                                    onClick={handleClose}
                                >
                                    Cancle
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
