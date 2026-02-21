import { T, Num, Currency } from "gt-next";
import { tx } from "gt-next/server";
import Link from "next/link";
import { movies, genreColors } from "@/data/movies";
import Header from "@/components/Header";
import GenreBadge from "@/components/GenreBadge";
import Footer from "@/components/Footer";
import Disclaimer from "@/components/Disclaimer";

// Static curated watchlist for demo purposes
const watchlistIds = [
  "blade-runner-2049",
  "parasite",
  "interstellar",
  "whiplash",
  "dune",
];

const watchlistMovies = movies.filter((m) => watchlistIds.includes(m.id));

export default async function WatchlistPage() {
  const translatedSynopses = await Promise.all(
    watchlistMovies.map((movie) => tx(movie.synopsis))
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <Header />
      <Disclaimer />

      <div className="mb-8">
        <h2 className="text-2xl font-bold">
          <T>Watchlist</T>
        </h2>
        <p className="text-sm text-neutral-400 mt-1">
          <T>A curated selection of must-watch films</T>
        </p>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
          <span className="text-xs text-neutral-500 block"><T>Films</T></span>
          <span className="text-2xl font-bold"><Num>{watchlistMovies.length}</Num></span>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
          <span className="text-xs text-neutral-500 block"><T>Total Runtime</T></span>
          <span className="text-2xl font-bold">
            <T><Num>{watchlistMovies.reduce((sum, m) => sum + m.runtime, 0)}</Num> min</T>
          </span>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
          <span className="text-xs text-neutral-500 block"><T>Avg. Rating</T></span>
          <span className="text-2xl font-bold">
            <Num options={{ maximumFractionDigits: 1 }}>
              {watchlistMovies.reduce((sum, m) => sum + m.rating, 0) / watchlistMovies.length}
            </Num>
          </span>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
          <span className="text-xs text-neutral-500 block"><T>Combined Box Office</T></span>
          <span className="text-lg font-bold">
            <Currency currency="USD">
              {watchlistMovies.reduce((sum, m) => sum + m.revenue, 0)}
            </Currency>
          </span>
        </div>
      </div>

      {/* Watchlist Items */}
      <div className="space-y-4">
        {watchlistMovies.map((movie, i) => (
          <Link
            key={movie.id}
            href={`/movie/${movie.id}`}
            className="flex gap-4 bg-neutral-900 border border-neutral-800 rounded-lg p-4 hover:border-neutral-700 transition-colors group"
          >
            <span className="text-2xl font-bold text-neutral-700 w-8 shrink-0 flex items-center">
              {i + 1}
            </span>
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-20 h-28 object-cover rounded shrink-0"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-base font-medium">{movie.title}</h3>
                <span className="text-xs text-neutral-500 shrink-0">{movie.year}</span>
              </div>
              <p className="text-sm text-neutral-400 mt-0.5">{movie.director}</p>
              <div className="flex items-center gap-3 mt-2">
                <GenreBadge
                  genre={movie.genre}
                  className={`text-xs px-2 py-0.5 rounded-full ${genreColors[movie.genre]}`}
                />
                <span className="text-xs text-neutral-500">
                  <Num>{movie.rating}</Num> / 10
                </span>
                <span className="text-xs text-neutral-500">
                  <T><Num>{movie.runtime}</Num> min</T>
                </span>
              </div>
              <p className="text-sm text-neutral-400 mt-2 line-clamp-2">
                {translatedSynopses[i]}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
}
