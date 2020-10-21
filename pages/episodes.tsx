import Axios from "axios";
import Link from "next/link";
import Layout from "../components/Layout";
import EpisodeList from "../components/Lists/EpisodeList";
import { RequestCharacters } from "../interfaces";

const IndexPage = (props) => (
  <Layout
    title="Rick And Morty ❤ Episodes"
    active="/episodes"
    description="Rick and morty episodes.."
    tags={["Rick", "And", "Morty", "Episodes"]}
  >
    <EpisodeList list={props.data.results} />
  </Layout>
);
export async function getServerSideProps(ctx: any) {
  var first_results = await Axios.get(process.env.endpoint + "/episode");
  var data = first_results.data.results;
  var i = 0;
  while (true && i < 6) {
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
