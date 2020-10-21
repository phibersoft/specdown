import { ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import { Location } from "../../interfaces";

interface Props {
  location: Location;
}
export default function LocationItem(props: Props) {
  return (
    <ListItem>
      <ListItemText
        primary={props.location.name}
        secondary={props.location.created}
      />
    </ListItem>
  );
}
