import Axios from "axios";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import CharacterCard from "../../components/Cards/CharacterCard";
import Layout from "../../components/Layout";
import { Character } from "../../interfaces";

export default function CharacterPage(props) {
  const { character: chr } = props;
  return (
    <Layout
      title={chr.name}
      description={`Rick And Morty : ${chr.name}`}
      tags={[chr.name as string, "Rick", "Morty"]}
    >
      <CharacterCard character={chr} />
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  const { query } = ctx;
  if (query.details) {
    return {
      props: {
        character: JSON.parse(query.details),
      },
    };
  }
  var axiosResults = await Axios.get(
    process.env.endpoint + "/character/" + query.id
  );
  console.log(axiosResults.data);
  return {
    props: {
      character: axiosResults.data,
    },
  };
}
