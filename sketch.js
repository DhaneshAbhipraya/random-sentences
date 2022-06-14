let texts = [];
let randomAnimateNouns = ["person","elephant","pig","bird","cat","dog","cow","horse","sheep","snake","fish","lion","tiger","bear","zebra","giraffe","ant","bee","butterfly","camel","chicken","dolphin","duck","eagle","fish","goat","gorilla","hippo","kangaroo","lobster","monkey","mouse","penguin","pig","rabbit","rat","snail","snake","spider","turtle","whale","zebra"];
let randomInanimateNouns = ["book","chair","plant","broom","mop","door","table","pot","pane","banner","stair","pit","head","tribe","tank","computer","egg","ampule","umbrella"];
let randomWearableNouns = ["uniform","hat","glove","shirt"];
let randomConsumableNouns = ["apple","banana","orange","pear","peach","grape","strawberry","watermelon","mango","pineapple","coconut","kiwi","cucumber","tomato","carrot","onion","potato","broccoli","cabbage","spinach","lettuce","cauliflower","celery","celery","cucumber","tomato","carrot","onion","potato","broccoli","cabbage","spinach","lettuce","cauliflower","celery","celery","cucumber","tomato","carrot","onion","potato","broccoli","cabbage","spinach","lettuce","cauliflower","celery","celery","cucumber","tomato","carrot","onion","potato","broccoli","cabbage","spinach","lettuce","cauliflower","celery","celery","cucumber","tomato","carrot","onion","potato","broccoli","cabbage","spinach","lettuce","cauliflower","celery","celery","cucumber","tomato","carrot","onion","potato","broccoli","cabbage","spinach","lettuce","cauliflower","celery","celery","cucumber","tomato","carrot","onion","potato","broccoli","cabbage","spinach","lettuce","cauliflower","celery","celery","cucumber","tomato","carrot","onion","potato","broccoli","cabbage","spinach","lettuce","cauliflower","celery","celery","cucumber","tomato","carrot","onion","potato","broccoli","cabbage","spinach","lettuce","cauliflower","celery","celery","cucumber","tomato","carrot","onion","potato","broccoli","cabbage","spinach","lettuce","cauliflower","celery","celery","cucumber","tomato","carrot","onion","potato","broccoli","cabbage","spinach","lettuce","cauliflower","celery","celery","cucumber","tomato","carrot","onion","potato","broccoli","cabbage","spinach","lettuce","cauliflower","celery","celery","cucumber","tomato"];
let randomNouns = randomAnimateNouns.concat(randomInanimateNouns,randomConsumableNouns,randomWearableNouns);
let randomVerbs = ["test","remind","fail","blame","spend","enclose","top","advocate","contribute","smell","destroy","step","walk"];
let randomNames = ["josh","susan","johnie","amandus","viliam","maksimilian","laila","guendoleu","marine","jobeth","asklepiades","eduardo","sabbas","fulbert","julij","božena","agaue","erez","ekundayo","joeri","louis","guanting","líadain","joe","ælfþryð","heracleitus","dejan","sang","niko","hilarion"];
let randomAdjectives = ["the","a","this"];
let randomSentences;

function setup() {
  noCanvas();
  createP("<br>");
  document.getElementsByTagName("body")[0].style.backgroundColor = "black";
  document.getElementsByTagName("body")[0].style.color = "white";
  
  createButton("Regenerate").style("position","fixed").mousePressed(function() {
    location.reload();
  });
  for (let i = 0; i < 1000; i++) {
    randomSentences = [
      "a "+getRand(randomAnimateNouns)+" that "+getRand(randomVerbs)+"s",
      "a "+getRand(randomAnimateNouns)+" that "+getRand(randomVerbs)+"s for "+round(random(2,20))+" "+getRand(randomConsumableNouns)+"s",
      "a "+getRand(randomAnimateNouns)+" that is "+getRand(randomVerbs)+"ed by a "+getRand(randomAnimateNouns),
      "someone "+getRand(randomVerbs)+"s a "+getRand(randomAnimateNouns),
      "I ate a "+getRand(randomConsumableNouns)+" because "+getRand(randomNames)+" told me to",
      "the "+getRand(randomNouns)+" became the official symbol of our company because of "+getRand(randomNames),
      "I wore "+getRand(randomNames)+"'s "+getRand(randomWearableNouns)+" because "+getRand(randomNames)+" told me to",
      "I wore "+getRand(randomAdjectives)+" "+getRand(randomWearableNouns)+" because "+getRand(randomNames)+" told me to",
      getRand(randomNames)+" was "+getRand(randomVerbs)+"ed by "+getRand(randomNames) + " because "+getRand(randomNames)+" told me to",
      "for some reason, "+getRand(randomAdjectives)+" "+getRand(randomAnimateNouns)+" cannot "+getRand(randomVerbs)+", but "+getRand(randomAdjectives)+" "+getRand(randomAnimateNouns)+" can",
      "this is "+getRand(randomAdjectives)+" "+getRand(randomVerbs)+"ly "+getRand(randomVerbs)+"ed "+getRand(randomNouns)+" by "+getRand(randomNames)+" because "+getRand(randomNames)+" told me to "+getRand(randomVerbs)+" it, and I "+getRand(randomVerbs)+"ed it",
      "this is "+getRand(randomAdjectives)+" "+getRand(randomVerbs)+"ly "+getRand(randomVerbs)+"ed "+getRand(randomNouns)+" by "+getRand(randomNames)+" but "+getRand(randomNames)+" told me to "+getRand(randomVerbs)+" it, and I "+getRand(randomVerbs)+"ed it",
      "this is "+getRand(randomAdjectives)+" "+getRand(randomVerbs)+"ly "+getRand(randomVerbs)+"ed "+getRand(randomNouns)+" by "+getRand(randomNames)+" because "+getRand(randomNames)+" told me to "+getRand(randomVerbs)+" it, and I "+getRand(randomVerbs)+"ed it and "+getRand(randomVerbs)+"ed it",
      "this is "+getRand(randomAdjectives)+" "+getRand(randomVerbs)+"ly "+getRand(randomVerbs)+"ed "+getRand(randomNouns)+" by "+getRand(randomNames)+" but "+getRand(randomNames)+" told me to "+getRand(randomVerbs)+" it, and I "+getRand(randomVerbs)+"ed it and "+getRand(randomVerbs)+"ed it",
    ];
    let rand=getRand(randomSentences);
    rand=rand.replace(/eed/g,"ed");
    rand=rand.replace(/([^aiuoe])ys/g,"$1ies");
    rand=rand.replace(/os(\s|$)/g,"oes$1");
    rand=rand.replace(/a ([aiuoe])/g,"an $1");
    rand=rand.replace(/an uni/g,"a uni");
    rand=rand.replace(/s's/g,"s'");
    rand=rand.replace(/ped(\s|$)/g,"pped$1");
    createP((i+1)+':<br>'+rand).style("font-size","30px");
  }
  createP(randomSeed()).style("position","fixed").style("font-size","30px");
}

function getRand(arr){
  return random(arr);
}
