import { T } from "gt-next";

export default function Footer() {
  return (
    <footer className="mt-12 pt-6 border-t border-neutral-800 text-center text-xs text-neutral-500">
      <T>
        This is a demo application built with gt-next. Movie data is
        approximate and for illustrative purposes only. All trademarks belong
        to their respective owners.
      </T>
    </footer>
  );
}
