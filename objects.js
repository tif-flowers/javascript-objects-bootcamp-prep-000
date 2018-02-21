var playlist = {artist:"song"};

function updatePlaylist(playlist, song, artistName) {
  playlist[song] = artistName;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  return delete playlist.artistName;
  
}