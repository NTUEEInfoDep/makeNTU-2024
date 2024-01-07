import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { Avatar, Box, Grid, Typography } from "@material-ui/core";

import TimelineIcon from "components/timelineIcon";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#0081A8" },
    secondary: { main: "#CC0049" },
  },
});

const useStyles = makeStyles((theme) => ({
  primary: { backgroundColor: "#0081A8" },
  secondary: { backgroundColor: "#CC0049" },
}));

export default ({ contentModuleId }) => {
  const sQData = useStaticQuery(graphql`
    {
      allContentfulTimelineData {
        edges {
          node {
            heading
            data {
              date
              events {
                color
                icon
                text
                time
              }
            }
          }
        }
      }
    }
  `);

  const timelineData = sQData.allContentfulTimelineData.edges[0].node;

  const classes = useStyles();

  const TimelineEventLeft = (props) => {
    return (
      <Typography color={props.color || "primary"}>
        <Box textAlign="right" overflow="visable" whiteSpace="nowrap">
          {props.children}
        </Box>
      </Typography>
    );
  };

  const TimelineEventCenter = (props) => {
    return (
      <Avatar
        className={
          props.color === "secondary" ? classes.secondary : classes.primary
        }
      >
        {props.children}
      </Avatar>
    );
  };

  const TimelineEventRight = (props) => {
    return (
      <Typography color={props.color || "primary"}>
        <Box textAlign="left" overflow="visable" whiteSpace="nowrap">
          {props.children}
        </Box>
      </Typography>
    );
  };

  const TimelineEventConnector = (props) => {
    return (
      <Typography color="primary">
        <Box my={-1.2} textAlign="center">
          {props.end ? "" : "|"}
        </Box>
      </Typography>
    );
  };

  const TimelineEvent = (props) => {
    if (props.center === "|") {
      return (
        <div>
          <Typography color="primary">
            <Box my={-1.2} textAlign="center" lineHeight={0.8}>
              |<br />|<br />|<br />|<br />|
            </Box>
          </Typography>
        </div>
      );
    } else {
      return (
        <div>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            wrap="nowrap"
            spacing={1}
          >
            <Grid item xs={4}>
              <TimelineEventLeft color={props.color}>
                {props.left}
              </TimelineEventLeft>
            </Grid>
            <Grid item>
              <TimelineEventCenter color={props.color}>
                <TimelineIcon type={props.center} />
              </TimelineEventCenter>
            </Grid>
            <Grid item xs={4}>
              <TimelineEventRight color={props.color}>
                {props.right}
              </TimelineEventRight>
            </Grid>
          </Grid>
          <TimelineEventConnector end={props.end} />
        </div>
      );
    }
  };

  const TimelineEvents = (props) => {
    if (props.eventData.length) {
      return (
        <div>
          {props.eventData.map((event) => {
            return (
              <TimelineEvent
                color={event.color}
                end={props.eventData[props.eventData.length - 1] === event}
                center={event.icon}
                left={event.time}
                right={event.text}
              />
            );
          })}
        </div>
      );
    }
    return <div>error</div>;
  };

  const TimelineCard = (props) => {
    return (
      <Typography variant="h5" color="primary">
        <Box mb={3} textAlign="center">
          {props.title}
        </Box>
        <TimelineEvents eventData={props.events} />
      </Typography>
    );
  };

  return (
    <section id="timeline" className="section pt-8">
      <div className="container mx-auto">
        <h2 className="text-center section__title mb-16">
          {timelineData.heading}
        </h2>
        <div className={classes.root}>
          <ThemeProvider theme={theme}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="flex-start"
              spacing={9}
            >
              {timelineData.data.length ? (
                timelineData.data.map((day) => {
                  return (
                    <Grid item>
                      <TimelineCard
                        title={day.date || ""}
                        events={day.events}
                      />
                    </Grid>
                  );
                })
              ) : (
                <Grid item>error</Grid>
              )}
            </Grid>
          </ThemeProvider>
        </div>
      </div>
    </section>
  );
};
