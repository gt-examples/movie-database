import { T } from "gt-next";
import { tx } from "gt-next/server";
import { movies } from "@/data/movies";
import Header from "@/components/Header";
import MovieCard from "@/components/MovieCard";
import Footer from "@/components/Footer";

export default async function Home() {
  const featuredSynopsis = await tx(movies[0].synopsis);
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <Header />

      {/* Featured Movie */}
      <section className="mb-10">
        <div className="relative rounded-lg overflow-hidden">
          <img
            src={movies[0].backdrop}
            alt={movies[0].title}
            className="w-full h-48 sm:h-64 lg:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <p className="text-xs text-neutral-400 uppercase tracking-wider mb-1">
              <T>Featured</T>
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold">{movies[0].title}</h2>
            <p className="text-sm text-neutral-300 mt-2 max-w-lg">
              {featuredSynopsis}
            </p>
          </div>
        </div>
      </section>

      {/* Movie Grid */}
      <section>
        <h2 className="text-lg font-semibold mb-6">
          <T>All Movies</T>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
