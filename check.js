function check(){
    for (let i = 0; i < tries-1; i++) {
        const element = entered_word[i];
        
        for (let x = 0; x < element.length; x++) {
            const letter = element[x].toLowerCase();
            var wrong_pos_letter=false
            for (let q = 0; q < selected_word.length; q++) {
                if(letter==selected_word[q]){
                    wrong_pos_letter=true;
                    
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
        textSize(160);
        textFont("Monospace");
        text(element,(displayWidth*5)/16,(displayHeight/3)+130*i)
    }
}
setTimeout( function ( ) { alert( "Time is up!!!" ); location.reload();}, 300000 ) //added a timer to reset the gane after 5 mins

