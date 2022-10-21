var words=[]
(async () => {
    const data = await (await fetch('words.txt')).text();
    words = data.split('\n');
    selected_word = words[Math.floor(Math.random() * words.length)];
    console.log(selected_word);
})();

var alp = Array.from(Array(26)).map((e, i) => i + 97);
var alphabet = alp.map((x) => String.fromCharCode(x));

var entered_word=["","","","",""]
var tries=1;
var selected_word=words[Math.floor(Math.random() * words.length)];
let d=[];
console.log(selected_word)
function setup() {
    let cnv=createCanvas(displayWidth,displayHeight)
    cnv.parent('wordle_canvas')
    background(255,255,255)
    for (let i = 0; i < 50; i++) {
        d.push(new Falling_word());
    }

    
}
function draw() {
    background(125,199,52)
    for (let i = 0; i < d.length; i++) {
        const element = d[i];
        element.fall()
        element.show()
    }
    check()
        fill(0,0,0)
        textSize(160);
        textFont("Monospace");
        for (let i = 0; i < entered_word.length; i++) {
            const element = entered_word[i];
            text(element,(displayWidth*5)/16,(displayHeight/3)+130*i)
        }
}
function keyPressed() {
    console.log(entered_word)
    if(key=='Backspace'){
        entered_word[tries-1]=entered_word[tries-1].slice(0,entered_word[tries-1].length-1).toUpperCase()
         
    }
     if(key=='Enter'){
        if(entered_word[tries-1].length==5){
            var validword=false;
         for (let index = 0; index < words.length; index++) {
             if(words[index]==entered_word[tries-1].toLowerCase()){validword=true} 
             
         }
         if(validword==true){
            if(tries<4){
            tries=tries+1
            background(255,255,255)
            fill(0,0,0)
            textSize(160);
            textFont("Monospace");
            for (let i = 0; i < entered_word.length; i++) {
                const element = entered_word[i];
                var allcorrect = 0;
                for (let x = 0; x < element.length; x++) {
                    const letter = element[x].toLowerCase();
                    console.log(letter)
                    console.log(selected_word[x])
                    var wrong_pos_letter=false
                    for (let q = 0; q < selected_word.length; q++) {
                        if(letter==selected_word[q]){
                            wrong_pos_letter=true;
                            allcorrect+=1;
                        }
                    }
                    if(letter==selected_word[x]){
                        fill(0,255,0)
                        rect(((displayWidth*5)/16)+90*x, (displayHeight/3)-120+130*i, 90,120)
                    }
                    else if(wrong_pos_letter==true){
                        fill(255,255,0)
                        rect(((displayWidth*5)/16)+90*x, (displayHeight/3)-120+130*i, 90,120)
                        
                    }
                    else{
                        fill(225)
                        rect(((displayWidth*5)/16)+90*x, (displayHeight/3)-120+130*i, 90,120)
                        
                    }
                }
                fill(0,0,0)
                text(element,(displayWidth*5)/16,(displayHeight/3)+130*i)
                if(allcorrect==5){alert("You have found the right word ")
                entered_word=["","","","",""]
                tries=1;
                selected_word=words[Math.floor(Math.random() * words.length)];
            }
            }
        }
        else{alert("You're were unable to find the correct word. Thank you for playing!")
        entered_word=["","","","",""]
        tries=1;
        selected_word=words[Math.floor(Math.random() * words.length)];
        
    }
    }else{alert("Invalid word")}}
    }
    if(entered_word[tries-1].length<=4 && checkAlphabet(key)){
        entered_word[tries-1]=(entered_word[tries-1]+key).toUpperCase()
        
    
}
}

function checkAlphabet(k){
    if(alphabet.includes(k)){
        return true
    }
    return false
}