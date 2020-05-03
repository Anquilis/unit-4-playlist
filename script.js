//let songNames = [];
//let thumbnails = [];
//let artists = [];
//let songLengths = [];
//let links = [];
let songCount = 0;

let newSong = [];

let song = {
  songNames: [],
  thumbnails: [],
  artists: [],
  songLengths: [],
  links: []
}

$("#addSong").click(function(){
  songCount = songCount + 1;
  $("#count").text(songCount);

  let songName = $("#songName").val();
  let thumbnail = $("#thumbnail").val();
  let artist = $("#artist").val();
  let songLength = $("#songLength").val();
  let link = $("#link").val();

  push(song.songNames,songName);
  push(song.thumbnails,thumbnail);
  push(song.artists,artist);
  push(song.songLengths,songLength);
  push(song.links,link);

  $(".songNames, .thumbnails, .artists, .songLengths, .songLinks").empty();

  push(newSong,song);
  newSong.forEach(function(song){
    $(".songNames").append("<p>"+songName+"</p>");
    $(".thumbnails").append("<li><img src='"+thumbnail+"'></li>");
    $(".artists").append("<p>"+artist+"</p>");
    $(".songLengths").append("<p>"+songLength+"</p>");
    $(".songLinks").append("<p><a target='blank' href='"+link+"'>Play</a></p>");
  });
});

function push (arr, item){
  arr.push(item);
}



