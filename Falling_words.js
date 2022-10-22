class Falling_word{
    constructor(){
    this.x=Math.random()*displayWidth;
    this.y=Math.floor(Math.random()*-1.5*displayHeight);
    this.yspeed=Math.ceil(Math.random()*4)+1;
    this.rand=Math.floor(Math.random()*26);
    this.leftangular=Math.PI
 
    } 
    fall(){
        this.y=this.y+this.yspeed;
        this.leftangular=this.leftangular+Math.PI/180000;


        if(this.y>displayHeight){
            this.y=Math.floor(Math.random()*-1.5*displayHeight);        
        }
    }
    show(){
        fill(227, 207, 170)
        rotate(this.leftangular)
        rect(0+this.x, 0+this.y, 68,90)
        fill(0,0,0)
        textSize(60);
        textFont("Monospace");
        text(String.fromCharCode(65+this.rand),17+this.x,62+this.y)
    }
}