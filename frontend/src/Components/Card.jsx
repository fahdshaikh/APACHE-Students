// import React, { useState } from 'react';
import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Color from 'color';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Grid } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import EditStudentModal from './Modals/EditStudent';
import DeleteStudentModal from './Modals/DeleteStudent';
import Divider from '@material-ui/core/Divider';
// import Button from '@material-ui/core/Button';
// import SimpleAlerts from './Modals/Alert';

const StyledBadge = withStyles((theme) => ({
    badge: {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 3px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: -2,
            left: -2,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: '$ripple 1.2s infinite ease-in-out',
            border: '2px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}))(Badge);

const GithubAvatar = withStyles((theme) => ({
    root: {
        width: 120,
        height: 120,
        // border: `4px solid ${theme.palette.info.main}`,
        border: `4px solid white`,
        boxShadow: `0 0 0 4px ${theme.palette.info.main}`,
        marginBottom: 10,
    },
}))(Avatar);

const useStyles = makeStyles((theme) => ({
    root: ({ color }) => ({
        minWidth: 200,
        textAlign: 'center',
        borderRadius: 6,
        transition: '0.2s',
        boxShadow: 'none',
        '&:hover': {
            transform: 'scale(1.1)',
            boxShadow: `0 6px 12px 0 ${Color(color)
                .rotate(-12)
                .darken(0.2)
                .fade(0.5)}`,
        },
    }),
    title: {
        fontSize: 26,
    },
    details: {
        fontSize: 18,
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    gridContainer: {
        paddingLeft: '40px',
        paddingRight: '40px',
    },
}));

export default function StudentCards(props) {
    const { id, name, email, bloodGrp, gender, place, image, getData } = props;
    const classes = useStyles();
    // console.log(props);

    return (
        <>
            <Card className={classes.root} variant='outlined'>
                <CardContent justify='center' style={{ marginBottom: '5px' }}>
                    <StyledBadge
                        overlap='circle'
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        variant='dot'
                    >
                        <GithubAvatar
                            alt='Avatar'
                            // src='https://via.placeholder.com/150'
                            src={image}
                        />
                    </StyledBadge>
                    <div
                        style={{
                            marginLeft: '20px',
                            textAlign: 'left',
                        }}
                    >
                        <Typography className={classes.title} gutterBottom>
                            {name}
                        </Typography>
                        <Typography className={classes.details} gutterBottom>
                            <span style={{ fontSize: '25px' }}>
                                <i
                                    className='far fa-envelope'
                                    style={{ marginRight: '5px', color: 'red' }}
                                ></i>
                            </span>
                            {email}
                        </Typography>
                        <Typography className={classes.details} gutterBottom>
                            <span style={{ fontSize: '25px' }}>
                                <i
                                    className='fas fa-map-marker-alt'
                                    style={{ marginRight: '5px' }}
                                ></i>
                            </span>
                            {place}
                        </Typography>
                        <Grid
                            container
                            spacing={0}
                            // style={{ border: '1px solid black' }}
                            // className={classes.gridContainer}
                        >
                            <Grid
                                item
                                xs={12}
                                sm={4}
                                md={4}
                                // style={{ border: '1px solid red' }}
                            >
                                <Typography
                                    className={classes.details}
                                    gutterBottom
                                >
                                    <span style={{ fontSize: '25px' }}>
                                        <i
                                            className='fas fa-tint'
                                            style={{
                                                marginRight: '5px',
                                                color: 'red',
                                            }}
                                        ></i>
                                    </span>
                                    {bloodGrp}
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={6}
                                // style={{ border: '1px solid red' }}
                                // className={classes.gridContainer}
                            >
                                <Typography
                                    className={classes.details}
                                    gutterBottom
                                >
                                    <span style={{ fontSize: '25px' }}>
                                        <i
                                            className='fas fa-venus-mars'
                                            style={{
                                                marginRight: '5px',
                                                color: 'lightblue',
                                            }}
                                        ></i>
                                    </span>
                                    {gender}
                                </Typography>
                            </Grid>
                        </Grid>
                        {/* <div style={{ display: 'flex' }}>
                            <Typography
                                className={classes.details}
                                gutterBottom
                                style={{ flex: 0.4 }}
                            >
                                <span style={{ fontSize: '25px' }}>
                                    <i
                                        className='fas fa-tint'
                                        style={{
                                            marginRight: '5px',
                                            color: 'red',
                                        }}
                                    ></i>
                                </span>
                                {bloodGrp}
                            </Typography>
                            <Typography
                                className={classes.details}
                                gutterBottom
                            >
                                <span style={{ fontSize: '25px' }}>
                                    <i
                                        className='fas fa-venus-mars'
                                        style={{
                                            marginRight: '5px',
                                            color: 'lightblue',
                                        }}
                                    ></i>
                                </span>
                                {gender}
                            </Typography>
                        </div> */}
                    </div>
                </CardContent>
                <Divider />
                <CardActions>
                    <EditStudentModal
                        id={id}
                        name={name}
                        email={email}
                        bloodGrp={bloodGrp}
                        gender={gender}
                        place={place}
                        image={image}
                        getData={getData}
                    />
                    <DeleteStudentModal getData={getData} id={id} />
                </CardActions>
            </Card>
            {/* <SimpleAlerts flag={true} /> */}
        </>
    );
}
