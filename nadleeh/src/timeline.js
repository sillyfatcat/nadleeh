import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {withStyles} from "@material-ui/core/styles";


const breaches = [
    {
        'company': 'Adobe',
        'date_disclosed': 'October 2013',
        'date_breached': 'October 2013',
        'date_discovered': 'October 2013',
        'date_resolved': 'October 2013',
        'impact': '153 million user records',
        'articles': ['https://www.csoonline.com/article/2130877/the-biggest-data-breaches-of-the-21st-century.html']
    },
    {
        'company': 'Adult Finder',
        'date_disclosed': 'October 2016',
        'date_breached': 'October 2016',
        'date_discovered': 'October 2016',
        'date_resolved': 'October 2016',
        'impact': '412.2 million accounts',
        'articles': ['https://www.csoonline.com/article/2130877/the-biggest-data-breaches-of-the-21st-century.html']
    },
]


class BreachComponent extends React.Component {
    constructor(props) {
        super(props);
        this.company = props.company;
    }

    render() {
        const {classes} = this.props;
        return (
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" className="glow">
                        {this.props.date}
                        <br/>
                        {this.props.company}
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot>
                        <FastfoodIcon/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className="paper">
                        <Typography variant="h6" component="h1">
                            {this.props.impact}
                        </Typography>
                        <Typography>Placeholder stuff here</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
        );
    }
}


class BasicTimeline extends React.Component {
    state = {
        searchNodes: ""
    };

    render() {
        return (
            <Timeline className="centerSmall" align="alternate">
                {
                    Object.keys(breaches).map((index) => (
                        <BreachComponent company={breaches[index]['company']} date={breaches[index]['date_disclosed']}
                        impact={breaches[index]['impact']}/>
                    ))
                }
            </Timeline>
        );
    }
}

export default (BasicTimeline);