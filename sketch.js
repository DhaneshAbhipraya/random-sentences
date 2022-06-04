let texts = [];
let randomNouns = ["book","chair","plant","broom","mop","door","table","pot","pane","banner","stair","pit","person"];
let randomVerbs = ["test","remind","fail","blame","spend","enclose","top","advocate","contribute","smell","destroy"];
let randomSentences;

function setup() {
  noCanvas();
  createButton("Regenerate").mousePressed(function() {
    for (let i = 0; i < texts.length; i++){
      texts[i].remove();
      start();
    }
  });
  start();
}

function start(){
  for (let i = 0; i < 100; i++) {
    randomSentences = ["a "+getRand(randomNouns)+" that "+getRand(randomVerbs)+"s","a "+getRand(randomNouns)+" that "+getRand(randomVerbs)+"s for "+round(random(2,20))+" "+getRand(randomNouns)+"s","a "+getRand(randomNouns)+" that is "+getRand(randomVerbs)+"ed by a "+getRand(randomNouns)];
    texts.push(createP((i+1)+':<br>'+getRand(randomSentences)).style("font-size","30px"));
  }
}

function getRand(arr){
  return random(arr);
}

function draw() {
  background(51);
}
