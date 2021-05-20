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
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            breaches: []
        };
    }

    componentDidMount() {
        fetch("https://raw.githubusercontent.com/sillyfatcat/veda/main/data-breach.json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        breaches: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <Timeline className="centerSmall" align="alternate">
                    {
                        Object.keys(this.state.breaches).map((index) => (
                            <BreachComponent company={this.state.breaches[index]['company']}
                                             date={this.state.breaches[index]['date_disclosed']}
                                             impact={this.state.breaches[index]['impact']}/>
                        ))
                    }
                </Timeline>
            );
        }
    }
}

export default (BasicTimeline);