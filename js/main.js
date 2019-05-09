
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
    videoId: 'gj-VU9oK2Yo' //This is the youtube video id in the URL
  });

  // THIS IS WHERE YOU SET THE LYRICS AND TIMING
  var steps = [
      { at:  0.0, text: "Press Play to Start" },
      { at:  0.1, text: "Get Ready!" },
      { at: 10.0, text: "Yeah Yeah," },
      { at: 11.0, text: "I like shinin', you be lyin'," },
      { at: 13.0, text: "I be grinding you waste time," },
      { at: 14.0, text: "Know you wanna roll with me," },
      { at: 16.0, text: "Cause you know I put it down," },
      { at: 18.0, text: "When I show up." },
      { at: 19.0, text: "I'm the one and only no no no" },
      { at: 22.0, text: "Yeah pull up in the jag" },
      { at: 24.0, text: "haters gone be mad" },
      { at: 25.0, text: "I be walking with the cheese, that's that Queso" },
      { at: 29.0, text: "Diamonds drippin', better bring your rain coat" },
      { at: 33.0, text: "I got them racks on me, I brought the whole lit team with me" },
      { at: 36.0, text: "I might pull up in a spaceship" },
      { at: 38.0, text: "Hop out it don't look like I live here." },
      { at: 40.0, text: "And now we in a zone" },
      { at: 43.0, text: "Stand too close, might catch a cold" },
      { at: 46.0, text: "Crib came with a gate and code" },
      { at: 49.0, text: "Yeah Yeah" },
      { at: 50.0, text: "Yeah yeah, drippin' water faucet" },
      { at: 53.0, text: "Splash whoop whoop" },
      { at: 54.0, text: "VVS my diamonds, I don't need no light to shine" },
      { at: 58.0, text: "Iced out both my wrists now I can barely see the time" },
      { at: 61.0, text: "I just made a million and I'm still not satisfied" },
      { at: 65.0, text: "Cause I need that bag on the regular, I spend that bag on the regular" },
      { at: 67.0, text: "We make the world go" },
      { at: 70.0, text: "My bank account go" },
      { at: 75.0, text: "We make the world go" },
      { at: 78.0, text: "Brrah!" },
      { at: 79.0, text: "Dinero, peso, yen, Lo Quiero I want in" },
      { at: 83.0, text: "I'm too rich to compete, so don't compare them to me" },
      { at: 86.0, text: "We are not the same, only one of me" },
      { at: 89.0, text: "Hop out the coupe, the sky is the roof" },
      { at: 92.0, text: "My whole team ball" },
      { at: 94.0, text: "We never lose, hundreds all blue" },
      { at: 95.0, text: "we do what we do" },
      { at: 97.0, text: "Hopping out casket fresh, looking like a fashion show" },
      { at: 100.0, text: "Diamonds all on my neck, looking like a water show" },
      { at: 104.0, text: "She gone bust it bust it bust it" },
      { at: 106.0, text: "for a real, for a real one" },
      { at: 107.0, text: "we gone bring out the cars, one way no stop to the stars" },
      { at: 110.0, text: "ah yeah yeah yeah" },
      { at: 111.0, text: "Crew fly, Dubai, no it ain't two sides, too high, one way to mars" },
      { at: 115.0, text: "You better watch yourself, I did it all by myself" },
      { at: 119.0, text: "And now we in a zone" },
      { at: 121.0, text: "Stand too close might catch a cold" },
      { at: 125.0, text: "Crib came with a gate and code" },
      { at: 128.0, text: "yeah yeah yeah!" },
      { at: 129.0, text: "yeah yeah dripping water faucet " },
      { at: 133.0, text: "VVS my diamonds, I don't need no light to shine" },
      { at: 136.0, text: "Iced out both my wrists, I can barely see the time" },
      { at: 140.0, text: "I just made a million and I'm still not satisfied" },
      { at: 143.0, text: "Cause I need that bag on the regular" },
      { at: 145.0, text: "I spend that bag on the regular" },
      { at: 147.0, text: "We make the world go" },
      { at: 150.0, text: "My bank account go" },
      { at: 153.0, text: "We make the world go" },
      { at: 157.0, text: "Brrah!" },
      { at: 158.0, text: "Dinero, peso, yen, Lo Quiero, I want in" },
      { at: 161.0, text: "Multi colored diamonds like a rainbow, yeah, yeah, yeah" },
      { at: 165.0, text: "B-L-ind your eyes 번쩍 눈이 부셔 (your brain go)" },
      { at: 169.0, text: "Yeah 자체발광 we flash 주체 안돼 let's dance" },
      { at: 172.0, text: "This is real, this is a regular move" },
      { at: 174.0, text: "머리 어깨 무릎 발 무릎 발 let's get bounce!" },
      { at: 176.0, text: "Oh~" },
      { at: 178.0, text: "Oh~" },
      { at: 180.0, text: "Oh~" },
      { at: 182.0, text: "Oh~" },
      { at: 184.0, text: "Run it up, Run it up, Run it up" },
      { at: 185.0, text: "No competition in front of us" },
      { at: 187.0, text: "We got the wave, we gettin' paid" },
      { at: 190.0, text: "VSS my diamonds I don't need no light to shine" },
      { at: 194.0, text: "Iced out both my wrists, I can barely see the time" },
      { at: 197.0, text: "I just made millions of it but I'm still not satisfied" },
      { at: 201.0, text: "Cause I need that bag on the regular" },
      { at: 203.0, text: "I spend that bag on the regular" },
      { at: 207.0, text: "My bank account go" },
      { at: 211.0, text: "We make the world go" },
      { at: 214.0, text: "Brrah!" },
      { at: 215.0, text: "Dinero, peso, yen, Lo Quiero I want in" },
      { at: 218.0, text: "Regular" },
      { at: 220.0, text: "" },


    ];

  var ms = new MediaSync(media, {
      moments: steps,
      callback: print
    });

}
