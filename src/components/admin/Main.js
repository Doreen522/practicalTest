import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chartwidget from './Chartwidget';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Summarywidget from './Summarywidget';

function Main() {
    const [widgetList, setWidgetList] = useState([])
    const [summaryList, setSummaryList] = useState([])
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);




    const addChartWidgets = (e) => {
        setWidgetList(widgetList.concat(<Chartwidget key={widgetList.length} />))
    }

    const addSummaryWidgets = (e) => {
        setSummaryList(summaryList.concat(<Summarywidget key={summaryList.length} />))
    }

    return <div>
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                    {/* Chart */}
                    <Grid item xs={12} md={8} lg={9}>
                        <Paper  >
                            <Chartwidget />
                            {widgetList}
                        </Paper>
                    </Grid>
                    
                    <Grid item xs={12} md={4} lg={3}>
                        <Paper className={fixedHeightPaper}>
                            <ListItem button
                                onClick={addChartWidgets}
                            >
                                <ListItemIcon>
                                    <AddCircleIcon />
                                </ListItemIcon>
                                <ListItemText primary="Add Chart Widgets" />
                            </ListItem>
                            <ListItem button
                                onClick={addSummaryWidgets}
                            >
                                <ListItemIcon>
                                    <AddCircleIcon />
                                </ListItemIcon>
                                <ListItemText primary="Add Summary Widgets" />
                            </ListItem>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={8} lg={9}>
                        <Paper className={classes.paper}>
                            <Summarywidget />
                            {summaryList}
                        </Paper>
                    </Grid>

                </Grid>

            </Container>
        </main>
    </div>;
}



const useStyles = makeStyles((theme) => ({
   
   
    
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 200,
    },

}));

export default Main;

