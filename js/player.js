var ap = new APlayer({
  element: document.getElementById('a-player'),
  narrow: false,
  autoplay: true,
  showlrc: 3,
  mutex: true,
  theme: '#ad7a86',
  mode: 'random',
  music: [
    {
      title: 'adrenaline!!',
      author: 'TrySail',
      url: 'https://acgers-1253700126.cossh.myqcloud.com/adrenaline%21%21%21%20-%20TrySail.mp3',
      pic: '../assets/img/adrenaline.jpg',
      lrc: '../assets/lrc/adrenaline.lrc'
    },
    {
      title: 'さくら ~あなたに出会えてよかった~',
      author: 'RSP',
      url: 'https://acgers-1253700126.cossh.myqcloud.com/RSP%20-%20%E3%81%95%E3%81%8F%E3%82%89%EF%BD%9E%E3%81%82%E3%81%AA%E3%81%9F%E3%81%AB%E5%87%BA%E4%BC%9A%E3%81%88%E3%81%A6%E3%82%88%E3%81%8B%E3%81%A3%E3%81%9F%EF%BD%9E.mp3',
      pic: '../assets/img/clannad.jpg',
      lrc: '../assets/lrc/さくら～あなたに出会えてよかっ.lrc'
    },
    {
      title: 'secret base~君がくれたもの~',
      author: '小缘',
      url: 'https://acgers-1253700126.cossh.myqcloud.com/secret%20base%20%EF%BD%9E%E5%90%9B%E3%81%8B%E3%82%99%E3%81%8F%E3%82%8C%E3%81%9F%E3%82%82%E3%81%AE%EF%BD%9E%20-%20%E5%B0%8F%E7%BC%98.mp3',
      pic: '../assets/img/secret_base.jpg',
      lrc: '../assets/lrc/secret_base_小缘.lrc'
    },
    {
      title: 'Shelter',
      author: 'Porter Robinson',
      url: 'https://acgers-1253700126.cossh.myqcloud.com/Shelter-Porter%20Robinson.mp3',
      pic: '../assets/img/shelter.jpg',
      lrc: '../assets/lrc/shelter_PorterRobinson.lrc'
    },
    {
      title: 'too late',
      author: '水瀬いのり',
      url: 'https://acgers-1253700126.cossh.myqcloud.com/too%20late%20-%20%E6%B0%B4%E7%80%AC%E3%81%84%E3%81%AE%E3%82%8A.mp3',
      pic: '../assets/img/too_late.jpg',
      lrc: '../assets/lrc/too_late.lrc'
    },
    {
      title: '僕らの戦場～Freyja Solo Edition～',
      author: '鈴木みのり',
      url: 'https://acgers-1253700126.cossh.myqcloud.com/1-04%20%E5%83%95%E3%82%89%E3%81%AE%E6%88%A6%E5%A0%B4%EF%BD%9EFreyja%20Solo%20Edition%EF%BD%9E.mp3',
      pic: '../assets/img/僕らの戦場_solo.jpg',
      lrc: '../assets/lrc/僕らの戦場_solo.lrc'
    },
    {
      title: 'GIRAFFE BLUES ～Freyja Solo～',
      author: '鈴木みのり',
      url: 'https://acgers-1253700126.cossh.myqcloud.com/GIRAFFE%20BLUES%20~Freyja%20Solo~%20-%20%E9%88%B4%E6%9C%A8%E3%81%BF%E3%81%AE%E3%82%8A.mp3',
      pic: '../assets/img/GIRAFFE_BLUES_solo.jpg',
      lrc: '../assets/lrc/GIRAFFE_BLUES_solo.lrc'
    },
    {
      title: 'ebullient future (English)',
      author: 'ELISA',
      url: 'https://acgers-1253700126.cossh.myqcloud.com/ebullient_future_%28English%29.mp3',
      pic: '../assets/img/ebullient_future.jpg',
      lrc: '../assets/lrc/ebullient_future_(English).lrc'
    },
    {
      title: 'ebullient future (Japanese)',
      author: 'ELISA',
      url: 'https://acgers-1253700126.cossh.myqcloud.com/ebullient_future_%28Japanese%29.mp3',
      pic: '../assets/img/ebullient_future.jpg',
      lrc: '../assets/lrc/ebullient_future_(Japanese).lrc'
    },
    {
      title: 'eternal feather',
      author: '中岛裕美子',
      url: 'https://acgers-1253700126.cossh.myqcloud.com/eternal%20feather.mp3',
      pic: '../assets/img/eternal_feather.jpg',
      lrc: '../assets/lrc/eternal_feather.lrc'
    },
    {
      title: 'euphoric field (English)',
      author: 'ELISA',
      url: 'https://acgers-1253700126.cossh.myqcloud.com/euphoric_field_%28English%29.mp3',
      pic: '../assets/img/euphoric_field.jpg',
      lrc: '../assets/lrc/euphoric_field_(English).lrc'
    },
    {
      title: 'euphoric field (Japanese)',
      author: 'ELISA',
      url: 'https://acgers-1253700126.cossh.myqcloud.com/euphoric_field_%28Japanese%29.mp3',
      pic: '../assets/img/euphoric_field.jpg',
      lrc: '../assets/lrc/euphoric_field_(Japanese).lrc'
    },
    {
      title: '光るなら',
      author: 'Goose house',
      url: 'https://acgers-1253700126.cossh.myqcloud.com/1-01%20%E5%85%89%E3%82%8B%E3%81%AA%E3%82%89.mp3',
      pic: '../assets/img/光るなら.jpg',
      lrc: '../assets/lrc/光るなら.lrc'
    },
    {
      title: 'ニュー・ワールド・オーダー',
      author: '高田雅史',
      url: 'http://acgers-1253700126.cossh.myqcloud.com/%E3%83%8B%E3%83%A5%E3%83%BC%EF%BC%9F%E3%83%AF%E3%83%BC%E3%83%AB%E3%83%88%E3%82%99%EF%BC%9F%E3%82%AA%E3%83%BC%E3%82%BF%E3%82%99%E3%83%BC%20-%20%E9%AB%98%E7%94%B0%E9%9B%85%E5%8F%B2.mp3',
      pic: '../assets/img/ニュー・ワールド・オーダー.jpg'
    },
    {
      title: 'ニューワールドオーダーV3',
      author: '高田雅史',
      url: 'http://acgers-1253700126.cossh.myqcloud.com/%E3%83%8B%E3%83%A5%E3%83%BC%E3%83%AF%E3%83%BC%E3%83%AB%E3%83%88%E3%82%99%E3%82%AA%E3%83%BC%E3%82%BF%E3%82%99%E3%83%BCV3.mp3',
      pic: '../assets/img/ニューワールドオーダーV3.jpg'
    }
  ]
});
