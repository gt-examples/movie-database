import { T, Num, Currency, DateTime } from "gt-next";
import Link from "next/link";
import { Movie, genreColors } from "@/data/movies";
import GenreBadge from "./GenreBadge";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Link href={`/movie/${movie.id}`}>
      <article className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden hover:border-neutral-700 transition-colors group">
        {/* Poster */}
        <div className="aspect-[2/1] bg-neutral-800 overflow-hidden">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="p-4 space-y-3">
          {/* Title & Year */}
          <div className="flex items-start justify-between gap-2">
            <h2 className="text-base font-medium leading-tight">{movie.title}</h2>
            <span className="text-xs text-neutral-500 shrink-0">{movie.year}</span>
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
              <span className="text-neutral-500 text-xs block"><T>Rating</T></span>
              <span className="font-medium">
                <Num>{movie.rating}</Num>
                <span className="text-neutral-500"> / 10</span>
              </span>
            </div>
            <div>
              <span className="text-neutral-500 text-xs block"><T>Box Office</T></span>
              <span className="font-medium">
                <Currency currency="USD">{movie.revenue}</Currency>
              </span>
            </div>
            <div>
              <span className="text-neutral-500 text-xs block"><T>Runtime</T></span>
              <span className="font-medium">
                <T><Num>{movie.runtime}</Num> min</T>
              </span>
            </div>
            <div>
              <span className="text-neutral-500 text-xs block"><T>Release Date</T></span>
              <span className="font-medium">
                <DateTime>{new Date(movie.releaseDate)}</DateTime>
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
