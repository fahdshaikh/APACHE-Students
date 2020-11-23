import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Avatar from '@material-ui/core/Avatar';
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
// import Alert from '@material-ui/lab/Alert';
import axios from 'axios';
// import SimpleAlerts from './Alert';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        // backgroundColor: theme.palette.info.light,
        backgroundColor: '#e3f2fd',
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    alert: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const PlusSign = withStyles((theme) => ({
    root: {
        width: 120,
        height: 120,
        // border: `4px solid ${theme.palette.info.main}`,
        border: `4px solid white`,
        boxShadow: `0 0 0 4px ${theme.palette.info.main}`,
        marginBottom: 10,
    },
}))(Avatar);

export default function NewStudentModal(props) {
    const { getData } = props;
    // const [flag, setFlag] = useState();
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [gender, setGender] = useState('');
    const [bloodGrp, setBloodGrp] = useState('');
    const [avatar, setAvatar] = useState(
        'https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg',
    );
    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleNewStudent = () => {
        axios
            .post('http://localhost:5000/api/student/addStudent', {
                name: name,
                email: email,
                bloodGrp: bloodGrp,
                city: city,
                imageLink: avatar,
                gender: gender,
            })
            .then((res) => {
                getData();
                // setFlag(true);
                alert('New Student Added');
            })
            .catch((err) => {
                console.log(err);
                // setFlag(false);
                alert(err);
            });
        setDefault();
        handleClose();
    };

    const setDefault = () => {
        setName('');
        setEmail('');
        setGender('');
        setCity('');
        setBloodGrp('');
        setAvatar(
            'https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg',
        );
    };

    return (
        <div>
            <Tooltip title='Add a new student in database' placement='right'>
                <Button
                    // variant='contained'
                    size='large'
                    // color='primary'
                >
                    <PlusSign
                        variant='rounded'
                        src='https://img.pngio.com/add-user-icon-png-and-vector-for-free-download-pngtree-add-user-png-512_512.png'
                        onClick={handleOpen}
                    ></PlusSign>
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
                            New Student Details.
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
                                                error
                                                label='eg: Sam Knight'
                                                variant='filled'
                                                onChange={(e) =>
                                                    setName(e.target.value)
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
                                                error
                                                label='eg: someone@gmail.com'
                                                variant='filled'
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
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
                                                error
                                                label='Current Place of Residence eg: Pune'
                                                variant='filled'
                                                onChange={(e) =>
                                                    setCity(e.target.value)
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
                                                error
                                                label='eg: Male'
                                                variant='filled'
                                                onChange={(e) =>
                                                    setGender(e.target.value)
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
                                                error
                                                label='eg: O+ve'
                                                variant='filled'
                                                onChange={(e) =>
                                                    setBloodGrp(e.target.value)
                                                }
                                            />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component='th' scope='row'>
                                            <p style={{ fontSize: '20px' }}>
                                                Avatar Link:
                                            </p>
                                        </TableCell>
                                        <TableCell align='left'>
                                            <TextField
                                                label='eg: https://via.placeholder.com'
                                                variant='filled'
                                                onChange={(e) =>
                                                    setAvatar(e.target.value)
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
                                    onClick={handleNewStudent}
                                >
                                    Add
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
            {/* <SimpleAlerts flag={flag} openAlert={true} /> */}
        </div>
    );
}
