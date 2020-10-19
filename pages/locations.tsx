import Axios from "axios";
import Link from "next/link";
import Layout from "../components/Layout";
import CharacterList from "../components/Lists/CharacterList";
import { RequestCharacters } from "../interfaces";
interface Props {
  data: RequestCharacters;
}
const IndexPage = (props: Props) => (
  <Layout
    title="Rick And Morty ❤"
    active="/locations"
    description="Rick and morty characters.."
    tags={["Rick", "And", "Morty", "Characters"]}
  >
    <CharacterList
      list={props.data.results}
      next={props.data.info.next}
      prev={props.data.info.prev}
    />
  </Layout>
);
export async function getServerSideProps(ctx: any) {
  var first_results = await Axios.get(process.env.endpoint + "/character");
  var data = first_results.data.results;
  var i = 0;
  while (true && i < 13) {
    i++;
    if (first_results.data.info.next) {
      const current_results = await Axios.get(first_results.data.info.next);
      data.push(...current_results.data.results);
    } else {
      break;
    }
  }
  return {
    props: {
      data: {
        info: {
          next: null,
          prev: null,
        },
        results: data,
      },
    },
  };
}
export default IndexPage;
