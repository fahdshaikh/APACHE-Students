import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
// import Alert from '@material-ui/lab/Alert';
// import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function SimpleAlerts(props) {
    const { flag, openAlert } = props;
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(openAlert);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    if (flag) {
        return (
            <div className={classes.root}>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                >
                    <Alert variant='filled' severity='success'>
                        This is a success alert — check it out!
                    </Alert>
                </Snackbar>
            </div>
        );
    } else {
        return (
            <div className={classes.root}>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                >
                    <Alert variant='filled' severity='error'>
                        This is a error alert — check it out!
                    </Alert>
                </Snackbar>
            </div>
        );
    }
}

// const useStyles = makeStyles((theme) => ({
//     root: {
//         width: '100%',
//         '& > * + *': {
//             marginTop: theme.spacing(2),
//         },
//     },
// }));

// export default function SimpleAlerts(props) {
//     const classes = useStyles();

//     const { flag } = props;
//     if (flag) {
//         return (
//             <div className={classes.root}>
//                 <Alert variant='filled' severity='success'>
//                     This is a success alert — check it out!
//                 </Alert>
//             </div>
//         );
//     } else {
//         return (
//             <div className={classes.root}>
//                 <Alert variant='filled' severity='error'>
//                     This is a error alert — check it out!
//                 </Alert>
//             </div>
//         );
//     }
// <Alert variant='filled' severity='warning'>
//     This is a warning alert — check it out!
// </Alert>
// <Alert variant='filled' severity='info'>
//     This is an info alert — check it out!
// </Alert>
// }
