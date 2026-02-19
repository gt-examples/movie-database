import { T, Num, Currency, DateTime } from "gt-next";
import { LocaleSelector } from "gt-next/client";

const movies = [
  {
    title: "Blade Runner 2049",
    director: "Denis Villeneuve",
    genre: "Sci-Fi",
    year: 2017,
    rating: 8.0,
    revenue: 259239658,
    runtime: 164,
    releaseDate: "2017-10-06",
  },
  {
    title: "Parasite",
    director: "Bong Joon-ho",
    genre: "Thriller",
    year: 2019,
    rating: 8.5,
    revenue: 266890141,
    runtime: 132,
    releaseDate: "2019-05-30",
  },
  {
    title: "The Grand Budapest Hotel",
    director: "Wes Anderson",
    genre: "Comedy",
    year: 2014,
    rating: 8.1,
    revenue: 174600318,
    runtime: 99,
    releaseDate: "2014-03-28",
  },
  {
    title: "Mad Max: Fury Road",
    director: "George Miller",
    genre: "Action",
    year: 2015,
    rating: 8.1,
    revenue: 375849970,
    runtime: 120,
    releaseDate: "2015-05-15",
  },
  {
    title: "Arrival",
    director: "Denis Villeneuve",
    genre: "Sci-Fi",
    year: 2016,
    rating: 7.9,
    revenue: 203388186,
    runtime: 116,
    releaseDate: "2016-11-11",
  },
  {
    title: "The Handmaiden",
    director: "Park Chan-wook",
    genre: "Drama",
    year: 2016,
    rating: 8.1,
    revenue: 37767207,
    runtime: 145,
    releaseDate: "2016-06-01",
  },
  {
    title: "Whiplash",
    director: "Damien Chazelle",
    genre: "Drama",
    year: 2014,
    rating: 8.5,
    revenue: 49000000,
    runtime: 107,
    releaseDate: "2014-10-10",
  },
  {
    title: "Dune",
    director: "Denis Villeneuve",
    genre: "Sci-Fi",
    year: 2021,
    rating: 8.0,
    revenue: 402027578,
    runtime: 155,
    releaseDate: "2021-10-22",
  },
  {
    title: "Everything Everywhere All at Once",
    director: "Daniel Kwan, Daniel Scheinert",
    genre: "Action",
    year: 2022,
    rating: 7.8,
    revenue: 141282370,
    runtime: 139,
    releaseDate: "2022-03-25",
  },
];

const genreColors: Record<string, string> = {
  "Sci-Fi": "bg-blue-900/60 text-blue-300",
  Thriller: "bg-red-900/60 text-red-300",
  Comedy: "bg-yellow-900/60 text-yellow-300",
  Action: "bg-orange-900/60 text-orange-300",
  Drama: "bg-purple-900/60 text-purple-300",
};

function GenreBadge({ genre, className }: { genre: string; className: string }) {
  const genres: Record<string, React.ReactNode> = {
    "Sci-Fi": <T>Sci-Fi</T>,
    Thriller: <T>Thriller</T>,
    Comedy: <T>Comedy</T>,
    Action: <T>Action</T>,
    Drama: <T>Drama</T>,
  };
  return <span className={className}>{genres[genre] ?? genre}</span>;
}

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 border-b border-neutral-800 pb-6">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-semibold tracking-tight">
            <span className="text-neutral-400">General Translation</span>
            <span className="text-neutral-600 mx-2">/</span>
            <T>Movie Database</T>
          </h1>
          <a
            href="https://github.com/gt-examples/movie-database"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-neutral-300 transition-colors"
            aria-label="GitHub"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
        <LocaleSelector />
      </header>

      {/* Movie Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <article
            key={movie.title}
            className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden hover:border-neutral-700 transition-colors"
          >
            {/* Poster Placeholder */}
            <div className="aspect-[2/1] bg-neutral-800 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-neutral-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                />
              </svg>
            </div>

            <div className="p-4 space-y-3">
              {/* Title & Year */}
              <div className="flex items-start justify-between gap-2">
                <h2 className="text-base font-medium leading-tight">
                  {movie.title}
                </h2>
                <span className="text-xs text-neutral-500 shrink-0">
                  {movie.year}
                </span>
              </div>

              {/* Director */}
              <p className="text-sm text-neutral-400">{movie.director}</p>

              {/* Genre Badge */}
              <div>
                <GenreBadge
                  genre={movie.genre}
                  className={`inline-block text-xs px-2 py-0.5 rounded-full ${genreColors[movie.genre] || "bg-neutral-800 text-neutral-400"}`}
                />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-2 text-sm pt-1 border-t border-neutral-800">
                <div>
                  <span className="text-neutral-500 text-xs block">
                    <T>Rating</T>
                  </span>
                  <span className="font-medium">
                    <Num>{movie.rating}</Num>
                    <span className="text-neutral-500"> / 10</span>
                  </span>
                </div>
                <div>
                  <span className="text-neutral-500 text-xs block">
                    <T>Box Office</T>
                  </span>
                  <span className="font-medium">
                    <Currency currency="USD">{movie.revenue}</Currency>
                  </span>
                </div>
                <div>
                  <span className="text-neutral-500 text-xs block">
                    <T>Runtime</T>
                  </span>
                  <span className="font-medium">
                    <T>
                      <Num>{movie.runtime}</Num> min
                    </T>
                  </span>
                </div>
                <div>
                  <span className="text-neutral-500 text-xs block">
                    <T>Release Date</T>
                  </span>
                  <span className="font-medium">
                    <DateTime>{new Date(movie.releaseDate)}</DateTime>
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Disclaimer */}
      <footer className="mt-12 pt-6 border-t border-neutral-800 text-center text-xs text-neutral-500">
        <T>
          This is a demo application built with gt-next. Movie data is
          approximate and for illustrative purposes only. All trademarks belong
          to their respective owners.
        </T>
      </footer>
    </div>
  );
}
