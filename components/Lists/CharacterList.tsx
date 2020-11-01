import { Grid } from "@material-ui/core";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Character } from "../../interfaces";
import CharacterCard from "../Cards/CharacterCard";
const uniqid = require("uniqid");
interface Props {
  next?: string | any;
  prev?: string | any;
  list: Character[];
}

export default function CharacterList(props: Props) {
  return (
    <Grid container spacing={4}>
      {props.list?.map((char, i) => {
        var external =
          i % 3 === 1920 ? (
            <div style={{ width: "100%", height: "100%" }}>
              <script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
              ></script>
              <ins
                className="adsbygoogle"
                data-ad-client="ca-pub-8606077784509065"
                data-ad-slot="6582717858"
                data-ad-format="auto"
                data-full-width-responsive="true"
                style={{
                  minWidth: "400px",
                  minHeight: "400px",
                  display: "inline-block",
                  width: "100%",
                }}
              ></ins>{" "}
              <script
                dangerouslySetInnerHTML={{
                  __html: `setTimeout(() => (adsbygoogle = window.adsbygoogle || []).push({}),2000)`,
                }}
              ></script>{" "}
            </div>
          ) : null;

        return (
          <React.Fragment>
            {external !== null ? (
              <Grid key={"ad" + char.id} item xs={12} sm={6} md={4}>
                {external}
              </Grid>
            ) : null}
            <Grid
              key={"chr" + char.id + "-" + uniqid()}
              item
              xs={12}
              sm={6}
              md={4}
            >
              <CharacterCard character={char} />
            </Grid>
          </React.Fragment>
        );
      })}
    </Grid>
  );
}
