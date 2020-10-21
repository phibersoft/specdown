import { Grid, List } from "@material-ui/core";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Location } from "../../interfaces";
import LocationItem from "../Cards/LocationItem";
const uniqid = require("uniqid");
interface Props {
  list: Location[];
}
export default function LocationList(props: Props) {
  return (
    <List style={{ width: "100%" }}>
      {props.list.map((li) => {
        return <LocationItem location={li} key={`loc-${li.id}-${uniqid()}`} />;
      })}
    </List>
  );
}
