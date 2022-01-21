import React, { useState } from 'react';

import { Card, CardContent, Typography } from '@material-ui/core';
import {
    Select,
    MenuItem,
    FormControl,
    InputLabel
} from "@material-ui/core";





function Summarywidget() {
    const [title, setTitle] = useState("")


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

        setTitle(e.target.value);
    }

    return <div className="widgetLg">
        <Typography>Summary</Typography>

        <FormControl >
            <InputLabel>Title</InputLabel>
            <Select onClick={handleChange} >

                <MenuItem value="Name">Name</MenuItem>
                <MenuItem value="Maths">Maths</MenuItem>
                <MenuItem value="English">English</MenuItem>

            </Select>
        </FormControl>

        <React.Fragment>

            <Card>

                <CardContent>
                    {title == "Name" ? <>
                        {data.map((menu) => <>
                            <Typography>
                                {menu.name}
                            </Typography>
                        </>
                        )}
                    </>
                        : ""}
                    {title == "Maths" ? <>
                        {data.map((menu) => <>
                            <Typography>
                                {menu.maths}
                            </Typography>
                        </>
                        )}
                    </>
                        : ""}
                    {title == "English" ? <>
                        {data.map((menu) => <>
                            <Typography>
                                {menu.English}
                            </Typography>
                        </>
                        )}
                    </>
                        : ""}
                </CardContent>
            </Card>

        </React.Fragment>



    </div>;
}

export default Summarywidget;



