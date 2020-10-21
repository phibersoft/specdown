import { Grid, List } from "@material-ui/core";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Episode, Location } from "../../interfaces";
import EpisodeItem from "../Cards/EpisodeItem";
const uniqid = require("uniqid");
interface Props {
  list: Episode[];
}
export default function EpisodeList(props: Props) {
  return (
    <List style={{ width: "100%" }}>
      {props.list.map((li) => {
        return <EpisodeItem episode={li} key={`epi-${li.id}-${uniqid()}`} />;
      })}
    </List>
  );
}
