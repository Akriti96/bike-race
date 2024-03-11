class Form{
    constructor(){
        this.input= createInput("").attribute("placeholder","Enter Your Name")
        this.playButton= createButton("Click")
    }
    setPosition(){
        this.input.position(width/2-50,height/2)
        this.playButton.position(width/2,height/2+50)
    }
    setElementStyle(){
        this.input.class("customInput")
      
    }
    display(){
        this.setPosition()
        this.setElementStyle()
        
    }
}