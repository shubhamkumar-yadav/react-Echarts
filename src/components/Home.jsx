import React from 'react';
import ReactECharts from 'echarts-for-react';
import { AppBar, Box, Grid, makeStyles, Toolbar } from '@material-ui/core';
//this is the css i have used for designinng of this page
const useStyle = makeStyles({
    container: {
        height: 70,
        background: "white",
        boxShadow: "none"
    },
    subContainer: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    content: {
        background: "white",
        
        height: "100vh",
        borderRadius: 15,
        display: "flex",
        alignItems: "center",
        padding:10,
        margin:10,
        width:"95%"

    },
});
const Home = () => {
    const classes = useStyle();
    // this is data to be visualized on bar graph
    const option = {
        xAxis: {
            type: 'category',
            data: ['RedLabel', 'BlueLabel', 'BlackLabel', 'BlackDog', 'MagicMoments']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar'
            }
        ]
    };
    //this is the data for scatter plot

    const optionScatter = {
        xAxis: {},
        yAxis: {},
        series: [{
            symbolSize: 16,
            data: [
                [10.0, 8.04],
                [8.0, 6.95],
                [13.0, 7.58],
                [9.0, 8.81],
                [11.0, 8.33],
                [14.0, 9.96],
                [6.0, 7.24],
                [4.0, 4.26],
                [12.0, 10.84],
                [7.0, 4.82],
                [5.0, 5.68]
            ],
            color: [
                0.11,
                0.53,
                0.76,
                0.01,
                0.53,
                0.19,
                0.64,
                0.65,
                0.34,
                0.23,
                0.81
            ],
            type: 'scatter'
        }]
    };
    return (<>
        <Grid container>
            <Grid item xs={12}>
                <AppBar position="static" className={classes.container}>
                    <Toolbar>
                        <Box className={classes.subContainer}>
                            <h1 style={{ textAlign: "center" }}>React and ECharts</h1>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Grid>
            <Grid item xs={12} className={classes.content}>
                <Grid container>
                    <Grid item sm={12} xs={12} md={6} className={classes.leftContent}>
                        <h2 style={{ textAlign: "center", fontSize: 18 }}>Wine vs Malic Acid</h2>
                        <ReactECharts option={option} />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6}>
                        <h2 style={{ textAlign: "center", fontSize: 18 }}>Color Intensity vs Hue</h2>
                        <ReactECharts option={optionScatter} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </>)
};
export { Home };