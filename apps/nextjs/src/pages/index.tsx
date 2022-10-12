import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import type { inferProcedureOutput } from "@trpc/server";
import type { AppRouter } from "@acme/api";

const Home: NextPage = () => {
  const postQuery = trpc.post.all.useQuery();

  const recipes = [
    {
      image:
        "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      title: "Sample Food",
      ingredients: ["Salt", "Pepper", "Rice", "Beans", "Chicken"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      title: "Sample Food",
      ingredients: ["Salt", "Pepper", "Rice", "Beans", "Chicken"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      title: "Sample Food",
      ingredients: ["Salt", "Pepper", "Rice", "Beans", "Chicken"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      title: "Sample Food",
      ingredients: ["Salt", "Pepper", "Rice", "Beans", "Chicken"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      title: "Sample Food",
      ingredients: ["Salt", "Pepper", "Rice", "Beans", "Chicken"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      title: "Sample Food",
      ingredients: ["Salt", "Pepper", "Rice", "Beans", "Chicken"],
    },
  ];

  return (
    <>
      <Head>
        <title>Recetas</title>
        <meta
          name="description"
          content="Improve your cooking skills with Recetas"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container p-4 mx-auto flex flex-col gap-4">
        <h1 className="font-bold text-4xl self-center">Recetas</h1>
        <h3 className="self-center font-semibold">
          Sign in to create your own recipes
        </h3>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search recipe!"
            className="p-2 border-2 border-amber-400 rounded"
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {recipes.map((recipe, i) => (
            <div
              key={i}
              className="p-4 grid grid-cols-2 items-center bg-stone-600 rounded text-stone-200"
            >
              <div>
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-28 h-28 rounded"
                />
                <h3>{recipe.title}</h3>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Ingredients</h3>
                {recipe.ingredients.map((ingredient, j) => (
                  <div key={j}>
                    <p>{ingredient}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
