import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

import Visibility from "@material-ui/icons/Visibility";
import { Character } from "../../interfaces";
import { useRouter } from "next/dist/client/router";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    avatar: {
      backgroundColor: red[500],
    },
  })
);
interface Props {
  character: Character;
}
export default function CharacterCard(props: Props) {
  const classes = useStyles();
  const router = useRouter();
  const chr = props.character;

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton
            aria-label="settings"
            onClick={(e) => {
              router.push(
                `/character/${chr.id}?details=${JSON.stringify(chr)}`,
                `/character/${chr.id}`
              );
            }}
          >
            <Visibility />
          </IconButton>
        }
        title={chr.name}
        subheader={chr.created}
      />
      <CardMedia
        style={{ height: 0, paddingTop: "56.25%" }}
        image={chr.image}
        title={`${chr.name} s image`}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="div">
          {chr.gender} <hr />
          {chr.species} <hr />
          {chr.location?.name}
        </Typography>
      </CardContent>
    </Card>
  );
}
