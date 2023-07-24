import React, { useState } from "react";
import HeroBanner from "../components/HeroBanner";
import Loader from "../components/Loading";
import FormField from "../components/FormField";
import Card from "../components/Card";

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((post) => <Card {...post} key={post._id} />);
  }

  return <h1>{title} </h1>;
};

const Home = () => {
  const [posts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("hello");

  return (
    <section className="max-w-7xl mx-auto">
      <HeroBanner />
      <FormField />
      {loading ? (
        <Loader />
      ) : (
        <>
          {search && (
            <h1>
              Showing results for <span>{search}</span>
            </h1>
          )}
          <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 ">
            {search ? (
              <RenderCards data={[]} title="No Results Found" />
            ) : (
              <RenderCards data={[]} title="No posts found" />
            )}
          </section>
        </>
      )}
    </section>
  );
};

export default Home;
