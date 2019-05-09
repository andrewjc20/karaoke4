function onYouTubeIframeAPIReady() {
  var elementNum = 0;
  //This block of code updates the text.
  function print (moment, time) {
      var out = document.getElementById('out').children[elementNum];
      out.innerText = moment.text;
      out.classList = "show";
      if (elementNum === 0){
        document.getElementById('out').children[1].classList = "hide";
        elementNum = 1;
      } else {
        document.getElementById('out').children[0].classList = "hide";
        elementNum = 0;
    }
  }

  // Init youtube player
  var media = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: '0AUFyFEt35g' //This is the youtube video id in the URL
  });

  // THIS IS WHERE YOU SET THE LYRICS AND TIMING
  var steps = [
      { at:  0.0, text: "Press Play to Start" },
      { at:  0.1, text: "Get Ready!" },
      { at:  9.0, text: "Leggo" },
      { at:  10.0, text: "world 이 공간 속에 비밀 (shimmy shimmy)" },
      { at:  12.0, text: "가까움은 가면 같은 gimmick (give me, give me)" },
      { at:  15.0, text: "우린 만질 수 없는 걸 믿지, Woo 너도 알지, 우린 알고 있지 woo" },
      { at:  20.0, text: "더 가까워진 건 (wild)" },
      { at:  22.0, text: "소리보다 더 큰 벽 (you wild)" },
      { at:  25.0, text: "더는 참을 수 없어" },
      { at:  26.0, text: "Woo 난 깨버리지, Woo 난 깨버리지 깨버리지" },
      { at:  29.0, text: "내가 손대면 뭐든지 가지게 돼 나의 온기" },
      { at:  34.0, text: "손끝에 닿는 순간 빠진 느낌 yeah" },
      { at:  40.0, text: "I know you want" },
      { at:  41.0, text: "내게 가까이 닿아봐" },
      { at:  44.0, text: "The world is ours, World is ours" },
      { at:  48.0, text: "Don’t you know I’m a" },
      { at:  49.0, text: "내가 널 이끄는 boss" },
      { at:  50.0, text: "Don’t you know I’m a" },
      { at:  51.0, text: "내가 널 움직인 player" },
      { at:  52.0, text: "Don’t you know I’m a" },
      { at:  53.0, text: "내가 널 이끄는 boss" },
      { at:  55.0, text: "Don’t you know I’m a" },
      { at:  56.0, text: "Don’t you know I’m a" },
      { at:  57.0, text: "Don’t you know I’m a" },
      { at:  58.0, text: "내가 널 이끄는 boss" },
      { at:  60.0, text: "Don’t you know I’m a" },
      { at:  61.0, text: "내가 널 움직인 player" },
      { at:  62.0, text: "Don’t you know I’m a" },
      { at:  63.0, text: "내가 널 이끄는 boss" },
      { at:  64.0, text: "Don’t you know I’m a" },
      { at:  65.0, text: "Don’t you know I’m a" },
      { at:  66.0, text: "Don’t you know I’m a" },
      { at:  68.0, text: "내가 널 이끄는 대로 움직여" },
      { at:  71.0, text: "더 높이 너의 손을 뻗어 (wow wow)" },
      { at:  73.0, text: "난 또 다른 너와 나를 묶지" },
      { at:  75.0, text: "또다시 묶인 oh 다른 우리 다른 우리" },
      { at:  78.0, text: "난 절대적인 너의 boss 네가 원해 (I like that)" },
      { at:  80.0, text: "가지고 싶다면 가져 내 선택 (I like that)" },
      { at:  83.0, text: "난 더 너와 내가 시선을 맞추길 바라왔지 man" },
      { at:  85.0, text: "That’s what I need, You know me" },
      { at:  88.0, text: "나만 따라와 저 멀리" },
      { at:  90.0, text: "널 데리고 난 겁 없이" },
      { at:  92.0, text: "더 큰 하나를 그리고 싶어졌어 yeah (그리고 싶어졌어 yeah)" },
      { at:  98.0, text: "모두 다시 태어난 것처럼 내 세계로 와" },
      { at:  104.0, text: "다들 물 만난 듯 노래해" },
      { at:  106.0, text: "Don’t you know I’m a" },
      { at:  108.0, text: "내가 널 이끄는 boss" },
      { at:  109.0, text: "Don’t you know I’m a" },
      { at:  110.0, text: "내가 널 움직인 player" },
      { at:  111.0, text: "Don’t you know I’m a" },
      { at:  112.0, text: "내가 널 이끄는 boss" },
      { at:  113.0, text: "Don’t you know I’m a" },
      { at:  114.0, text: "Don’t you know I’m a" },
      { at:  115.0, text: "Don’t you know I’m a" },
      { at:  117.0, text: "내가 널 이끄는 boss" },
      { at:  118.0, text: "Don’t you know I’m a" },
      { at:  119.0, text: "내가 널 움직인 player" },
      { at:  120.0, text: "Don’t you know I’m a" },
      { at:  121.0, text: "내가 널 이끄는 boss" },
      { at:  123.0, text: "Don’t you know I’m a" },
      { at:  124.0, text: "Don’t you know I’m a" },
      { at:  125.0, text: "Don’t you know I’m a" },
      { at:  126.0, text: "Just give it, give it, give it 기분 내키는 대로" },
      { at:  130.0, text: "좀 더 closer, closer, closer 믿고 다가서 줘" },
      { at:  135.0, text: "이젠 눈을 감아 앞에 펼쳐질, 나의 세계를 맘껏 들이쉬어" },
      { at:  141.0, text: "그대로 충분해 넌 아름다워 yeah" },
      { at:  146.0, text: "손끝의 소통 이건 fake 때려쳐 대신" },
      { at:  148.0, text: "fly to you dive to you 직접 I can make it, make it work for you" },
      { at:  151.0, text: "I became the boss for you" },
      { at:  152.0, text: "부질없는 post no need" },
      { at:  154.0, text: "내가 나타내줄게 난 알아 너의 feel now, Fear none, We eye to eye" },
      { at:  158.0, text: "’m the boss to the world, 널 애태우게 할 놈, Hot dog feel like I wear 구스 구스" },
      { at:  163.0, text: "I’ll gonna catch up lightly fly 네 door bell" },
      { at:  165.0, text: "직접 knock 할거야 이건 direct sign" },
      { at:  168.0, text: "내가 널 이끄는 boss" },
      { at:  169.0, text: "Don’t you know I’m a" },
      { at:  170.0, text: "내가 널 움직인 player" },
      { at:  171.0, text: "Don’t you know I’m a" },
      { at:  173.0, text: "내가 널 이끄는 boss" },
      { at:  174.0, text: "Don’t you know I’m a" },
      { at:  175.0, text: "Don’t you know I’m a" },
      { at:  176.0, text: "Don’t you know I’m a" },
      { at:  177.0, text: "(내가 널 이끄는 boss) 세상 밖에서만 찾던 세계" },
      { at:  180.0, text: "(내가 널 움직인 player) 온전하게 조화롭던 세계" },
      { at:  182.0, text: "(내가 널 이끄는 boss) 누구라도 원이 될 수 있게" },
      { at:  184.0, text: "보내볼래, 나의 노래 " },
      { at:  187.0, text: "Woo, woo, woo, woo, woo, woo" },
      { at:  192.0, text: "Woo, woo, woo, woo, woo, woo" },
      { at:  197.0, text: "Woo, woo, woo, woo, woo, woo" },
      { at:  202.0, text: "Woo, woo, woo, woo, woo, woo" },
      { at:  205.0, text: "" },
];

  var ms = new MediaSync(media, {
      moments: steps,
      callback: print
    });

}
