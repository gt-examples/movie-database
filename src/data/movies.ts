export interface Movie {
  id: string;
  title: string;
  director: string;
  genre: string;
  year: number;
  rating: number;
  revenue: number;
  runtime: number;
  releaseDate: string;
  poster: string;
  backdrop: string;
  synopsis: string;
  cast: string[];
}

export const movies: Movie[] = [
  {
    id: "blade-runner-2049",
    title: "Blade Runner 2049",
    director: "Denis Villeneuve",
    genre: "Sci-Fi",
    year: 2017,
    rating: 8.0,
    revenue: 259239658,
    runtime: 164,
    releaseDate: "2017-10-06",
    poster: "https://images.unsplash.com/photo-1534996858221-380b92700493?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=500&fit=crop",
    synopsis: "A young blade runner discovers a long-buried secret that leads him to track down former blade runner Rick Deckard, who has been missing for thirty years.",
    cast: ["Ryan Gosling", "Harrison Ford", "Ana de Armas", "Jared Leto"],
  },
  {
    id: "parasite",
    title: "Parasite",
    director: "Bong Joon-ho",
    genre: "Thriller",
    year: 2019,
    rating: 8.5,
    revenue: 266890141,
    runtime: 132,
    releaseDate: "2019-05-30",
    poster: "https://images.unsplash.com/photo-1555169062-013468b47731?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&h=500&fit=crop",
    synopsis: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong", "Choi Woo-shik"],
  },
  {
    id: "grand-budapest-hotel",
    title: "The Grand Budapest Hotel",
    director: "Wes Anderson",
    genre: "Comedy",
    year: 2014,
    rating: 8.1,
    revenue: 174600318,
    runtime: 99,
    releaseDate: "2014-03-28",
    poster: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=500&fit=crop",
    synopsis: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    cast: ["Ralph Fiennes", "F. Murray Abraham", "Tony Revolori", "Saoirse Ronan"],
  },
  {
    id: "mad-max-fury-road",
    title: "Mad Max: Fury Road",
    director: "George Miller",
    genre: "Action",
    year: 2015,
    rating: 8.1,
    revenue: 375849970,
    runtime: 120,
    releaseDate: "2015-05-15",
    poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=1200&h=500&fit=crop",
    synopsis: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
    cast: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult", "Hugh Keays-Byrne"],
  },
  {
    id: "arrival",
    title: "Arrival",
    director: "Denis Villeneuve",
    genre: "Sci-Fi",
    year: 2016,
    rating: 7.9,
    revenue: 203388186,
    runtime: 116,
    releaseDate: "2016-11-11",
    poster: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1200&h=500&fit=crop",
    synopsis: "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.",
    cast: ["Amy Adams", "Jeremy Renner", "Forest Whitaker", "Michael Stuhlbarg"],
  },
  {
    id: "the-handmaiden",
    title: "The Handmaiden",
    director: "Park Chan-wook",
    genre: "Drama",
    year: 2016,
    rating: 8.1,
    revenue: 37767207,
    runtime: 145,
    releaseDate: "2016-06-01",
    poster: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=500&fit=crop",
    synopsis: "A woman is hired as a handmaiden to a Japanese heiress, but secretly she is involved in a plot to defraud her.",
    cast: ["Kim Min-hee", "Kim Tae-ri", "Ha Jung-woo", "Cho Jin-woong"],
  },
  {
    id: "whiplash",
    title: "Whiplash",
    director: "Damien Chazelle",
    genre: "Drama",
    year: 2014,
    rating: 8.5,
    revenue: 49000000,
    runtime: 107,
    releaseDate: "2014-10-10",
    poster: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1200&h=500&fit=crop",
    synopsis: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
    cast: ["Miles Teller", "J.K. Simmons", "Melissa Benoist", "Paul Reiser"],
  },
  {
    id: "dune",
    title: "Dune",
    director: "Denis Villeneuve",
    genre: "Sci-Fi",
    year: 2021,
    rating: 8.0,
    revenue: 402027578,
    runtime: 155,
    releaseDate: "2021-10-22",
    poster: "https://images.unsplash.com/photo-1547234935-80c7145ec969?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1200&h=500&fit=crop",
    synopsis: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
    cast: ["Timothee Chalamet", "Rebecca Ferguson", "Oscar Isaac", "Zendaya"],
  },
  {
    id: "everything-everywhere",
    title: "Everything Everywhere All at Once",
    director: "Daniel Kwan, Daniel Scheinert",
    genre: "Action",
    year: 2022,
    rating: 7.8,
    revenue: 141282370,
    runtime: 139,
    releaseDate: "2022-03-25",
    poster: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=1200&h=500&fit=crop",
    synopsis: "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save what's important to her by connecting with the lives she could have led in other universes.",
    cast: ["Michelle Yeoh", "Stephanie Hsu", "Ke Huy Quan", "Jamie Lee Curtis"],
  },
  {
    id: "interstellar",
    title: "Interstellar",
    director: "Christopher Nolan",
    genre: "Sci-Fi",
    year: 2014,
    rating: 8.7,
    revenue: 701729206,
    runtime: 169,
    releaseDate: "2014-11-07",
    poster: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1464802686167-b939a6910659?w=1200&h=500&fit=crop",
    synopsis: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot is tasked with piloting a spacecraft along with a team of researchers to find a new planet for humans.",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine"],
  },
  {
    id: "the-lighthouse",
    title: "The Lighthouse",
    director: "Robert Eggers",
    genre: "Drama",
    year: 2019,
    rating: 7.4,
    revenue: 18091635,
    runtime: 109,
    releaseDate: "2019-10-18",
    poster: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=500&fit=crop",
    synopsis: "Two lighthouse keepers try to maintain their sanity while living on a remote and mysterious New England island in the 1890s.",
    cast: ["Robert Pattinson", "Willem Dafoe"],
  },
  {
    id: "jojo-rabbit",
    title: "Jojo Rabbit",
    director: "Taika Waititi",
    genre: "Comedy",
    year: 2019,
    rating: 7.9,
    revenue: 90272160,
    runtime: 108,
    releaseDate: "2019-10-18",
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&h=500&fit=crop",
    synopsis: "A young German boy in the Hitler Youth whose world view is turned upside down when he discovers his single mother is hiding a Jewish girl in their attic.",
    cast: ["Roman Griffin Davis", "Thomasin McKenzie", "Scarlett Johansson", "Taika Waititi"],
  },
];

export const genres = ["Sci-Fi", "Thriller", "Comedy", "Action", "Drama"] as const;

export const genreColors: Record<string, string> = {
  "Sci-Fi": "bg-blue-900/60 text-blue-300",
  Thriller: "bg-red-900/60 text-red-300",
  Comedy: "bg-yellow-900/60 text-yellow-300",
  Action: "bg-orange-900/60 text-orange-300",
  Drama: "bg-purple-900/60 text-purple-300",
};

export function getMovieById(id: string): Movie | undefined {
  return movies.find((m) => m.id === id);
}

export function getMoviesByGenre(genre: string): Movie[] {
  return movies.filter((m) => m.genre === genre);
}
