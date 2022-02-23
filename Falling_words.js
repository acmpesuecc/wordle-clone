class Falling_word{
    constructor(){
    this.x=Math.random()*displayWidth;
    this.y=Math.floor(Math.random()*-1.5*displayHeight);
    this.yspeed=Math.ceil(Math.random()*4)+1;
    this.rand=Math.floor(Math.random()*26)
    } 
    fall(){
        this.y=this.y+this.yspeed;
        if(this.y>displayHeight){
            this.y=Math.floor(Math.random()*-1.5*displayHeight);
        }
    }
    show(){
        fill(227, 207, 170)
        rect(0+this.x, 0+this.y, 68,90)
        fill(0,0,0)
        textSize(60);
        textFont("Monospace");
        text(String.fromCharCode(65+this.rand),17+this.x,62+this.y)
    }
}