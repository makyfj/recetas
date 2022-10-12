import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import type { inferProcedureOutput } from "@trpc/server";
import type { AppRouter } from "@acme/api";

const Home: NextPage = () => {
  const postQuery = trpc.post.all.useQuery();

  return (
    <>
      <Head>
        <title>Recetas</title>
        <meta name="description" content="Improve your cooking skills with Recetas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container flex flex-col items-center justify-center min-h-screen p-4 mx-auto">
        <h1 className="font-bold text-4xl">Recetas</h1>
      </main>
    </>
  );
};

export default Home;
