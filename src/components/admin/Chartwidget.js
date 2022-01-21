import React, { useState } from 'react';
import '../../style/Chartwidget.css'

import {
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    makeStyles
} from "@material-ui/core";

import {
    LineChart,
    Line,
    XAxis, YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const useStyles = makeStyles(theme => ({
    formControl: {
        minWidth: 100
    }
}));

function Chartwidget() {
    const classes = useStyles();
    const [subject, setSubject] = useState("");
    const data = [
        {
            name: 'Arun',
            maths: '50',
            English: '80',

        },
        {
            name: 'Rinu',
            maths: '55',
            English: '70',

        },
        {
            name: 'Ram',
            maths: '40',
            English: '45',

        },
        {
            name: 'Dani',
            maths: '90',
            English: '70',

        },
        {
            name: 'Lila',
            maths: '70',
            English: '40',

        },
        {
            name: 'Paul',
            maths: '50',
            English: '60',

        },
        {
            name: 'Shan',
            maths: '80',
            English: '70',

        },
    ];

    const handleChange = (e) => {
        console.log("e.target.value", e.target.value);

        setSubject(e.target.value);
    }
    return <div className="widgetLg">

        <h3 className="widgetLgTitle">Latest </h3>


        <FormControl className={classes.formControl}>
            <InputLabel>X-Axis</InputLabel>
            <Select onClick={handleChange} >
                <MenuItem value="maths">maths</MenuItem>
                <MenuItem value="English">english</MenuItem>

            </Select>
        </FormControl>


        <div className="chart">


            <h3 className="chartTitle">Analytics</h3>

            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <YAxis stroke="#5550bd" />
                    <Line type="monotone" dataKey={subject} stroke="#5550bd" />
                    {/* <Line type="monotone" dataKey="English" stroke="#82ca9d" /> */}
                    <Tooltip />
                    <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
                </LineChart>
            </ResponsiveContainer>
        </div>

    </div>;
}

export default Chartwidget;
