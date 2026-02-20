import { T, Num, Currency, DateTime } from "gt-next";
import { tx } from "gt-next/server";
import Link from "next/link";
import { notFound } from "next/navigation";
import { movies, getMovieById, getMoviesByGenre, genreColors } from "@/data/movies";
import Header from "@/components/Header";
import MovieCard from "@/components/MovieCard";
import GenreBadge from "@/components/GenreBadge";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return movies.map((movie) => ({ id: movie.id }));
}

export default async function MoviePage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { id } = await params;
  const movie = getMovieById(id);

  if (!movie) {
    notFound();
  }

  const translatedSynopsis = await tx(movie.synopsis);

  const related = getMoviesByGenre(movie.genre)
    .filter((m) => m.id !== movie.id)
    .slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <Header />

      {/* Backdrop */}
      <div className="relative rounded-lg overflow-hidden mb-8">
        <img
          src={movie.backdrop}
          alt={movie.title}
          className="w-full h-48 sm:h-64 lg:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />
      </div>

      {/* Movie Info */}
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        {/* Poster */}
        <div className="w-full md:w-64 shrink-0">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Details */}
        <div className="flex-1 space-y-4">
          <div>
            <h2 className="text-3xl font-bold">{movie.title}</h2>
            <p className="text-neutral-400 mt-1">
              <T>Directed by</T> {movie.director}
            </p>
          </div>

          <GenreBadge
            genre={movie.genre}
            className={`inline-block text-sm px-3 py-1 rounded-full ${genreColors[movie.genre] || "bg-neutral-800 text-neutral-400"}`}
          />

          <p className="text-neutral-300 leading-relaxed">
            {translatedSynopsis}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-neutral-800">
            <div>
              <span className="text-neutral-500 text-xs block"><T>Rating</T></span>
              <span className="text-lg font-semibold">
                <Num>{movie.rating}</Num>
                <span className="text-neutral-500 text-sm"> / 10</span>
              </span>
            </div>
            <div>
              <span className="text-neutral-500 text-xs block"><T>Box Office</T></span>
              <span className="text-lg font-semibold">
                <Currency currency="USD">{movie.revenue}</Currency>
              </span>
            </div>
            <div>
              <span className="text-neutral-500 text-xs block"><T>Runtime</T></span>
              <span className="text-lg font-semibold">
                <T><Num>{movie.runtime}</Num> min</T>
              </span>
            </div>
            <div>
              <span className="text-neutral-500 text-xs block"><T>Release Date</T></span>
              <span className="text-lg font-semibold">
                <DateTime>{new Date(movie.releaseDate)}</DateTime>
              </span>
            </div>
          </div>

          {/* Cast */}
          <div className="pt-4 border-t border-neutral-800">
            <h3 className="text-sm font-semibold text-neutral-400 mb-3">
              <T>Cast</T>
            </h3>
            <div className="flex flex-wrap gap-2">
              {movie.cast.map((actor) => (
                <span
                  key={actor}
                  className="text-sm bg-neutral-800 text-neutral-300 px-3 py-1 rounded-full"
                >
                  {actor}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Movies */}
      {related.length > 0 && (
        <section>
          <h3 className="text-lg font-semibold mb-6">
            <T>More in this genre</T>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((m) => (
              <MovieCard key={m.id} movie={m} />
            ))}
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
