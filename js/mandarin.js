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
    },
    {
        'name': 'Happy!!! 運將情歌',
        'artist': '茄子蛋',
        'album': 'n/a',
        'url': 'music/Happy!!! 運將情歌.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '希望你回來',
        'artist': 'TRASH',
        'album': 'n/a',
        'url': 'music/希望你回來.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
    },
    {
        'name': '千年之戀',
        'artist': 'F.I.R',
        'album': 'n/a',
        'url': 'music/chinese/F.I.R-千年之戀.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '觸電',
        'artist': 'S.H.E',
        'album': 'n/a',
        'url': 'music/chinese/S.H.E-觸電.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '倔強',
        'artist': '五月天',
        'album': 'n/a',
        'url': 'music/chinese/五月天-倔強.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '憨人',
        'artist': '五月天',
        'album': 'n/a',
        'url': 'music/chinese/五月天-憨人.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '月亮代表我的心',
        'artist': '五月天',
        'album': 'n/a',
        'url': 'music/chinese/五月天-月亮代表我的心.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '洋蔥',
        'artist': '五月天',
        'album': 'n/a',
        'url': 'music/chinese/五月天-洋蔥.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '頑固',
        'artist': '五月天',
        'album': 'n/a',
        'url': 'music/chinese/五月天-頑固.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '心愛的再會啦',
        'artist': '伍佰',
        'album': 'n/a',
        'url': 'music/chinese/伍佰-心愛的再會啦.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '想見你想見你想見你',
        'artist': '八三夭',
        'album': 'n/a',
        'url': 'music/chinese/八三夭-想見你想見你想見你.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '搖勒搖勒9453打鐵',
        'artist': '八三夭',
        'album': 'n/a',
        'url': 'music/chinese/八三夭-搖勒搖勒9453打鐵.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '東區東區',
        'artist': '八三夭',
        'album': 'n/a',
        'url': 'music/chinese/八三夭-東區東區.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '後來',
        'artist': '劉若英',
        'album': 'n/a',
        'url': 'music/chinese/劉若英-後來.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': ' 當',
        'artist': '動力火車',
        'album': 'n/a',
        'url': 'music/chinese/動力火車- 當.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '忠孝東路走九遍',
        'artist': '動力火車',
        'album': 'n/a',
        'url': 'music/chinese/動力火車-忠孝東路走九遍.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '不要不要',
        'artist': '卓文萱',
        'album': 'n/a',
        'url': 'music/chinese/卓文萱-不要不要.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '下雨天',
        'artist': '南拳媽媽',
        'album': 'n/a',
        'url': 'music/chinese/南拳媽媽-下雨天.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '在這座城市遺失了你',
        'artist': '告五人',
        'album': 'n/a',
        'url': 'music/chinese/告五人-在這座城市遺失了你.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '好不容易',
        'artist': '告五人',
        'album': 'n/a',
        'url': 'music/chinese/告五人-好不容易.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '愛人錯過',
        'artist': '告五人',
        'album': 'n/a',
        'url': 'music/chinese/告五人-愛人錯過.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '愛在夏天',
        'artist': '告五人',
        'album': 'n/a',
        'url': 'music/chinese/告五人-愛在夏天.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '披星戴月的想你',
        'artist': '告五人',
        'album': 'n/a',
        'url': 'music/chinese/告五人-披星戴月的想你.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '陽光宅男',
        'artist': '周杰倫',
        'album': 'n/a',
        'url': 'music/chinese/周杰倫-陽光宅男.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '怎麼了',
        'artist': '周興哲',
        'album': 'n/a',
        'url': 'music/chinese/周興哲-怎麼了.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '天黑黑',
        'artist': '孫燕姿',
        'album': 'n/a',
        'url': 'music/chinese/孫燕姿-天黑黑.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '我懷念的',
        'artist': '孫燕姿',
        'album': 'n/a',
        'url': 'music/chinese/孫燕姿-我懷念的.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '逆光',
        'artist': '孫燕姿',
        'album': 'n/a',
        'url': 'music/chinese/孫燕姿-逆光.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '遇見',
        'artist': '孫燕姿',
        'album': 'n/a',
        'url': 'music/chinese/孫燕姿-遇見.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '春泥',
        'artist': '庾澄慶',
        'album': 'n/a',
        'url': 'music/chinese/庾澄慶-春泥.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '曲終人散',
        'artist': '張宇',
        'album': 'n/a',
        'url': 'music/chinese/張宇-曲終人散.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '大海',
        'artist': '張雨生',
        'album': 'n/a',
        'url': 'music/chinese/張雨生-大海.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '身騎白馬',
        'artist': '徐佳瑩',
        'album': 'n/a',
        'url': 'music/chinese/徐佳瑩-身騎白馬.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '心花開',
        'artist': '李千娜',
        'album': 'n/a',
        'url': 'music/chinese/李千娜-心花開.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '至少還有你',
        'artist': '林憶蓮',
        'album': 'n/a',
        'url': 'music/chinese/林憶蓮-至少還有你.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '偶陣雨',
        'artist': '梁靜茹',
        'album': 'n/a',
        'url': 'music/chinese/梁靜茹-偶陣雨.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '寧夏',
        'artist': '梁靜茹',
        'album': 'n/a',
        'url': 'music/chinese/梁靜茹-寧夏.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '島嶼天光',
        'artist': '滅火器',
        'album': 'n/a',
        'url': 'music/chinese/滅火器-島嶼天光.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '曾經瘋狂',
        'artist': '滅火器',
        'album': 'n/a',
        'url': 'music/chinese/滅火器-曾經瘋狂.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '繼續向前行',
        'artist': '滅火器',
        'album': 'n/a',
        'url': 'music/chinese/滅火器-繼續向前行.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '長途夜車',
        'artist': '滅火器',
        'album': 'n/a',
        'url': 'music/chinese/滅火器-長途夜車.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '心電心',
        'artist': '王心凌',
        'album': 'n/a',
        'url': 'music/chinese/王心凌-心電心.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '惡作劇',
        'artist': '王藍茵',
        'album': 'n/a',
        'url': 'music/chinese/王藍茵-惡作劇.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '9453',
        'artist': '玖壹壹',
        'album': 'n/a',
        'url': 'music/chinese/玖壹壹-9453.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': 'LOCAL',
        'artist': '玖壹壹',
        'album': 'n/a',
        'url': 'music/chinese/玖壹壹-LOCAL.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '下輩子',
        'artist': '玖壹壹',
        'album': 'n/a',
        'url': 'music/chinese/玖壹壹-下輩子.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '來個蹦蹦',
        'artist': '玖壹壹',
        'album': 'n/a',
        'url': 'music/chinese/玖壹壹-來個��蹦.mp3', 
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '再會中港路',
        'artist': '玖壹壹',
        'album': 'n/a',
        'url': 'music/chinese/玖壹壹-再會中港路.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '嘻哈庄腳情',
        'artist': '玖壹壹',
        'album': 'n/a',
        'url': 'music/chinese/玖壹壹-嘻哈庄腳情.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '回來我身邊',
        'artist': '玖壹壹',
        'album': 'n/a',
        'url': 'music/chinese/玖壹壹-回來我身邊.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '心內的話',
        'artist': '玖壹壹',
        'album': 'n/a',
        'url': 'music/chinese/玖壹壹-心內的話.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '愛的總舖師',
        'artist': '玖壹壹',
        'album': 'n/a',
        'url': 'music/chinese/玖壹壹-愛的總舖師.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '明天再擱來',
        'artist': '玖壹壹',
        'album': 'n/a',
        'url': 'music/chinese/玖壹壹-明天再擱來.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '男子漢的浪漫',
        'artist': '玖壹壹',
        'album': 'n/a',
        'url': 'music/chinese/玖壹壹-男子漢的浪漫.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '癡人說夢',
        'artist': '玖壹壹',
        'album': 'n/a',
        'url': 'music/chinese/玖壹壹-癡人說夢.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '癡情的男子漢',
        'artist': '玖壹壹',
        'album': 'n/a',
        'url': 'music/chinese/玖壹壹-癡情的男子漢.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '鄉下來的',
        'artist': '玖壹壹',
        'album': 'n/a',
        'url': 'music/chinese/玖壹壹-鄉下來的.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '我還年輕 我還年輕',
        'artist': '老王樂隊',
        'album': 'n/a',
        'url': 'music/chinese/老王樂隊-我還年輕 我還年輕.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '國境之南',
        'artist': '范逸臣',
        'album': 'n/a',
        'url': 'music/chinese/范逸臣-國境之南.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '無樂不作',
        'artist': '范逸臣',
        'album': 'n/a',
        'url': 'music/chinese/范逸臣-無樂不作.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '恰似你的溫柔',
        'artist': '茄子蛋',
        'album': 'n/a',
        'url': 'music/chinese/茄子蛋-恰似你的溫柔.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '愛情你比我想的閣較偉大',
        'artist': '茄子蛋',
        'album': 'n/a',
        'url': 'music/chinese/茄子蛋-愛情你比我想的閣較偉大.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '浪子回頭',
        'artist': '茄子蛋',
        'album': 'n/a',
        'url': 'music/chinese/茄子蛋-浪子回頭.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '浪流連',
        'artist': '茄子蛋',
        'album': 'n/a',
        'url': 'music/chinese/茄子蛋-浪流連.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '親愛的無情孫小美',
        'artist': '茄子蛋',
        'album': 'n/a',
        'url': 'music/chinese/茄子蛋-親愛的無情孫小美.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '這款自作多情',
        'artist': '茄子蛋',
        'album': 'n/a',
        'url': 'music/chinese/茄子蛋-這款自作多情.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '運將情歌',
        'artist': '茄子蛋',
        'album': 'n/a',
        'url': 'music/chinese/茄子蛋-運將情歌.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '閣愛妳一擺',
        'artist': '茄子蛋',
        'album': 'n/a',
        'url': 'music/chinese/茄子蛋-閣愛妳一擺.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '太陽',
        'artist': '邱振哲',
        'album': 'n/a',
        'url': 'music/chinese/邱振哲-太陽.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '路過人間',
        'artist': '郁可唯',
        'album': 'n/a',
        'url': 'music/chinese/郁可唯-路過人間.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '光年之外',
        'artist': '鄧紫棋',
        'album': 'n/a',
        'url': 'music/chinese/鄧紫棋-光年之外.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '熱愛105°C的你',
        'artist': '阿肆',
        'album': 'n/a',
        'url': 'music/chinese/阿肆-熱愛105°C的你.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '愛你',
        'artist': '陳芳語',
        'album': 'n/a',
        'url': 'music/chinese/陳芳語-愛你.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '天黑請閉眼',
        'artist': '陳零九',
        'album': 'n/a',
        'url': 'music/chinese/陳零九-天黑請閉眼.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '女孩',
        'artist': '韋禮安',
        'album': 'n/a',
        'url': 'music/chinese/韋禮安-女孩.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '還是會',
        'artist': '韋禮安',
        'album': 'n/a',
        'url': 'music/chinese/韋禮安-還是會.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': 'GOOD VIBE',
        'artist': '頑童MJ116',
        'album': 'n/a',
        'url': 'music/chinese/頑童MJ116-GOOD VIBE.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': 'Just Believe',
        'artist': '頑童MJ116',
        'album': 'n/a',
        'url': 'music/chinese/頑童MJ116-Just Believe.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '二手車',
        'artist': '頑童MJ116',
        'album': 'n/a',
        'url': 'music/chinese/頑童MJ116-二手車.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '少年董',
        'artist': '頑童MJ116',
        'album': 'n/a',
        'url': 'music/chinese/頑童MJ116-少年董.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '幹大事',
        'artist': '頑童MJ116',
        'album': 'n/a',
        'url': 'music/chinese/頑童MJ116-幹大事.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '走跳',
        'artist': '頑童MJ116',
        'album': 'n/a',
        'url': 'music/chinese/頑童MJ116-走跳.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '騙吃騙吃',
        'artist': '頑童MJ116',
        'album': 'n/a',
        'url': 'music/chinese/頑童MJ116-騙吃騙吃.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': ' 你啊你啊',
        'artist': '魏如萱',
        'album': 'n/a',
        'url': 'music/chinese/魏如萱- 你啊你啊.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '刻在我心底的名字',
        'artist': '魏如萱',
        'album': 'n/a',
        'url': 'music/chinese/魏如萱-刻在我心底的名字.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '不想上班',
        'artist': '黃明志',
        'album': 'n/a',
        'url': 'music/chinese/黃明志-不想上班.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '啪啪啪',
        'artist': '黃明志',
        'album': 'n/a',
        'url': 'music/chinese/黃明志-啪啪啪.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '漂向北方',
        'artist': '黃明志',
        'album': 'n/a',
        'url': 'music/chinese/黃明志-漂向北方.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '不屑',
        'artist': '黃鴻升',
        'album': 'n/a',
        'url': 'music/chinese/黃鴻升-不屑.mp3',
        'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
   },
   {
        'name': '我不是空笑夢',
        'artist': '黃鴻升',
        'album': 'n/a',
        'url': 'music/chinese/黃鴻升-我不是空笑夢.mp3',
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
