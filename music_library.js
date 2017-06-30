
class Track {
  constructor(title, rating, length) {
    this.title = title;
    this.rating = rating; //integer from 1 to 5
    this.length = length; //integer in seconds

    if (typeof(rating) != "number" || rating > 5 || rating < 1) { throw Error("rating must be an integer from 1 to 5") }
    if (typeof(length) != "number") { throw Error("length must be an integer") }
  }

  getTrack () {
    return `Title: ${this.title}, Rating: ${this.rating}, Length: ${this.length} seconds`;
  }
}

class Playlist {
  constructor (name) {
    this.name = name;
    this.tracks = [];
  }

  overallRating () {
    //calculate the rating by averaging the ratings of its tracks
    let overall = 0;
    let totalOfTracks = this.tracks.length;
    let avg = 0;

    if (totalOfTracks > 0) {
      for (let track of this.tracks) {
        overall += Number(track.rating);
      }
      avg = Math.floor(overall / totalOfTracks);
    }

    return avg;

  }

  totalDuration () {
    //sum the duration of all its tracks
    let sum = 0;

    if (this.tracks.length > 0) {
      for (let track of this.tracks) {
        sum += Number(track.length);
      }
    }

    return sum;
  }

  addTracks (track) {
    this.tracks.push(track);
  }

  getPlaylist () {
    return `Name: ${this.name}, Tracks: ${this.tracks}`;
  }
}

class Library {
  constructor (name, creator) {
    this.name = name; // string
    this.creator =  creator; // string
    this.playlist = [];
  }

  addPlaylist (playlist) {
    this.playlist.push(playlist);
  }

  getLibrary () {
    return `Name: ${this.name}, Creator: ${this.creator}, Playlist: ${this.playlist}`;
  }
}

let track1 = new Track("title 1", 1, 120);
console.log(track1.getTrack());

let track2 = new Track("title 2", 3, 180);
console.log(track2.getTrack());

let track3 = new Track("title 3", 5, 240);
console.log(track3.getTrack());

let track4 = new Track("title 4", 4, 130);
console.log(track4.getTrack());

let track5 = new Track("title 5", 4, 100);
console.log(track5.getTrack());


let playlist1 = new Playlist("my first playlist");
playlist1.addTracks(track1);
playlist1.addTracks(track2);
console.log(playlist1.getPlaylist());
console.log("overall rating: ", playlist1.overallRating());
console.log("total duration: ", playlist1.totalDuration());

let playlist2 = new Playlist("my second playlist");
playlist2.addTracks(track3);
playlist2.addTracks(track4);
playlist2.addTracks(track5);
console.log(playlist2.getPlaylist());
console.log("overall rating: ", playlist2.overallRating());
console.log("total duration: ", playlist2.totalDuration());

let library = new Library ("my library", "Tahuana")
console.log(library.getLibrary());

library.addPlaylist(playlist1);
library.addPlaylist(playlist2);
console.log(library.getLibrary());