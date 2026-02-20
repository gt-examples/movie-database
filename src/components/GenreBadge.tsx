import { T } from "gt-next";

export default function GenreBadge({ genre, className }: { genre: string; className: string }) {
  const genres: Record<string, React.ReactNode> = {
    "Sci-Fi": <T>Sci-Fi</T>,
    Thriller: <T>Thriller</T>,
    Comedy: <T>Comedy</T>,
    Action: <T>Action</T>,
    Drama: <T>Drama</T>,
  };
  return <span className={className}>{genres[genre] ?? genre}</span>;
}
