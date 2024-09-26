const trackList = document.getElementById('trackList');
const playlistList = document.getElementById('playlistList');
const uploadTrackButton = document.getElementById('uploadTrackButton');
const createPlaylistButton = document.getElementById('createPlaylist');
const playlistModal = document.getElementById('playlistModal');
const closeModal = document.querySelector('.close');
const savePlaylistButton = document.getElementById('savePlaylist');

let playlists = [];
let tracks = [];

function renderTracks() {
    trackList.innerHTML = '';
    tracks.forEach(track => {
        const li = document.createElement('li');
        li.textContent = `${track.name} - ${track.artist} (${track.album})`;
        trackList.appendChild(li);
    });
}

function renderPlaylists() {
    playlistList.innerHTML = '';
    playlists.forEach(playlist => {
        const li = document.createElement('li');
        li.textContent = playlist;
        playlistList.appendChild(li);
    });
}

uploadTrackButton.addEventListener('click', () => {
    const trackName = document.getElementById('trackName').value;
    const trackArtist = document.getElementById('trackArtist').value;
    const trackAlbum = document.getElementById('trackAlbum').value;
    const trackFile = document.getElementById('trackFile').files[0];

    if (trackName && trackArtist && trackAlbum && trackFile) {
        const newTrack = {
            name: trackName,
            artist: trackArtist,
            album: trackAlbum,
            file: URL.createObjectURL(trackFile)
        };
        tracks.push(newTrack);
        renderTracks();
        document.getElementById('trackName').value = '';
        document.getElementById('trackArtist').value = '';
        document.getElementById('trackAlbum').value = '';
        document.getElementById('trackFile').value = '';
    } else {
        alert('Пожалуйста, заполните все поля.');
    }
});

createPlaylistButton.addEventListener('click', () => {
    playlistModal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    playlistModal.style.display = 'none';
});

savePlaylistButton.addEventListener('click', () => {
    const playlistName = document.getElementById('playlistName').value;
    if (playlistName) {
        playlists.push(playlistName);
        renderPlaylists();
        document.getElementById('playlistName').value = '';
        playlistModal.style.display = 'none';
    } else {
        alert('Пожалуйста, введите название плейлиста.');
    }
});

// Закрытие модального окна при клике вне его
window.addEventListener('click', (event) => {
    if (event.target === playlistModal) {
        playlistModal.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const trackList = document.getElementById('trackList');
    const playlistList = document.getElementById('playlistList');
    const uploadTrackButton = document.getElementById('uploadTrackButton');
    const createPlaylistButton = document.getElementById('createPlaylist');
    const playlistModal = document.getElementById('playlistModal');
    const closeModal = document.querySelector('.close');
    const savePlaylistButton = document.getElementById('savePlaylist');

    let tracks = [];
    let playlists = [];

    // Функция для отображения треков
    function displayTracks() {
        trackList.innerHTML = '';
        tracks.forEach((track, index) => {
            const li = document.createElement('li');
            li.textContent = `${track.name} - ${track.artist} (${track.album})`;
            trackList.appendChild(li);
        });
    }

    // Функция для отображения плейлистов
    function displayPlaylists() {
        playlistList.innerHTML = '';
        playlists.forEach((playlist) => {
            const li = document.createElement('li');
            li.textContent = playlist;
            playlistList.appendChild(li);
        });
    }

    // Обработчик загрузки трека
    uploadTrackButton.addEventListener('click', function () {
        const trackName = document.getElementById('trackName').value;
        const trackArtist = document.getElementById('trackArtist').value;
        const trackAlbum = document.getElementById('trackAlbum').value;
        const trackFile = document.getElementById('trackFile').files[0];

        if (trackFile && trackName && trackArtist && trackAlbum) {
            const newTrack = {
                name: trackName,
                artist: trackArtist,
                album: trackAlbum,
                file: trackFile
            };
            tracks.push(newTrack);
            displayTracks();

            // Очистить поля ввода
            document.getElementById('trackName').value = '';
            document.getElementById('trackArtist').value = '';
            document.getElementById('trackAlbum').value = '';
            document.getElementById('trackFile').value = '';
        } else {
            alert('Пожалуйста, заполните все поля!');
        }
    });

    // Обработчик создания плейлиста
    createPlaylistButton.addEventListener('click', function () {
        playlistModal.style.display = 'block';
    });

    // Обработчик закрытия модального окна
    closeModal.addEventListener('click', function () {
        playlistModal.style.display = 'none';
    });

    // Обработчик сохранения плейлиста
    savePlaylistButton.addEventListener('click', function () {
        const playlistName = document.getElementById('playlistName').value;
        if (playlistName) {
            playlists.push(playlistName);
            displayPlaylists();
            document.getElementById('playlistName').value = '';
            playlistModal.style.display = 'none';
        } else {
            alert('Пожалуйста, введите название плейлиста!');
        }
    });

    // Поиск треков
    document.getElementById('searchButton').addEventListener('click', function () {
        const searchValue = document.getElementById('search').value.toLowerCase();
        const genreFilter = document.getElementById('genreFilter').value;

        const filteredTracks = tracks.filter(track => {
            const matchesSearch = track.name.toLowerCase().includes(searchValue) || 
                                  track.artist.toLowerCase().includes(searchValue) || 
                                  track.album.toLowerCase().includes(searchValue);
            return genreFilter ? matchesSearch && track.genre === genreFilter : matchesSearch;
        });

        trackList.innerHTML = '';
        filteredTracks.forEach(track => {
            const li = document.createElement('li');
            li.textContent = `${track.name} - ${track.artist} (${track.album})`;
            trackList.appendChild(li);
        });
    });
})