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
    videoId: '2S24-y0Ij3Y' //This is the youtube video id in the URL
  });

  // THIS IS WHERE YOU SET THE LYRICS AND TIMING
  var steps = [
      { at:  0.0, text: "Press Play to Start" },
      { at:  0.1, text: "Get Ready!" },
      { at: 4.0, text: "Yeah Yeah Yeah," },
      { at: 6.0, text: "BLACKPINK in your AREA," },
      { at: 11.0, text: "Yeah Yeah Yeah" },
      { at: 15.0, text: "천사 같은 hi 끝엔 악마 같은 bye" },
      { at: 19.0, text: "매번 미칠듯한 high 뒤엔 뱉어야 하는 price" },
      { at: 23.0, text: "이건 답이 없는 test, 매번 속더라도 yes" },
      { at: 26.0, text: "딱한 감정의 노예, 얼어 죽을 사랑해 yeah" },
      { at: 30.0, text: "Here I come kick in the door, uh" },
      { at: 32.0, text: "가장 독한 걸로 줘 uh" },
      { at: 34.0, text: "뻔하디 뻔한 그 love (love)" },
      { at: 35.0, text: "더 내놔봐 give me some more" },
      { at: 37.0, text: "알아서 매달려 벼랑 끝에 한마디면 또 like 헤벌레 해" },
      { at: 40.0, text: "그 따뜻한 떨림이 새빨간 설렘이, 마치 heaven 같겠지만, You might not get in it" },
      { at: 45.0, text: "Look at me, look at you" },
      { at: 46.0, text: "누가 더 아플까, You smart (you smart)," },
      { at: 50.0, text: "누가 you are" },
      { at: 52.0, text: "두 눈에 피눈물 흐르게 된다면, So sorry (so sorry)" },
      { at: 57.0, text: "누가 you are" },
      { at: 58.0, text: "나 어떡해 나약한 날 견딜 수 없어" },
      { at: 64.0, text: "애써 두 눈을 가린 채" },
      { at: 68.0, text: "사랑의 숨통을 끊어야겠어" },
      { at: 72.0, text: "Let's kill this love!" },
      { at: 76.0, text: "Yeah, yeah, yeah, yeah, yeah" },
      { at: 80.0, text: "Rum, pum, pum, pum, pum, pum, pum" },
      { at: 83.0, text: "Let's kill this love!" },
      { at: 87.0, text: "Rum, pum, pum, pum, pum, pum, pum" },
      { at: 92.0, text: "Feelin' like a sinner, It's so fire with him I go boo, ooh" },
      { at: 96.0, text: "He said you look crazy, Thank you, baby, I owe it all to you" },
      { at: 99.0, text: "Got me all messed up, His love is my favorite" },
      { at: 103.0, text: "But you plus me, Sadly can be dangerous" },
      { at: 106.0, text: "Lucky me, lucky you 결국엔 거짓말 we lie (we lie)" },
      { at: 112.0, text: "So what? So what?" },
      { at: 114.0, text: "만약에 내가 널 지우게 된다면 so sorry" },
      { at: 119.0, text: "I'm not sorry (I'm not sorry)" },
      { at: 120.0, text: "나 어떡해 나약한 날 견딜 수 없어" },
      { at: 126.0, text: "애써 눈물을 감춘 채" },
      { at: 129.0, text: "사랑의 숨통을 끊어야겠어" },
      { at: 134.0, text: "Let's kill this love!" },
      { at: 138.0, text: "Yeah, yeah, yeah, yeah, yeah" },
      { at: 141.0, text: "Rum, pum, pum, pum, pum, pum, pum" },
      { at: 145.0, text: "Let's kill this love!" },
      { at: 149.0, text: "Rum, pum, pum, pum, pum, pum, pum" },
      { at: 158.0, text: "We all commit to love" },
      { at: 160.0, text: "That makes you cry, oh oh" },
      { at: 165.0, text: "We're all making love" },
      { at: 167.0, text: "That kills you inside, yeah" },
      { at: 171.0, text: " We must kill this love (yeah, yeah) Yeah, it's sad but true" },
      { at: 175.0, text: "Gotta kill this love (yeah, yeah) Before it kills you, too" },
      { at: 179.0, text: "Kill this love (yeah, yeah) Yeah, it's sad but true" },
      { at: 182.0, text: "Gotta kill this love (yeah, yeah)" },
      { at: 184.0, text: "Gotta kill, let's kill this love!" },
      { at: 185.0, text: "Let's kill this love!" },
      { at: 187.0, text: "" },
];

  var ms = new MediaSync(media, {
      moments: steps,
      callback: print
    });

}
