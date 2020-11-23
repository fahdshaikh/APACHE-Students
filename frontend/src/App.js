import React, { useState, useEffect } from 'react';
import './index.css';
import StudentCards from './Components/Card';
import NewStudentCard from './Components/NewStudentCard';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Text from 'react-svg-text';
import axios from 'axios';
import Pagination from '@material-ui/lab/Pagination';
// import SimpleAlerts from './Components/Modals/Alert';

const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: '40px',
        paddingRight: '40px',
    },
});

export default function App() {
    const classes = useStyles();
    const [data, setData] = useState([]);
    let [page, setPage] = useState(1);
    let [limit] = useState(6);
    let [total, setTotal] = useState(0);

    const getInitialData = () => {
        axios
            .get('http://localhost:5000/api/student')
            .then((res) => {
                // setData(res.data);
                console.log(res.data.length);
                setTotal(res.data.length);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getInitialData();
    }, [data]);

    const getData = () => {
        let url = 'http://localhost:5000/api/student/pagination';

        axios
            .get(url, { params: { page: page, limit: limit } })
            .then((res) => {
                setData(res.data.current);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getData();
    }, [page, limit]);

    return (
        <div style={{ backgroundColor: '#42a5f5' }}>
            {/* {console.log(data)} */}
            <div>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1340 290'>
                    <path
                        // fill='#44b700'
                        fill='#e3f2fd'
                        fillOpacity='1'
                        d='M0,224L0,192L37.9,192L37.9,256L75.8,256L75.8,64L113.7,64L113.7,256L151.6,256L151.6,160L189.5,160L189.5,96L227.4,96L227.4,288L265.3,288L265.3,96L303.2,96L303.2,128L341.1,128L341.1,224L378.9,224L378.9,224L416.8,224L416.8,96L454.7,96L454.7,192L492.6,192L492.6,160L530.5,160L530.5,288L568.4,288L568.4,64L606.3,64L606.3,32L644.2,32L644.2,192L682.1,192L682.1,0L720,0L720,224L757.9,224L757.9,96L795.8,96L795.8,288L833.7,288L833.7,0L871.6,0L871.6,224L909.5,224L909.5,256L947.4,256L947.4,64L985.3,64L985.3,64L1023.2,64L1023.2,288L1061.1,288L1061.1,160L1098.9,160L1098.9,64L1136.8,64L1136.8,96L1174.7,96L1174.7,96L1212.6,96L1212.6,192L1250.5,192L1250.5,224L1288.4,224L1288.4,128L1326.3,128L1326.3,128L1364.2,128L1364.2,256L1402.1,256L1402.1,0L1440,0L1440,0L1402.1,0L1402.1,0L1364.2,0L1364.2,0L1326.3,0L1326.3,0L1288.4,0L1288.4,0L1250.5,0L1250.5,0L1212.6,0L1212.6,0L1174.7,0L1174.7,0L1136.8,0L1136.8,0L1098.9,0L1098.9,0L1061.1,0L1061.1,0L1023.2,0L1023.2,0L985.3,0L985.3,0L947.4,0L947.4,0L909.5,0L909.5,0L871.6,0L871.6,0L833.7,0L833.7,0L795.8,0L795.8,0L757.9,0L757.9,0L720,0L720,0L682.1,0L682.1,0L644.2,0L644.2,0L606.3,0L606.3,0L568.4,0L568.4,0L530.5,0L530.5,0L492.6,0L492.6,0L454.7,0L454.7,0L416.8,0L416.8,0L378.9,0L378.9,0L341.1,0L341.1,0L303.2,0L303.2,0L265.3,0L265.3,0L227.4,0L227.4,0L189.5,0L189.5,0L151.6,0L151.6,0L113.7,0L113.7,0L75.8,0L75.8,0L37.9,0L37.9,0L0,0L0,0Z'
                    ></path>
                    <Text
                        verticalAnchor='start'
                        textAnchor='middle'
                        fontSize='7em'
                        fontFamily='Monospace'
                        x='70'
                        y='105'
                    >
                        Masai Student Data.
                    </Text>
                </svg>
            </div>
            <div>
                <br></br>
                {
                    <Grid container justify='center'>
                        <Pagination
                            count={Math.ceil(total / limit)}
                            color='secondary'
                            size='large'
                            onChange={(e, value) => setPage(value)}
                        />
                    </Grid>
                }
                <br></br>
            </div>
            <div>
                <Grid container spacing={4} className={classes.gridContainer}>
                    {data &&
                        data.map((student) => (
                            <Grid item xs={12} sm={6} md={3} key={student._id}>
                                {' '}
                                <StudentCards
                                    id={student._id}
                                    name={student.Name}
                                    email={student.Email}
                                    place={student.City}
                                    bloodGrp={student.BloodGrp}
                                    gender={student.Gender}
                                    image={student.ImageLink}
                                    getData={() => getData()}
                                />{' '}
                            </Grid>
                        ))}
                    <Grid item xs={12} sm={6} md={3}>
                        {' '}
                        <NewStudentCard getData={() => getData()} />{' '}
                    </Grid>
                </Grid>
            </div>
            {/* <SimpleAlerts flag={true} /> */}
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1300 250'>
                <path
                    fill='#e3f2fd'
                    fillOpacity='1'
                    d='M0,224L0,192L37.9,192L37.9,256L75.8,256L75.8,64L113.7,64L113.7,256L151.6,256L151.6,160L189.5,160L189.5,96L227.4,96L227.4,288L265.3,288L265.3,96L303.2,96L303.2,128L341.1,128L341.1,224L378.9,224L378.9,224L416.8,224L416.8,96L454.7,96L454.7,192L492.6,192L492.6,160L530.5,160L530.5,288L568.4,288L568.4,64L606.3,64L606.3,32L644.2,32L644.2,192L682.1,192L682.1,0L720,0L720,224L757.9,224L757.9,96L795.8,96L795.8,288L833.7,288L833.7,0L871.6,0L871.6,224L909.5,224L909.5,256L947.4,256L947.4,64L985.3,64L985.3,64L1023.2,64L1023.2,288L1061.1,288L1061.1,160L1098.9,160L1098.9,64L1136.8,64L1136.8,96L1174.7,96L1174.7,96L1212.6,96L1212.6,192L1250.5,192L1250.5,224L1288.4,224L1288.4,128L1326.3,128L1326.3,128L1364.2,128L1364.2,256L1402.1,256L1402.1,0L1440,0L1440,320L1402.1,320L1402.1,320L1364.2,320L1364.2,320L1326.3,320L1326.3,320L1288.4,320L1288.4,320L1250.5,320L1250.5,320L1212.6,320L1212.6,320L1174.7,320L1174.7,320L1136.8,320L1136.8,320L1098.9,320L1098.9,320L1061.1,320L1061.1,320L1023.2,320L1023.2,320L985.3,320L985.3,320L947.4,320L947.4,320L909.5,320L909.5,320L871.6,320L871.6,320L833.7,320L833.7,320L795.8,320L795.8,320L757.9,320L757.9,320L720,320L720,320L682.1,320L682.1,320L644.2,320L644.2,320L606.3,320L606.3,320L568.4,320L568.4,320L530.5,320L530.5,320L492.6,320L492.6,320L454.7,320L454.7,320L416.8,320L416.8,320L378.9,320L378.9,320L341.1,320L341.1,320L303.2,320L303.2,320L265.3,320L265.3,320L227.4,320L227.4,320L189.5,320L189.5,320L151.6,320L151.6,320L113.7,320L113.7,320L75.8,320L75.8,320L37.9,320L37.9,320L0,320L0,320Z'
                ></path>
            </svg>
        </div>
    );
}
