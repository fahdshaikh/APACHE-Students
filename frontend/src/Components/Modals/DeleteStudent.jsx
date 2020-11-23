import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Divider from '@material-ui/core/Divider';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.error.main,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function DeleteStudentModal(props) {
    const { id, getData } = props;
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const handleOpen = () => {
        // console.log('in handle open:', id);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = () => {
        // console.log('in handle delete:', id);

        // axios
        //     .delete(`http://localhost:5000/api/student/deleteStudent`, {
        //         _id: id,
        //     })
        //     .then((res) => getData())
        //     .catch((err) => console.log(err));

        // var axios = require('axios');
        var data = JSON.stringify({ _id: `${id}` });

        var config = {
            method: 'delete',
            url: 'http://localhost:5000/api/student/deleteStudent',
            headers: {
                'Content-Type': 'application/json',
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                getData();
                alert('Student Record Detected');
            })
            .catch(function (error) {
                console.log(error);
                alert(error);
            });

        handleClose();
    };

    return (
        <div>
            <Tooltip title='Delete a Student Record.' placement='right'>
                <Button size='small' onClick={handleOpen}>
                    <span style={{ fontSize: '2em' }}>
                        <i
                            className='fas fa-trash'
                            style={{ marginRight: '5px', color: 'red' }}
                        ></i>
                    </span>
                    DELETE
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
                        <h2 style={{ marginTop: '0px', color: 'white' }}>
                            Delete Student.
                        </h2>
                        <Divider />
                        <p style={{ fontSize: '20px', color: 'white' }}>
                            Are You Sure to Delete ??
                        </p>
                        <Grid
                            container
                            spacing={0}
                            // style={{ border: '1px solid black' }}
                            // className={classes.gridContainer}
                        >
                            <Grid
                                item
                                xs={4}
                                sm={4}
                                md={4}
                                // style={{ border: '1px solid red' }}
                            >
                                <Button
                                    variant='contained'
                                    color='error'
                                    style={{ marginTop: '10px', color: 'red' }}
                                    onClick={handleDelete}
                                >
                                    Yes
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
                                    color='error'
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
