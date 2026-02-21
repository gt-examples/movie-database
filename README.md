# Movie Database

A multilingual movie catalog showcasing locale-formatted ratings, revenue, release dates, and translated genres with gt-next.

**[Live Demo](https://movie-database.generaltranslation.dev)** | **[General Translation Docs](https://generaltranslation.com/docs)**

## About

Movie Database is a Next.js 15 example app that demonstrates how to build a fully internationalized movie browsing experience. It features translated UI labels, genre names, and synopses across multiple languages, with locale-aware formatting for currencies, numbers, and dates.

## GT Features Used

- `<T>` — JSX translation for UI text and genre badges
- `<Currency>` — Locale-aware currency formatting for box office revenue
- `<Num>` — Number formatting for ratings and runtime
- `<DateTime>` — Date formatting for release dates
- `<Plural>` — Pluralization for genre film counts
- `<LocaleSelector>` — Language picker
- `tx` — Server-side runtime translation for movie synopses
- `getGT` — String translations for metadata
- `loadTranslations` — Local translation storage

## Getting Started

```bash
git clone https://github.com/gt-examples/movie-database.git
cd movie-database
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Built With

- [Next.js](https://nextjs.org)
- [General Translation](https://generaltranslation.com) (gt-next)
- [Tailwind CSS](https://tailwindcss.com)
