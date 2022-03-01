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
          'name': '不夜城 - 夜市徒步區', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/不夜城 - 夜市徒步區.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '不夜城主城區', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/不夜城主城區.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '克洛宿斯 - 探查本部', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/克洛宿斯 - 探查本部.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '冰原雪域 - 森林區', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/冰原雪域 - 森林區.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '冰原雪域主城區', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/冰原雪域主城區.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '勇士之村主城區', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/勇士之村主城區.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '地球防衛總部 - 堤安區', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/地球防衛總部 - 堤安區.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '地球防衛總部 - 機庫', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/地球防衛總部 - 機庫.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '地球防衛總部', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/地球防衛總部.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '埃德爾斯坦 - 地下總部', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/埃德爾斯坦 - 地下總部.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '埃德爾斯坦 - 外部', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/埃德爾斯坦 - 外部.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '埃德爾斯坦 - 萊芬礦山外部', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/埃德爾斯坦 - 萊芬礦山外部.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '埃德爾斯坦主城區', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/埃德爾斯坦主城區.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '墮落城市 - 地鐵', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/墮落城市 - 地鐵.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '墮落城市 - 捷運車廂', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/墮落城市 - 捷運車廂.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '墮落城市 - 沼澤地', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/墮落城市 - 沼澤地.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '墮落城市主城區', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/墮落城市主城區.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '天空之城 - 天空之塔20F~B1、秀茲的研究室', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/天空之城 - 天空之塔20F~B1、秀茲的研究室.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '天空之城 - 雅典娜禁地 - 主塔', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/天空之城 - 雅典娜禁地 - 主塔.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '天空之城主城區', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/天空之城主城區.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '天空之船 - 地獄巴洛谷來襲', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/天空之船 - 地獄巴洛谷來襲.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '天空之船 - 正常航行中', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/天空之船 - 正常航行中.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '奇幻村 - 地下迷宮前半部', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/奇幻村 - 地下迷宮前半部.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '奇幻村 - 地下迷宮後半部', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/奇幻村 - 地下迷宮後半部.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '奇幻村主城區', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/奇幻村主城區.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '弓箭手村 - 做夢的森林小徑', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/弓箭手村 - 做夢的森林小徑.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '弓箭手村 - 市集', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/弓箭手村 - 市集.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '弓箭手村 - 郊外1', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/弓箭手村 - 郊外1.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '弓箭手村 - 郊外2', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/弓箭手村 - 郊外2.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '弓箭手村、自由市場、預設音樂', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/弓箭手村、自由市場、預設音樂.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '往玩具城的船', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/往玩具城的船.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '時間神殿 - 回憶之路', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/時間神殿 - 回憶之路.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '時間神殿 - 忘卻之路', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/時間神殿 - 忘卻之路.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '時間神殿 - 悔恨之路', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/時間神殿 - 悔恨之路.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '時間神殿主城區', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/時間神殿主城區.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '桃花仙境 - 外部', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/桃花仙境 - 外部.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '桃花仙境主城區', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/桃花仙境主城區.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '楓之島', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/楓之島.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '武陵道場 - 1F、其他樓層音樂1', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/武陵道場 - 1F、其他樓層音樂1.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '武陵道場 - 其他樓層音樂2', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/武陵道場 - 其他樓層音樂2.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '武陵道場 - 其他樓層音樂3', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/武陵道場 - 其他樓層音樂3.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '水世界 - 深海峽谷區', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/水世界 - 深海峽谷區.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '水世界-外部地區', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/水世界-外部地區.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '水世界-水之都', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/水世界-水之都.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '水世界-海怒斯洞穴', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/水世界-海怒斯洞穴.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '水世界-綠海藻之地~四角地帶', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/水世界-綠海藻之地~四角地帶.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '玩具城 - 愛奧斯塔外牆', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/玩具城 - 愛奧斯塔外牆.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '玩具城 - 扭曲的時間之路前半部', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/玩具城 - 扭曲的時間之路前半部.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '玩具城 - 扭曲的時間之路後半部', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/玩具城 - 扭曲的時間之路後半部.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '玩具城 - 時空的裂縫塔系列（組隊任務）', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/玩具城 - 時空的裂縫塔系列（組隊任務）.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '玩具城 - 時間區', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/玩具城 - 時間區.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '玩具城 - 玩具工廠區', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/玩具城 - 玩具工廠區.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '玩具城 - 遺忘的時間之路外部', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/玩具城 - 遺忘的時間之路外部.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '玩具城 - 雙塔', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/玩具城 - 雙塔.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '玩具城主城區', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/玩具城主城區.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '瑞恩-修煉場', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/瑞恩-修煉場.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '瑞恩-雪平原及內陸地區', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/瑞恩-雪平原及內陸地區.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '瑞恩主城區', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/瑞恩主城區.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '神木村 - 半人馬區', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/神木村 - 半人馬區.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '神木村 - 外部', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/神木村 - 外部.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '神木村 - 泰拉森林', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/神木村 - 泰拉森林.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '神木村主城區', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/神木村主城區.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '童話村 - 烏山區', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/童話村 - 烏山區.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '童話村', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/童話村.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '納希沙漠 - 日落沙漠區', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/納希沙漠 - 日落沙漠區.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '納希沙漠 - 瑪迦迪亞城', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/納希沙漠 - 瑪迦迪亞城.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '納希沙漠 - 納希競技場', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/納希沙漠 - 納希競技場.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '納希沙漠 - 納希綠洲城', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/納希沙漠 - 納希綠洲城.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '納希沙漠 - 納希綠洲城外部', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/納希沙漠 - 納希綠洲城外部.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '維多利亞港、鯨魚號 - 海岸區', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/維多利亞港、鯨魚號 - 海岸區.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '耶雷弗-郊外', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/耶雷弗-郊外.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '耶雷弗-騎士訓練場', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/耶雷弗-騎士訓練場.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '耶雷弗主城區', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/耶雷弗主城區.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '聖克梅勒茲 - 海岸區', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/聖克梅勒茲 - 海岸區.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '聖克梅勒茲 - 船上（怪物來襲）', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/聖克梅勒茲 - 船上（怪物來襲）.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '聖克梅勒茲 - 船上（正常版）', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/聖克梅勒茲 - 船上（正常版）.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '聖克梅勒茲主城區、運河區', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/聖克梅勒茲主城區、運河區.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '艾靈森林 - 精靈區', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/艾靈森林 - 精靈區.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '艾靈森林主城區', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/艾靈森林主城區.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '西門町主城區', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/西門町主城區.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '靈藥幻境 - 金勾海賊團基地', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/靈藥幻境 - 金勾海賊團基地.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '靈藥幻境主城區', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/靈藥幻境主城區.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '魔法森林 - 外部', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/魔法森林 - 外部.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '魔法森林 - 訓練場', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/魔法森林 - 訓練場.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '魔法森林主城區', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/魔法森林主城區.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '鯨魚號 - 內部', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/鯨魚號 - 內部.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '鯨魚號 - 沙灘區', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/鯨魚號 - 沙灘區.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '鯨魚號 - 碼頭', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/鯨魚號 - 碼頭.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': '黃金海岸渡假村', 
          'artist': 'maple_story', 
          'album': 'n/a', 
          'url': 'music/maple_story/黃金海岸渡假村.mp3', 
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg' 
     },
     {
          'name': 'MapleStory_BGM_1_1',
          'artist': 'maple_story',
          'album': 'n/a',
          'url': 'music/maple_story/MapleStory_BGM_1_1.mp3',
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
     },
     {
          'name': 'MapleStory_BGM_1_2',
          'artist': 'maple_story',
          'album': 'n/a',
          'url': 'music/maple_story/MapleStory_BGM_1_2.mp3',
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
     },
     {
          'name': 'MapleStory_BGM_2',
          'artist': 'maple_story',
          'album': 'n/a',
          'url': 'music/maple_story/MapleStory_BGM_2.mp3',
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
     },
     {
          'name': 'MapleStory_BGM_3_1',
          'artist': 'maple_story',
          'album': 'n/a',
          'url': 'music/maple_story/MapleStory_BGM_3_1.mp3',
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
     },
     {
          'name': 'MapleStory_BGM_3_2',
          'artist': 'maple_story',
          'album': 'n/a',
          'url': 'music/maple_story/MapleStory_BGM_3_2.mp3',
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
     },
     {
          'name': 'MapleStory_BGM_4_1',
          'artist': 'maple_story',
          'album': 'n/a',
          'url': 'music/maple_story/MapleStory_BGM_4_1.mp3',
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
     },
     {
          'name': 'MapleStory_BGM_4_2',
          'artist': 'maple_story',
          'album': 'n/a',
          'url': 'music/maple_story/MapleStory_BGM_4_2.mp3',
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
     },
     {
          'name': 'MapleStory_BGM_5',
          'artist': 'maple_story',
          'album': 'n/a',
          'url': 'music/maple_story/MapleStory_BGM_5.mp3',
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
     },
     {
          'name': 'MapleStory_login',
          'artist': 'maple_story',
          'album': 'n/a',
          'url': 'music/maple_story/MapleStory_login.mp3',
          'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
     },
     {
          'name': '新楓之谷_弓箭手村西部',
          'artist': 'maple_story',
          'album': 'n/a',
          'url': 'music/maple_story/新楓之谷_弓箭手村西部.mp3',
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
