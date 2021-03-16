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
        'name': '我還沒有作好被打倒的準備',
        'artist': '理想混蛋',
        'album': 'n/a',
        'url': 'music/我還沒有作好被打倒的準備.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '留給你的我從未',
        'artist': '甜約翰',
        'album': 'n/a',
        'url': 'music/留給你的我從未.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '永不失聯的愛',
        'artist': '周興哲',
        'album': 'n/a',
        'url': 'music/永不失聯的愛.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '夏夜煙火',
        'artist': '理想混蛋',
        'album': 'n/a',
        'url': 'music/夏夜煙火.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '我們的歌',
        'artist': '王力宏',
        'album': 'n/a',
        'url': 'music/我們的歌.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '可惜沒如果',
        'artist': '林俊傑',
        'album': 'n/a',
        'url': 'music/可惜沒如果.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '讓你飛',
        'artist': '光良',
        'album': 'n/a',
        'url': 'music/讓你飛.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '愛．這件事情',
        'artist': '傅又宣',
        'album': 'n/a',
        'url': 'music/愛．這件事情.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '多想愛你',
        'artist': '季彥霖',
        'album': 'n/a',
        'url': 'music/多想愛你.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '少年',
        'artist': '夢然',
        'album': 'n/a',
        'url': 'music/少年.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '絕地花園',
        'artist': '理想混蛋 + 廖文強',
        'album': 'n/a',
        'url': 'music/絕地花園.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'CHANGE',
        'artist': '瘦子E.SO',
        'album': 'n/a',
        'url': 'music/CHANGE.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '末日之戀',
        'artist': '張智成',
        'album': 'n/a',
        'url': 'music/末日之戀.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '凌晨三點鐘',
        'artist': '張智成',
        'album': 'n/a',
        'url': 'music/凌晨三點鐘.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '空白格',
        'artist': '蔡健雅',
        'album': 'n/a',
        'url': 'music/空白格.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '無底洞',
        'artist': '蔡健雅',
        'album': 'n/a',
        'url': 'music/無底洞.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '陌生人',
        'artist': '蔡健雅',
        'album': 'n/a',
        'url': 'music/陌生人.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '路口',
        'artist': '蔡健雅',
        'album': 'n/a',
        'url': 'music/路口.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '那女孩對我說',
        'artist': '黃義達',
        'album': 'n/a',
        'url': 'music/那女孩對我說.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '目擊者',
        'artist': '黃義達',
        'album': 'n/a',
        'url': 'music/目擊者.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '感謝你曾來過',
        'artist': 'Ayo97 + 阿涵',
        'album': 'n/a',
        'url': 'music/感謝你曾來過.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'Forever Young',
        'artist': '艾怡良',
        'album': 'n/a',
        'url': 'music/Forever Young.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '流星雨',
        'artist': 'F4',
        'album': 'n/a',
        'url': 'music/流星雨.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '多愛我一天',
        'artist': 'Energy',
        'album': 'n/a',
        'url': 'music/多愛我一天.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '葉子',
        'artist': '阿桑',
        'album': 'n/a',
        'url': 'music/葉子.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '存在',
        'artist': '5566',
        'album': 'n/a',
        'url': 'music/存在.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '離人',
        'artist': '林志炫',
        'album': 'n/a',
        'url': 'music/離人.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '忘了你忘了我',
        'artist': '王傑',
        'album': 'n/a',
        'url': 'music/忘了你忘了我.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '真愛',
        'artist': '183club',
        'album': 'n/a',
        'url': 'music/真愛.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '曖昧',
        'artist': '楊丞琳',
        'album': 'n/a',
        'url': 'music/曖昧.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '荊棘裡的花',
        'artist': 'F.I.R.飛兒樂團',
        'album': 'n/a',
        'url': 'music/荊棘裡的花.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '依然愛你',
        'artist': '王力宏',
        'album': 'n/a',
        'url': 'music/依然愛你.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '惡作劇',
        'artist': '王藍茵',
        'album': 'n/a',
        'url': 'music/惡作劇.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '北極星的眼淚',
        'artist': '張棟樑',
        'album': 'n/a',
        'url': 'music/北極星的眼淚.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'Love Story',
        'artist': '范逸臣',
        'album': 'n/a',
        'url': 'music/Love Story.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '不說出的溫柔',
        'artist': '范逸臣',
        'album': 'n/a',
        'url': 'music/不說出的溫柔.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '在水一方',
        'artist': '汪東城',
        'album': 'n/a',
        'url': 'music/在水一方.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '半情歌',
        'artist': '元若藍',
        'album': 'n/a',
        'url': 'music/半情歌.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '愛夏',
        'artist': '胡夏',
        'album': 'n/a',
        'url': 'music/愛夏.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': 'I Dont Know',
        'artist': '王詩安',
        'album': 'n/a',
        'url': 'music/I Dont Know.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '我不願讓你一個人',
        'artist': '五月天',
        'album': 'n/a',
        'url': 'music/我不願讓你一個人.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '小半',
        'artist': '陳粒',
        'album': 'n/a',
        'url': 'music/小半.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '你是不是有點動心',
        'artist': '吳卓源',
        'album': 'n/a',
        'url': 'music/你是不是有點動心.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '水星記',
        'artist': '郭頂',
        'album': 'n/a',
        'url': 'music/水星記.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '親愛的無情孫小美',
        'artist': '茄子蛋',
        'album': 'n/a',
        'url': 'music/親愛的無情孫小美.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '浪流連',
        'artist': '茄子蛋',
        'album': 'n/a',
        'url': 'music/浪流連.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '愛在夏天',
        'artist': '告五人',
        'album': 'n/a',
        'url': 'music/愛在夏天.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '長途夜車',
        'artist': '滅火器',
        'album': 'n/a',
        'url': 'music/長途夜車.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '大風吹',
        'artist': '草東沒有派對',
        'album': 'n/a',
        'url': 'music/大風吹.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '山海',
        'artist': '草東沒有派對',
        'album': 'n/a',
        'url': 'music/山海.mp3',
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
