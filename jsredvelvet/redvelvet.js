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
    videoId: 'PztJbh2tZro' //This is the youtube video id in the URL
  });

  // THIS IS WHERE YOU SET THE LYRICS AND TIMING
  var steps = [
    { at:  0.0, text: "Press Play to Start" },
    { at:  0.1, text: "Get Ready!" },
    { at:  2.0, text: "Ooh," },
    { at:  4.0, text: "Mmh," },
    { at:  6.0, text: "Ooh," },
    { at:  8.0, text: "Mmh," },
    { at:  9.0, text: "Mmh," },
    { at:  12.0, text: "Hey!," },
    { at:  13.0, text: "Who dat, who dat, who dat is," },
    { at:  15.0, text: "Coming in the back, back talking slick (uh huh)," },
    { at:  18.0, text: "Tell me cuz I like that, I like that," },
    { at:  22.0, text: "Yeah I know what to do with trouble ," },
    { at:  25.0, text: "Oh he don't, he don't, he don't know," },
    { at:  28.0, text: "I can take em head to head, go toe to toe," },
    { at:  31.0, text: "Oh If you play, I fight back, I fight back," },
    { at:  35.0, text: "I’ll show you who’s in control," },
    { at:  38.0, text: "Cuz I, I know how to make the devil cry ," },
    { at:  43.0, text: "Break em down looking in my eyes," },
    { at:  47.0, text: "That's what I’m doing here tonight," },
    { at:  51.0, text: "Every time I come around," },
    { at:  54.0, text: "Anotha bad boy down," },
    { at:  57.0, text: "Got em like ooh ooh (Oh-eh-oh-eh-oh)," },
    { at:  59.0, text: "Hit em with my love like ooh ooh (Oh-eh-oh-eh-oh)," },
    { at:  61.0, text: "But they come back another round," },
    { at:  64.0, text: "Just one look from me, lights out," },
    { at:  67.0, text: "Watch em hit the ground," },
    { at:  70.0, text: "Got em like ooh ooh (Oh-eh-oh-eh-oh)," },
    { at:  72.0, text: "Hit em with my love like ooh ooh (Oh-eh-oh-eh-oh)," },
    { at:  74.0, text: "I shot another bad boy down," },
    { at:  78.0, text: "Whoa whoa~," },
    { at:  81.0, text: "I shot another bad boy down," },
    { at:  84.0, text: "Whoa whoa~," },
    { at:  90.0, text: "Put you round my finger, I'mma tell you what you wanna hear," },
    { at:  93.0, text: "Running through your mind, Get you hooked, I’ll have you shedding tears," },
    { at:  96.0, text: "Oh no boy this ain't a fair fight," },
    { at:  100.0, text: "I'm winning you over alright," },
    { at:  102.0, text: "Oh baby my apologies," },
    { at:  105.0, text: "I don't mean to leave you hanging on a string," },
    { at:  108.0, text: "The more you wanna fight that," },
    { at:  110.0, text: "You fight that," },
    { at:  112.0, text: "The more I will pull you right back," },
    { at:  115.0, text: "Cuz I, I know how to make the devil cry," },
    { at:  120.0, text: "Break em down looking in my eyes," },
    { at:  123.0, text: "That's what I’ll do to you tonight," },
    { at:  128.0, text: "Every time I come around," },
    { at:  131.0, text: "Anotha bad boy down," },
    { at:  134.0, text: "Got em like ooh ooh (Oh-eh-oh-eh-oh)," },
    { at:  136.0, text: "Hit em with my love like ooh ooh (Oh-eh-oh-eh-oh)," },
    { at:  139.0, text: "But they come back another round," },
    { at:  141.0, text: "Just one look from me, lights out," },
    { at:  144.0, text: "Watch em hit the ground," },
    { at:  147.0, text: "Got em like ooh ooh (Oh-eh-oh-eh-oh)," },
    { at:  149.0, text: "Hit em with my love like ooh ooh (Oh-eh-oh-eh-oh)," },
    { at:  152.0, text: "I shot another bad boy down," },
    { at:  155.0, text: "Oh you’re gonna know what it feels like," },
    { at:  158.0, text: "To be free and open your mind," },
    { at:  162.0, text: "Falling in deep, so hard to breathe, It's only a matter of time," },
    { at:  168.0, text: "Baby I think you should know," },
    { at:  171.0, text: "That I ain't like all the others (ain't like others)," },
    { at:  176.0, text: "I'm making you fall," },
    { at:  177.0, text: "I'm making you fall to your knees," },
    { at:  179.0, text: "Every time I come around," },
    { at:  182.0, text: "Anotha bad boy down," },
    { at:  185.0, text: "Got em like ooh ooh (Oh-eh-oh-eh-oh)," },
    { at:  187.0, text: "Hit em with my love like ooh ooh (Oh-eh-oh-eh-oh)," },
    { at:  190.0, text: "But they come back another round," },
    { at:  192.0, text: "Just one look from me, lights out," },
    { at:  195.0, text: "Watch em hit the ground," },
    { at:  198.0, text: "Got em like ooh ooh (Oh-eh-oh-eh-oh)," },
    { at:  200.0, text: "Hit em with my love like ooh ooh (Oh-eh-oh-eh-oh)" },
    { at:  203.0, text: "I shot another bad boy down." },
    { at:  205.0, text: "" },
];

  var ms = new MediaSync(media, {
      moments: steps,
      callback: print
    });

}
