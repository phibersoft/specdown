import { Grid } from "@material-ui/core";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Character } from "../../interfaces";
import CharacterCard from "../Cards/CharacterCard";

interface Props {
  next?: string | any;
  prev?: string | any;
  list: Character[];
}
export default function CharacterList(props: Props) {
  return (
    <Grid container spacing={4}>
      {props.list?.map((char) => {
        return (
          <Grid key={"chr" + char.id} item xs={12} sm={6} md={4}>
            <CharacterCard character={char} />
          </Grid>
        );
      })}
    </Grid>
  );
}
