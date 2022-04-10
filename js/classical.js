window.onkeydown = function(e) {
    return !(e.keyCode == 32);
};

/*
  Handles a click on the down button to slide down the playlist.
*/
document.getElementsByClassName('down-header')[0].addEventListener('click', function() {
    var list = document.getElementById('list');

    list.style.height = (parseInt(document.getElementById('flat-black-player-container').offsetHeight) - 135) + 'px';

    document.getElementById('list-screen').classList.remove('slide-out-top');
    document.getElementById('list-screen').classList.add('slide-in-top');
    document.getElementById('list-screen').style.display = 'block';
});

/*
  Handles a click on the up arrow to hide the list screen.
*/
document.getElementsByClassName('hide-playlist')[0].addEventListener('click', function() {
    document.getElementById('list-screen').classList.remove('slide-in-top');
    document.getElementById('list-screen').classList.add('slide-out-top');
    document.getElementById('list-screen').style.display = 'none';
});

/*
  Handles a click on the song played progress bar.
*/
document.getElementById('song-played-progress').addEventListener('click', function(e) {
    var offset = this.getBoundingClientRect();
    var x = e.pageX - offset.left;

    Amplitude.setSongPlayedPercentage(parseFloat(x) / parseFloat(this.offsetWidth) * 100);
});

document.querySelector('img[data-amplitude-song-info="cover_art_url"]').style.height = document.querySelector('img[data-amplitude-song-info="cover_art_url"]').offsetWidth + 'px';

var songs = [
    {
        'name': 'Beethoven - Moonlight Sonata (1st Movement)',
        'artist': 'Rousseau',
        'album': 'n/a',
        'url': 'music/Beethoven - Moonlight Sonata (1st Movement).mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'Beethoven - Moonlight Sonata (2nd Movement)',
        'artist': 'Rousseau',
        'album': 'n/a',
        'url': 'music/Beethoven - Moonlight Sonata (2nd Movement).mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'Beethoven - Moonlight Sonata (3rd Movement)',
        'artist': 'Rousseau',
        'album': 'n/a',
        'url': 'music/Beethoven - Moonlight Sonata (3rd Movement).mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'Ludovico Einaudi - Nuvole Bianche',
        'artist': 'Rousseau',
        'album': 'n/a',
        'url': 'music/Ludovico Einaudi - Nuvole Bianche.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'Pure White',
        'artist': 'V.K克',
        'album': 'n/a',
        'url': 'music/Pure White.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'Chopin - Heroic Polonaise (Op. 53 in A Flat Major)',
        'artist': 'Rousseau',
        'album': 'n/a',
        'url': 'music/Chopin - Heroic Polonaise (Op. 53 in A Flat Major).mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'Liszt - Liebestraum No. 3 (Love Dream)',
        'artist': 'Rousseau',
        'album': 'n/a',
        'url': 'music/Liszt - Liebestraum No. 3 (Love Dream).mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'Chopin - Etude Op. 10 No. 4 (Torrent)',
        'artist': 'Rousseau',
        'album': 'n/a',
        'url': 'music/Chopin - Etude Op. 10 No. 4 (Torrent).mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'Bach - Prelude & Fugue No. 2 in C Minor',
        'artist': 'Rousseau',
        'album': 'n/a',
        'url': 'music/Bach - Prelude & Fugue No. 2 in C Minor.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'Liszt - La Campanella',
        'artist': 'Rousseau',
        'album': 'n/a',
        'url': 'music/Liszt - La Campanella.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'Liszt - Hungarian Rhapsody No. 2',
        'artist': 'Rousseau',
        'album': 'n/a',
        'url': 'music/Liszt - Hungarian Rhapsody No. 2.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
        
    }
];

for (index = 0; index < songs.length; index++) {
    var listItem = `<div class="song amplitude-song-container amplitude-play-pause" data-amplitude-song-index="${index}">
                        <span class="song-number-now-playing">
                            <span class="number">${index + 1}</span>
                            <img class="now-playing" src="https://521dimensions.com/img/open-source/amplitudejs/examples/flat-black/now-playing.svg" />
                        </span>
                        <div class="song-meta-container">
                            <span class="song-name" data-amplitude-song-info="name" data-amplitude-song-index="${index}"></span>
                            <span class="song-artist-album">
                                <span data-amplitude-song-info="artist" data-amplitude-song-index="${index}"></span>
                                -
                                <span data-amplitude-song-info="album" data-amplitude-song-index="${index}"></span>
                            </span>
                        </div>
                    </div>`;
    $("#list").append(listItem);
}

Amplitude.init({
    "bindings": {
        37: 'prev',
        39: 'next',
        32: 'play_pause'
    },
    "songs": songs
});
