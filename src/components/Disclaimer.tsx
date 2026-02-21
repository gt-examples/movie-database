import { T } from "gt-next";

export default function Disclaimer() {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 mb-8 text-sm text-neutral-400">
      <T>
        This is a demo application built with{" "}
        <a
          href="https://generaltranslation.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-200 underline hover:text-white"
        >
          General Translation
        </a>{" "}
        to showcase multilingual support with gt-next. View the source on{" "}
        <a
          href="https://github.com/gt-examples/movie-database"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-200 underline hover:text-white"
        >
          GitHub
        </a>
        .
      </T>
    </div>
  );
}
