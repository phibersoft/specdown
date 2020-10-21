import { ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import { Episode, Location } from "../../interfaces";

interface Props {
  episode: Episode;
}
export default function EpisodeItem(props: Props) {
  return (
    <ListItem>
      <ListItemText
        primary={props.episode.name}
        secondary={props.episode.air_date}
      />
    </ListItem>
  );
}
