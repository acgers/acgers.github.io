var ap = new APlayer({
  element: document.getElementById('a-player'),
  narrow: false,
  autoplay: true,
  showlrc: 1,
  mutex: true,
  theme: '#ad7a86',
  mode: 'random',
  music: [
    {
      title: 'secret base~君がくれたもの~',
      author: '小缘',
      url: 'http://ovp1kv2jp.bkt.clouddn.com/mp3secret%20base%20%EF%BD%9E%E5%90%9B%E3%81%8B%E3%82%99%E3%81%8F%E3%82%8C%E3%81%9F%E3%82%82%E3%81%AE%EF%BD%9E%20-%20%E5%B0%8F%E7%BC%98.mp3',
      pic: './assert/img/secret_base.jpg',
      lrc: './assert/lrc/secret_base-小缘.lrc'
    }
  ]
});
