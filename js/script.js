let trackList = [];
let currentTrackIndex = 0;
const audioPlayer = document.getElementById('audio-player');
const nowPlayingImage = document.getElementById('nowPlayingImage');
const nowPlayingTitle = document.getElementById('nowPlayingTitle');
const nowPlayingArtist = document.getElementById('nowPlayingArtist');

function loadTrack(event) {
    const file = event.target.files[0];
    if (file) {
        const url = URL.createObjectURL(file);
        trackList.push(url); 
        playTrack(trackList.length - 1); 
    }
}

function playTrack(index) {
    if (index < 0 || index >= trackList.length) return;
    currentTrackIndex = index;
    audioPlayer.src = trackList[currentTrackIndex];
    audioPlayer.play();
    updateNowPlaying();
}

function updateNowPlaying() {
    nowPlayingImage.src = "/img/zxc.jpg"; 
    nowPlayingTitle.textContent = `Трек ${currentTrackIndex + 1}`; 
    nowPlayingArtist.textContent = "Исполнитель"; 
}

function playPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
}

function nextTrack() {
    if (currentTrackIndex < trackList.length - 1) {
        playTrack(currentTrackIndex + 1);
    }
}

function prevTrack() {
    if (currentTrackIndex > 0) {
        playTrack(currentTrackIndex - 1);
    }
}