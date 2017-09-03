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
      title: 'さくら ~あなたに出会えてよかった~',
      author: 'RSP',
      url: 'http://ovp1kv2jp.bkt.clouddn.com/RSP%20-%20%E3%81%95%E3%81%8F%E3%82%89%EF%BD%9E%E3%81%82%E3%81%AA%E3%81%9F%E3%81%AB%E5%87%BA%E4%BC%9A%E3%81%88%E3%81%A6%E3%82%88%E3%81%8B%E3%81%A3%E3%81%9F%EF%BD%9E.mp3',
      pic: '../assert/img/clannad.jpg',
      lrc: '../assert/lrc/さくら～あなたに出会えてよかっ.lrc'
    },
    {
      title: 'secret base~君がくれたもの~',
      author: '小缘',
      url: 'http://ovp1kv2jp.bkt.clouddn.com/mp3secret%20base%20%EF%BD%9E%E5%90%9B%E3%81%8B%E3%82%99%E3%81%8F%E3%82%8C%E3%81%9F%E3%82%82%E3%81%AE%EF%BD%9E%20-%20%E5%B0%8F%E7%BC%98.mp3',
      pic: '../assert/img/secret_base.jpg',
      lrc: '../assert/lrc/secret_base-小缘.lrc'
    },
    {
      title: 'Shelter',
      author: 'Porter Robinson',
      url: 'http://ovp1kv2jp.bkt.clouddn.com/Shelter-Porter%20Robinson.mp3',
      pic: '../assert/img/shelter.jpg',
      lrc: '../assert/lrc/shelter-PorterRobinson.lrc'
    },
    {
      title: 'too late',
      author: '水瀬いのり',
      url: 'http://ovp1kv2jp.bkt.clouddn.com/too%20late%20-%20%E6%B0%B4%E7%80%AC%E3%81%84%E3%81%AE%E3%82%8A.mp3',
      pic: '../assert/img/too_late.jpg',
      lrc: '../assert/lrc/too_late.lrc'
    }
  ]
});
