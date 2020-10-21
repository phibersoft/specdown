import Axios from "axios";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import CharacterCard from "../../components/Cards/CharacterCard";
import Layout from "../../components/Layout";
import { Character } from "../../interfaces";

export default function CharacterPage(props) {
  const router = useRouter();
  var { id } = router.query;
  const [chr, setChr] = useState<Character>({});
  useEffect(() => {
    if (router.query.details) {
      setChr(JSON.parse(router.query.details as string));
    } else {
      Axios.get(`${process.env.endpoint}/character/${id}`).then((res) => {
        setChr(res.data);
      });
    }
  }, []);

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
