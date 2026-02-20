import { T } from "gt-next";
import Link from "next/link";
import { genres, genreColors, getMoviesByGenre } from "@/data/movies";
import Header from "@/components/Header";
import GenreBadge from "@/components/GenreBadge";
import Footer from "@/components/Footer";

export default function GenresPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <Header />

      <h2 className="text-2xl font-bold mb-8">
        <T>Browse by Genre</T>
      </h2>

      <div className="space-y-10">
        {genres.map((genre) => {
          const genreMovies = getMoviesByGenre(genre);
          return (
            <section key={genre}>
              <div className="flex items-center gap-3 mb-4">
                <GenreBadge
                  genre={genre}
                  className={`text-sm px-3 py-1 rounded-full font-medium ${genreColors[genre]}`}
                />
                <span className="text-sm text-neutral-500">
                  {genreMovies.length} {genreMovies.length === 1 ? "" : ""}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {genreMovies.map((movie) => (
                  <Link
                    key={movie.id}
                    href={`/movie/${movie.id}`}
                    className="group flex gap-3 bg-neutral-900 border border-neutral-800 rounded-lg p-3 hover:border-neutral-700 transition-colors"
                  >
                    <img
                      src={movie.poster}
                      alt={movie.title}
                      className="w-16 h-24 object-cover rounded shrink-0"
                    />
                    <div className="min-w-0">
                      <h3 className="text-sm font-medium truncate">{movie.title}</h3>
                      <p className="text-xs text-neutral-500 mt-0.5">{movie.director}</p>
                      <p className="text-xs text-neutral-400 mt-1">{movie.year}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <Footer />
    </div>
  );
}
