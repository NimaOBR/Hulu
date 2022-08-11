//head
import Head from "next/head";

// Components
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import Results from "../Components/Results";
import request from "../hooks/request";

export default function Home({results}) {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <meta name="description" content="Hulu by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header />
      {/* Navbar */}
      <Nav />
      {/* Resualt */}
      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const requst = await fetch(
    `https://api.themoviedb.org/3${request[genre]?.url || request.fetchTrending.url}`
  ).then((res) => res.json());
  return {
    props: {
      results: requst.results
    },
  };
}
