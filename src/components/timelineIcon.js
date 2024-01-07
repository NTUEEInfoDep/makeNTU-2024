import React from "react";

import Brightness2Icon from "@material-ui/icons/Brightness2";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import BuildIcon from "@material-ui/icons/Build";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import PeopleIcon from "@material-ui/icons/People";
import PollIcon from "@material-ui/icons/Poll";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import WcIcon from "@material-ui/icons/Wc";

export default function TimelineIcon(props) {
  if (props.type === "Brightness2Icon") {
    return <Brightness2Icon />;
  } else if (props.type === "Brightness7Icon") {
    return <Brightness7Icon />;
  } else if (props.type === "BuildIcon") {
    return <BuildIcon />;
  } else if (props.type === "EmojiEventsIcon") {
    return <EmojiEventsIcon />;
  } else if (props.type === "EqualizerIcon") {
    return <EqualizerIcon />;
  } else if (props.type === "HowToRegIcon") {
    return <HowToRegIcon />;
  } else if (props.type === "PeopleIcon") {
    return <PeopleIcon />;
  } else if (props.type === "PollIcon") {
    return <PollIcon />;
  } else if (props.type === "RestaurantIcon") {
    return <RestaurantIcon />;
  } else if (props.type === "WcIcon") {
    return <WcIcon />;
  } else {
    return <div>&ensp;</div>;
  }
}
