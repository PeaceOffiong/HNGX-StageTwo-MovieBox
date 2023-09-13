"use client";
import { useGlobalContext } from "./context/useGlobalContext";
import NavSection from "./components/NavSection";
import { useEffect, useState } from "react";

export default function Home() {
  const { topRated } = useGlobalContext();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (topRated.length > 0) {
      setLoading(false);
    }
  }, [topRated.length]);

  if (loading) {
    return <h2>Loading</h2>;
  }
  return (
    <main>
      <section
        className={`h-screen`}
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/w500/${topRated[0].poster_path}")`,
        }}
      >
        <NavSection />
      </section>
    </main>
  );
}
