let texts = [];
let randomAnimateNouns = ["person","elephant","pig","bird","cat","dog","cow","horse","sheep","snake","fish","lion","tiger","bear","zebra","giraffe","ant","bee","butterfly","camel","chicken","dolphin","duck","eagle","fish","goat","gorilla","hippo","kangaroo","lobster","monkey","mouse","penguin","pig","rabbit","rat","snail","snake","spider","turtle","whale","zebra"];
let randomInanimateNouns = ["book","chair","plant","broom","mop","door","table","pot","pane","banner","stair","pit","head","tribe","tank","computer","egg","hat"];
let randomConsumableNouns = ["apple","banana","orange","pear","peach","grape","strawberry","watermelon","mango","pineapple","coconut","kiwi","cucumber","tomato","carrot","onion","potato","broccoli","cabbage","spinach","lettuce","cauliflower","celery","celery","cucumber","tomato","carrot","onion","potato","broccoli","cabbage","spinach","lettuce","cauliflower","celery","celery","cucumber","tomato","carrot","onion","potato","broccoli","cabbage","spinach","lettuce","cauliflower","celery","celery","cucumber","tomato","carrot","onion","potato","broccoli","cabbage","spinach","lettuce","cauliflower","celery","celery","cucumber","tomato","carrot","onion","potato","broccoli","cabbage","spinach","lettuce","cauliflower","celery","celery","cucumber","tomato","carrot","onion","potato","broccoli","cabbage","spinach","lettuce","cauliflower","celery","celery","cucumber","tomato","carrot","onion","potato","broccoli","cabbage","spinach","lettuce","cauliflower","celery","celery","cucumber","tomato","carrot","onion","potato","broccoli","cabbage","spinach","lettuce","cauliflower","celery","celery","cucumber","tomato","carrot","onion","potato","broccoli","cabbage","spinach","lettuce","cauliflower","celery","celery","cucumber","tomato","carrot","onion","potato","broccoli","cabbage","spinach","lettuce","cauliflower","celery","celery","cucumber","tomato","carrot","onion","potato","broccoli","cabbage","spinach","lettuce","cauliflower","celery","celery","cucumber","tomato","carrot","onion","potato","broccoli","cabbage","spinach","lettuce","cauliflower","celery","celery","cucumber","tomato"];
let randomNouns = randomAnimateNouns.concat(randomInanimateNouns,randomConsumableNouns);
let randomVerbs = ["test","remind","fail","blame","spend","enclose","top","advocate","contribute","smell","destroy"];
let randomNames = ["josh","susan","johnie","amandus","viliam","maksimilian","laila","guendoleu","marine","jobeth","asklepiades","eduardo","sabbas","fulbert","julij","božena","agaue","erez","ekundayo","joeri","louis","guanting","líadain","joe","ælfþryð","heracleitus","dejan","sang","niko","hilarion"]
let randomSentences;

function setup() {
  noCanvas();
  createP("");
  
  createButton("Regenerate").style("position","fixed").mousePressed(function() {
    location.reload();
  });
  for (let i = 0; i < 100; i++) {
    randomSentences = [
      "a "+getRand(randomAnimateNouns)+" that "+getRand(randomVerbs)+"s",
      "a "+getRand(randomAnimateNouns)+" that "+getRand(randomVerbs)+"s for "+round(random(2,20))+" "+getRand(randomConsumableNouns)+"s",
      "a "+getRand(randomAnimateNouns)+" that is "+getRand(randomVerbs)+"ed by a "+getRand(randomAnimateNouns),
      "someone "+getRand(randomVerbs)+"s a "+getRand(randomAnimateNouns),
      "I ate a "+getRand(randomConsumableNouns)+" because "+getRand(randomNames)+" told me to",
      "the "+getRand(randomNouns)+" became the official symbol of our company because of "+getRand(randomNames),
    ];
    let rand=getRand(randomSentences);
    rand=rand.replace(/eed/g,"ed");
    createP((i+1)+':<br>'+rand).style("font-size","30px")
  }
}

function getRand(arr){
  return random(arr);
}
