let playing = true;
function playPause() {
  if (playing) {
    const song = document.querySelector('#song'),
    thumbnail = document.querySelector('#thumbnail');
      thumbnail.src = "files_svg/radio_on.svg";
      button.play()
  setTimeout(function(){song.play();}, 500);  
    playing = false;
  } else {thumbnail.src = "files_svg/radio_off.svg";
    button.play();
    song.pause();
    playing = true;
  }
}