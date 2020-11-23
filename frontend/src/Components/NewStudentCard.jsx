import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Color from 'color';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import NewStudentModal from './Modals/NewStudent';
import Divider from '@material-ui/core/Divider';

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
        fontSize: 24,
        justifyContent: 'center',
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
}));

export default function NewStudentCard(props) {
    const classes = useStyles();

    return (
        <>
            <Card
                className={classes.root}
                variant='outlined'
                style={{ marginTop: '40px' }}
            >
                <CardContent
                    justify='center'
                    style={{ marginTop: '55px', marginBottom: '40px' }}
                >
                    <div>
                        <NewStudentModal getData={props.getData} />
                    </div>
                </CardContent>
                <Divider />
                <CardActions>
                    <Typography
                        className={classes.title}
                        style={{
                            // marginRight: '25px',
                            // border: '1px solid black',
                            display: 'flex',
                            flex: 1,
                        }}
                    >
                        Add a new Student
                    </Typography>
                </CardActions>
            </Card>
        </>
    );
}
