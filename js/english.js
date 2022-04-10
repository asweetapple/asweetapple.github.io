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
        'name': 'Fix You',
        'artist': 'Coldplay',
        'album': 'n/a',
        'url': 'music/Fix You.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'So Am I',
        'artist': 'Ava Max',
        'album': 'n/a',
        'url': 'music/So Am I.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'All Falls Down',
        'artist': 'Alan Walker',
        'album': 'n/a',
        'url': 'music/All Falls Down.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'When You Were Young',
        'artist': 'The Killers',
        'album': 'n/a',
        'url': 'music/When You Were Young.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'Bird Set Free',
        'artist': 'Sia',
        'album': 'n/a',
        'url': 'music/Bird Set Free.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'Troublemaker',
        'artist': 'Akon + Sweet Rush',
        'album': 'n/a',
        'url': 'music/Troublemaker.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'Billionaire',
        'artist': 'Travie McCoy + Bruno Mars',
        'album': 'n/a',
        'url': 'music/Billionaire.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'I Knew You Were Trouble',
        'artist': 'Taylor Swift',
        'album': 'n/a',
        'url': 'music/I Knew You Were Trouble.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'Don\'t Leave Me Alone',
        'artist': 'David Guetta + Anne-Marie',
        'album': 'n/a',
        'url': 'music/Don\'t Leave Me Alone.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'Nevada',
        'artist': 'Vicetone + Cozi Zuehlsdorff',
        'album': 'n/a',
        'url': 'music/Nevada.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'My Songs Know What You Did In The Dark (Light Em Up)',
        'artist': 'Fall Out Boy',
        'album': 'n/a',
        'url': 'music/My Songs Know What You Did In The Dark (Light Em Up).mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'Through The Fire And Flames',
        'artist': 'DragonForce',
        'album': 'n/a',
        'url': 'music/Through The Fire And Flames.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'Tears',
        'artist': 'Clean Bandit + Louisa Johnson',
        'album': 'n/a',
        'url': 'music/Tears.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'Baby',
        'artist': 'Clean Bandit + Marina & Luis Fonsi',
        'album': 'n/a',
        'url': 'music/Baby.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'Whatever It Takes',
        'artist': 'Imagine Dragons',
        'album': 'n/a',
        'url': 'music/Whatever It Takes.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'Heartbeat Song',
        'artist': 'Kelly Clarkson',
        'album': 'n/a',
        'url': 'music/Heartbeat Song.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'Symphony',
        'artist': 'Clean Bandit + Zara Larsson',
        'album': 'n/a',
        'url': 'music/Symphony.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'Gone, Gone, Gone',
        'artist': 'Phillip Phillips',
        'album': 'n/a',
        'url': 'music/Gone, Gone, Gone.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'Bite Me',
        'artist': 'Avril Lavigne',
        'album': 'n/a',
        'url': 'music/english/Avril Lavigne-Bite Me.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': 'Complicated',
        'artist': 'Avril Lavigne',
        'album': 'n/a',
        'url': 'music/english/Avril Lavigne-Complicated.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': 'Dont Tell Me',
        'artist': 'Avril Lavigne',
        'album': 'n/a',
        'url': 'music/english/Avril Lavigne-Dont Tell Me.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': 'Head Above Water',
        'artist': 'Avril Lavigne',
        'album': 'n/a',
        'url': 'music/english/Avril Lavigne-Head Above Water.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': 'Im With You',
        'artist': 'Avril Lavigne',
        'album': 'n/a',
        'url': 'music/english/Avril Lavigne-Im With You.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': 'Innocence',
        'artist': 'Avril Lavigne',
        'album': 'n/a',
        'url': 'music/english/Avril Lavigne-Innocence.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': 'Let Me Go',
        'artist': 'Avril Lavigne',
        'album': 'n/a',
        'url': 'music/english/Avril Lavigne-Let Me Go.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': 'Love It When You Hate Me',
        'artist': 'Avril Lavigne',
        'album': 'n/a',
        'url': 'music/english/Avril Lavigne-Love It When You Hate Me.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': 'My Happy Ending',
        'artist': 'Avril Lavigne',
        'album': 'n/a',
        'url': 'music/english/Avril Lavigne-My Happy Ending.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': 'Sk8er Boi',
        'artist': 'Avril Lavigne',
        'album': 'n/a',
        'url': 'music/english/Avril Lavigne-Sk8er Boi.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': 'Smile',
        'artist': 'Avril Lavigne',
        'album': 'n/a',
        'url': 'music/english/Avril Lavigne-Smile.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': 'What The Hell',
        'artist': 'Avril Lavigne',
        'album': 'n/a',
        'url': 'music/english/Avril Lavigne-What The Hell.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': 'When Youre Gone',
        'artist': 'Avril Lavigne',
        'album': 'n/a',
        'url': 'music/english/Avril Lavigne-When Youre Gone.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': 'Wish You Were Here',
        'artist': 'Avril Lavigne',
        'album': 'n/a',
        'url': 'music/english/Avril Lavigne-Wish You Were Here.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': 'Its My Life',
        'artist': 'Bon Jovi',
        'album': 'n/a',
        'url': 'music/english/Bon Jovi-Its My Life.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': 'Just The Way You Are ( cover by J.Fla )',
        'artist': 'Bruno Mars',
        'album': 'n/a',
        'url': 'music/english/Bruno Mars-Just The Way You Are ( cover by J.Fla ).mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': 'My Heart Will Go On ( cover by J.Fla )',
        'artist': 'Celine Dion',
        'album': 'n/a',
        'url': 'music/english/Celine Dion-My Heart Will Go On ( cover by J.Fla ).mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': 'I Will Survive',
        'artist': 'Gloria Gaynor',
        'album': 'n/a',
        'url': 'music/english/Gloria Gaynor-I Will Survive.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': 'Demons ( cover by J.Fla )',
        'artist': 'Imagine Dragons',
        'album': 'n/a',
        'url': 'music/english/Imagine Dragons-Demons ( cover by J.Fla ).mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': 'Flashlight ( cover by J.Fla )',
        'artist': 'Jessie J',
        'album': 'n/a',
        'url': 'music/english/Jessie J-Flashlight ( cover by J.Fla ).mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': 'You Raise Me Up ( cover by J.Fla )',
        'artist': 'Josh Groban',
        'album': 'n/a',
        'url': 'music/english/Josh Groban-You Raise Me Up ( cover by J.Fla ).mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': 'Because Of You',
        'artist': 'Kelly Clarkson',
        'album': 'n/a',
        'url': 'music/english/Kelly Clarkson-Because Of You.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': 'Numb',
        'artist': 'Linkin Park',
        'album': 'n/a',
        'url': 'music/english/Linkin Park-Numb.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': 'Despacito ( cover by J.Fla )',
        'artist': 'Luis Fonsi',
        'album': 'n/a',
        'url': 'music/english/Luis Fonsi-Despacito ( cover by J.Fla ).mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': 'Despacito',
        'artist': 'Luis Fonsi',
        'album': 'n/a',
        'url': 'music/english/Luis Fonsi-Despacito.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': 'Memories ( cover by J.Fla )',
        'artist': 'Maroon 5',
        'album': 'n/a',
        'url': 'music/english/Maroon 5-Memories ( cover by J.Fla ).mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': 'Just Give Me A Reason',
        'artist': 'Pink',
        'album': 'n/a',
        'url': 'music/english/Pink-Just Give Me A Reason.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': 'Dance Monkey ( cover by J.Fla )',
        'artist': 'TONES AND I',
        'album': 'n/a',
        'url': 'music/english/TONES AND I-Dance Monkey ( cover by J.Fla ).mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
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
