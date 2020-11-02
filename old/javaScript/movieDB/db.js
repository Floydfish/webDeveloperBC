const movie = [
  {
    title: "In Bruges",
    rating: 5,
    hasWatched: true
  },
  {
    title: "Frozen",
    rating: 4.5,
    hasWatched: false
  },
  {
    title: "Mad Max Fury Road",
    rating: 5,
    hasWatched: true
  },
  {
    title: "Les miserables",
    rating: 3.5,
    hasWatched: false
  },
]

const whatMovie = (array) => {
  array.forEach(element => {
    let watched;
    if (element.hasWatched) {
      watched = "seen";
    } else {
      watched = "not seen"
    }
    const result = `You have ${watched} "${element.title}" - ${element.rating} stars`
    console.log(result)
  });
}

console.log("Connected")