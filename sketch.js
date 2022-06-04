let texts = [];
let randomNouns = ["book","chair","plant","broom","mop","door","table","pot","pane","banner","stair","pit","person"];
let randomVerbs = ["test","remind","fail","blame","spend","enclose","top","advocate","contribute","smell","destroy"];
let randomSentences;

function setup() {
  noCanvas();
  
  createButton("Regenerate").mousePressed(function() {
    location.reload();
  });
  for (let i = 0; i < 100; i++) {
    randomSentences = ["a "+getRand(randomNouns)+" that "+getRand(randomVerbs)+"s","a "+getRand(randomNouns)+" that "+getRand(randomVerbs)+"s for "+round(random(2,20))+" "+getRand(randomNouns)+"s","a "+getRand(randomNouns)+" that is "+getRand(randomVerbs)+"ed by a "+getRand(randomNouns),"someone "+getRand(randomVerbs)+"s a "+getRand(randomNouns)];
    let rand=getRand(randomSentences);
    rand=rand.replace(/eed/g,"ed");
    createP((i+1)+':<br>'+rand).style("font-size","30px")
  }
}

function getRand(arr){
  return random(arr);
}
