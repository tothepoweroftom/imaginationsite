 var lines, markov;
 var articles, articleIndex;
 articleIndex = 0;
 var concatArticleTitles = '';
 let imagination = ["Imagination of Things is a place where people can't make the same decision.", "Imagination of Things is a story of changing reality, and of painful losses.", "Imagination of Things is a personal mess of bestial and raunchy watery murals.","Imagination of Things is a major victory, O'Neill leaves the ship.", "Imagination of Things is a new way to do business.", "Imagination of Things is a story of continual belief.", "Imagination of Things is a beautiful old theme park I've been told.", "Imagination of Things is a beauty.", "Imagination of Things is a barely-visible pattern that cycles into all our faces, and we PUSH UP to BEEP to see.", "Imagination of Things is a living, a living species.", "Imagination of Things is a H.P.", "Imagination of Things is a movement to be familiar with the old world" ,"Imagination of Things is a telepathic rendition of what The Burning Man finds after he's done its work, he can only guess.", "Imagination of Things is a bloody throng, looking up","Imagination of Things is a piece of joy to behold.", "Imagination of Things is a humorous combination of the outgoing vibes from being woke", "Imagination of Things is a rather graphic book.", "Imagination of Things is a bizarre relationship with Lora.", "Imagination of Things is a shambles of information to.", "Imagination of Things is a very vivid rendition of the Paris Night School.", "Imagination of Things is a deliriously complex discussion of aliens, human-like, with extreme accuracy","Imagination of Things is a difficult business." , "Imagination of Things is a great pleasure to hear...", "Imagination of Things is a pressing piece of political activity.","Imagination of Things is a rather awkward blend of story, plot, and focus on space and time and the star map.", "Imagination of Things is a piece of work.", "Imagination of Things is a fresh alien.", "Imagination of Things is a new show.", "Imagination of Things is a huge unfinished building in the middle of nowhere.", "Imagination of Things is a Tragedy.", "Imagination of Things is a perfect example of this.", "Imagination of Things is a surreal experience, but also eerily like an original.", "Imagination of Things is a touchier on this.", "Imagination of Things is a nightmare","Imagination of Things is a short distance away.", "Imagination of Things is a show on a stony island in the middle of nowhere, hidden behind the dead","Imagination of Things is a combination of Game Of Life scenarios and box sets.", "Imagination of Things is a beautiful thing.", "Imagination of Things is a particular kind of horror film, and takes place in the Sky","Imagination of Things is a kind of headquarters: a glimpse, a moment, of the outskirts of your own home.", "Imagination of Things is a beautiful place.", "Imagination of Things is a match made in hell by the messiest of characters.", "Imagination of Things is a go.", "Imagination of Things is a story of our own and yet we see ourselves facing outward in a world of shadows.", "Imagination of Things is a childhood nightmare.", "Imagination of Things is a relationship and doesn't merely be a feature.", "Imagination of Things is a non-stop flat trajectory.", "Imagination of Things is a fractal three-dimensional picture of space.", "Imagination of Things is a repeat of the previous one - in the original matter of the first one.", "Imagination of Things is a self-contained map of the ship,\n", "Imagination of Things is a sort of symphony, packed full of pyrotechnics, sinister imagery, xenomorphology, alien parasite warfare, and bakken, coke-clown, etc.", "Imagination of Things is a howler.", "Imagination of Things is a story that goes far beyond.", "Imagination of Things is a new story.", "Imagination of Things is a grimly funny photo-op of love and madness, filled with brilliant shot-in-the-glove images of a future.", "Imagination of Things is a SWEET on FIRE but nothing can be seen as it freezes in place.", "Imagination of Things is a leading light in the puzzle, floating in space, casting darkness over the gathered dots and columns.", "Imagination of Things is a magnificent sight.", "Imagination of Things is a grace-out of Chaos."," Imagination of Things is a must-try for horror fans.", "Imagination of Things is a collection of braided wire overlaid by an abstract mural.", "Imagination of Things is a key moment of that third book.", "Imagination of Things is a student-language L.A. brain dump, a threadbare c-section.", "Imagination of Things is a plain black field full of flashing lights", "Imagination of Things is a glorious, earthy black jewel-like object.", "Imagination of Things is a song written by DJ Steve","Imagination of Things is a work of imaginative imaginative thought, and the viewer expects nothing but a bit of G.I.", "Imagination of Things is a new series of photographs that were collected by the L.A. Police Department, and then analyzed by the first android, in the creation of the team.", "Imagination of Things is a dream.", "Imagination of Things is a big place to see"," Imagination of Things is a BRAZILIAN AMERICAN IRISH FILM.", "Imagination of Things is a matter of course - and it's clear from the experience as we listen that this is an executive of the gendarmes.", "Imagination of Things is a BOOST of the ship's architecture.", "Imagination of Things is a A+.", "Imagination of Things is a big surprise to me.", "Imagination of Things is a wonderful art for telling tale, even though it's all  a nightmare of the mind.", "Imagination of Things is a brilliant art.", "Imagination of Things is a play on the familiar.", "Imagination of Things is a two-part cycle:"," Imagination of Things is a blend of total horror and JESUS.", "Imagination of Things is a heavy one, at least the food.", "Imagination of Things is a grand celebration.", "Imagination of Things is a big curiosity.", "Imagination of Things is a fever-hit country town with an 840s residential standard of living.", "Imagination of Things is a 30s juggernaut.", "Imagination of Things is a story that is not a story.", "Imagination of Things is a frenetic motion, your breath and your breath taking longer to fill.", "Imagination of Things is a restful place.", "Imagination of Things is a survey of popular belief that you do have a right to your own words?", "Imagination of Things is a little dull, mostly.", "Imagination of Things is a space flick of psychomagnetism.", "Imagination of Things is a game of chance."," Imagination of Things is a penultimate touch-up.", "Imagination of Things is a sound argumentative song, in which we are looking at words they didn't mean to convey.", "Imagination of Things is a place where people can't make the same decision.", "Imagination of Things is a story of changing reality, and of painful losses.", "Imagination of Things is a personal mess of bestial and raunchy watery murals.", "Imagination of Things is a new way to do business.", "Imagination of Things is a story of continual belief.", "Imagination of Things is a beautiful old theme park I've been told.", "Imagination of Things is a beauty.", "Imagination of Things is a living, a living species.", "Imagination of Things is a rather graphic book.", "Imagination of Things is a bizarre relationship with Lora.", "Imagination of Things is a shambles of information to.", "Imagination of Things is a very vivid rendition of the Paris Night School.", "Imagination of Things is a great pleasure to hear...", "Imagination of Things is a piece of work.", "Imagination of Things is a new show.", "Imagination of Things is a huge unfinished building in the middle of nowhere.", "Imagination of Things is a Tragedy.", "Imagination of Things is a perfect example of this.", "Imagination of Things is a surreal experience, but also eerily like an original.", "Imagination of Things is a touchier on this.", "Imagination of Things is a short distance away.", "Imagination of Things is a beautiful thing.", "Imagination of Things is a beautiful place.", "Imagination of Things is a match made in hell by the messiest of characters.", "Imagination of Things is a go.", "Imagination of Things is a childhood nightmare.", "Imagination of Things is a relationship and doesn't merely be a feature.", "Imagination of Things is a non-stop flat trajectory.", "Imagination of Things is a fractal three-dimensional picture of space.", "Imagination of Things is a howler.", "Imagination of Things is a story that goes far beyond.", "Imagination of Things is a new story.", "Imagination of Things is a SWEET on FIRE but nothing can be seen as it freezes in place.", "Imagination of Things is a magnificent sight.", "Imagination of Things is a key moment of that third book.", "Imagination of Things is a student-language L.A. brain dump, a threadbare c-section.", "Imagination of Things is a dream.", "Imagination of Things is a BOOST of the ship's architecture.", "Imagination of Things is a A+.", "Imagination of Things is a big surprise to me.", "Imagination of Things is a brilliant art.", "Imagination of Things is a play on the familiar.", "Imagination of Things is a heavy one, at least the food.", "Imagination of Things is a grand celebration.", "Imagination of Things is a big curiosity.", "Imagination of Things is a 30s juggernaut.", "Imagination of Things is a story that is not a story.", "Imagination of Things is a frenetic motion, your breath and your breath taking longer to fill.", "Imagination of Things is a restful place.", "Imagination of Things is a survey of popular belief that you do have a right to your own words?", "Imagination of Things is a little dull, mostly.", "Imagination of Things is a space flick of psychomagnetism.", "Imagination of Things is a game of chance","Imagination of Things is a penultimate touch-up."]

 var bits = ['could be', 'was']
 var preUsedNounBuffer = []
 const BUFFERLEN = 32;
 (function ($) {

     if (WEBGL.isWebGLAvailable()) {





     } else {

         var warning = WEBGL.getWebGLErrorMessage();
         document.getElementById('container').appendChild(warning);

     }

     // Based on https://gist.github.com/asgeo1/1652946

     /**
      * Bind an event handler to a "double tap" JavaScript event.
      * @param {function} handler
      * @param {number} [delay=300]
      */
     $.fn.doubletap = $.fn.doubletap || function (handler, delay) {
         delay = delay == null ? 300 : delay;
         this.bind('touchend', function (event) {
             var now = new Date().getTime();
             // The first time this will make delta a negative number.
             var lastTouch = $(this).data('lastTouch') || now + 1;
             var delta = now - lastTouch;
             if (delta < delay && 0 < delta) {
                 // After we detect a doubletap, start over.
                 $(this).data('lastTouch', null);
                 if (handler !== null && typeof handler === 'function') {
                     handler(event);
                 }
             } else {
                 $(this).data('lastTouch', now);
             }
         });
     };

 })(jQuery);

 $(document).ready(function () {

     // CHECK FOR DEVICE MOTION
     if (window.DeviceMotionEvent == undefined) {
         //No accelerometer is present. Use buttons. 
         // alert("NO SHAKING BOOTY");

     } else {
         // alert("SHAKING BOOTY");

     }


     $('#cyclops2').fadeOut();

     $('#cyclops2').click(function () {

         $("html, body").animate({
             scrollTop: 0
         }, "slow");
         $('#cyclops2').fadeOut();
         // alert("")

     });

     $(window).scroll(function () {
         //  console.log(window.scrollTop());
         if ($(document).scrollTop() < 50) {
             $('#cyclops').fadeIn();
             $('#cyclops2').fadeOut();


         } else if ($(document).scrollTop() > 50 && $(document).scrollTop() < 1230) {
             $('#cyclops').fadeOut();

             // $('#roboto').fadeOut();
             // $('#question').fadeOut();
             // $('#side-cyclops').fadeIn();

         }
     });

     //   https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=API_KEY

     var url =
         "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=9097f737932c4681bd54a2ed6a71dbf1";
     fetch(url)
         .then(response => {

             return response.json();
         })
         .then(myJson => {
             if (articleIndex >= myJson.articles.length) {
                 articleIndex = 0;
             }
             articles = myJson.articles;

             for (let i = 0; i < articles.length; i++) {
                 concatArticleTitles += articles[i].title + ' '
             }

         });

     //  markov = new RiMarkov(4);

     //  markov.loadText(adlibtext);


     $('body').dblclick(generate);
     $('body').doubletap(() => {
         generate();
         tweencolor();
     });



     var myShakeEvent2 = new Shake({
         threshold: 10, // optional shake strength threshold
         timeout: 1000 // optional, determines the frequency of event generation
     });
     myShakeEvent2.start();

     console.log()

     // //  $('#tap-hold').fadeOut();
     // $('#tap-hold').fadeToggle("slow", "linear" );

     //  setInterval(() => {
     //     $('#tap-hold').fadeToggle("slow", "linear" );

     //     $('#shake').fadeToggle("slow", "linear" );

     //  }, 2000)

     window.addEventListener('shake', generate, false);
 });

 function generate() {
     console.log('generate')
     if (articleIndex >= articles.length) {
         articleIndex = 0;
     }
     //  if (!markov.ready()) return;

     let questionNouns = getNounsFromArticles(articles);
     let questionAdjectives = getAdjectivesFromArticles(concatArticleTitles);
     //  lines = markov.generateSentences(4);
     //  lines = lines[0] + " " +  lines[1] + " " + lines[2] + " " + lines[3];
     //console.log(lines);
     formQuestion(questionNouns, questionAdjectives, "");




 }

 function getAdjectivesFromArticles(concat) {

     let split = RiTa.tokenize(concat);
     let tags = RiTa.getPosTags(concat, true);
     let verbs = [];
     let adj = []

     tags.forEach((element, index) => {

         //console.log(element, split[index])

         if (element.includes("a") || element.includes("n")) {
             if (split[index].length > 4) {
                 adj.push(split[index]);

             }
         }

     });

     //console.log(adj);

     let rand = Math.floor(Math.random() * adj.length);


     return `${adj[rand]}`;
 }

 function getNounsFromArticles(articles) {
     let topArticle = articles[articleIndex].title;
     let doc = window.nlp(topArticle);


     //  Get nouns
     let nouns = doc.nouns().data()


     let rand = Math.floor(Math.random() * nouns.length);
     let word = nouns[rand].text
    console.log(word)

     word = RiTa.singularize(word);
     word = RiTa.stripPunctuation(word);
     //console.log(nouns);
     let question = `${word}`;


     return question;



 }

 function formQuestion(qNouns, qAdj, markovText) {
     let text = window.nlp(markovText);

     let split = RiTa.tokenize(markovText);
     let tags = RiTa.getPosTags(markovText);
     let verbs = [];
     let adj = []
     let seed = articles[articleIndex % articles.length]
     let nouns = text.nouns().data();
     let rand = Math.floor(Math.random() * nouns.length);

     //console.log(nouns);


     //  tags.forEach((element, index) => {

     //      if (element.includes("vbz")) {
     //          if (split[index].length > 4) {
     //              verbs.push(split[index]);

     //          }
     //      }
     //      if (element.includes("jjs") || element.includes("rbs")) {
     //          if (split[index].length > 4) {
     //              adj.push(split[index]);

     //          }
     //      }

     //  });


     //  let verb = verbs[0] ? verbs[0] : ' '
     //  let noun = nouns[rand].singular ? nouns[rand].singular : ' '


     // //  let article = nouns[rand].article ? nouns[rand].article : 'the'
     // //  let adverb = adj[0] ? adj[0] : '  '
     let word = bits[Math.floor(Math.random() * bits.length)];
     //  noun = RiTa.stripPunctuation(noun);


     //  Pull NOUN
     let testNoun = getRandomPrefabNoun();

     let randomIdentity = getRandomIdentity();




     articleIndex += 1;

     Scrambler({
         target: '#artNoun',
         random: [100, 500],
         speed: 100,
         text: qAdj + ' ' + qNouns
     });

     Scrambler({
         target: '#end',
         random: [100, 500],
         speed: 100,
         text: ` ${word} ${testNoun}`
     });

     Scrambler({
        target: '#cyclops-text',
        random: [100, 500],
        speed: 100,
        text: `${randomIdentity}`
    });

     //   $("#bit").text = ` ${word}`;



 }

 function getRandomPrefabNoun() {
     let noun = ''

     do {
         let rand = Math.floor(Math.random() * preFabNouns.length);
         noun = preFabNouns[rand];
     } while (preUsedNounBuffer.includes(noun));

     if (preUsedNounBuffer.length < BUFFERLEN) {
         preUsedNounBuffer.push(noun);
     } else {
         preUsedNounBuffer.shift();
         preUsedNounBuffer.push(noun);
     }
     return noun;
 }


 function getRandomIdentity() {
    let index = Math.floor(Math.random()*imagination.length);
    if(Math.random()*10 > 8.0 && $('#cyclops-text').text() != "Imagination of Things is a design fiction studio") {
        return "Imagination of Things is a design fiction studio"
    } else {
        return imagination[index];
    }
}

