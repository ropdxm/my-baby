export type SongProps = {
  title: string;
  artist: string;
  image: string;
  link: string;
};

export const songs = [
  {
    title: "Arc de Triomphe",
    artist: "Erich Maria Remarque",
    image: require(".//../../public/songs/triumphe.jpg"),
    link: "https://www.amazon.de/Arc-Triomphe-Roman-M-Remarque/dp/3462027239",
  },
  {
    title: "The Stranger",
    artist: "Albert Camus",
    image: require(".//../../public/songs/fremde.jpg"),
    link: "https://www.amazon.de/Stranger-Vintage-International-Albert-Camus/dp/0679720200",
  },
  {
    title: "The Idiot",
    artist: "Fyodor Dostoevsky",
    image: require(".//../../public/songs/idiot.jpg"),
    link: "https://www.amazon.de/Idiot-Penguin-Classics-Fyodor-Dostoyevsky/dp/014044792X",
  },
  {
    title: "Three Comrades",
    artist: "Erich Maria Remarque",
    image: require(".//../../public/songs/comrades.jpg"),
    link: "https://www.amazon.com/Three-Comrades-Erich-Maria-Remarque/dp/0449912426",
  },
  {
    title: "The Art of Loving",
    artist: "Erich Fromm",
    image: require(".//../../public/songs/loving.jpg"),
    link: "https://www.amazon.de/Art-Loving-P-S-Erich-Fromm/dp/0061129739",
  },
  {
    title: "Harry Potter (All parts)",
    artist: "Joanne K. Rowling",
    image: require(".//../../public/songs/hp.jpg"),
    link: "https://www.amazon.com/Harry-Potter-Paperback-Box-Books/dp/0545162076",
  },
  {
    title: "1984 (Nineteen Eighty-Four)",
    artist: "George Orwell",
    image: require(".//../../public/songs/ninety.avif"),
    link: "https://www.amazon.de/1984-George-Orwell/dp/3548234100",
  },
  {
    title: "The Brothers Karamazov",
    artist: "Fyodor Dostoevsky",
    image: require(".//../../public/songs/karamazov.jpg"),
    link: "https://www.amazon.com/Brothers-Karamazov-Fyodor-Dostoevsky/dp/0374528373",
  },
  {
    title: "And Then There Were None",
    artist: "Agatha Christie",
    image: require(".//../../public/songs/agatha.avif"),
    link: "https://www.amazon.de/Then-There-Were-None/dp/0062073486",
  },
  {
    title: "The Trial",
    artist: "Franz Kafka",
    image: require(".//../../public/songs/trial.jpg"),
    link: "https://www.amazon.de/Prozess-Gro%C3%9Fe-Klassiker-kleinen-Preis/dp/3938484772",
  },
];
