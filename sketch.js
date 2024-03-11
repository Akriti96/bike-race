var canvas
var backgroundImage
var bgImg 
var database
var form,player,game
var playerCount,gameState


function preload() {
    backgroundImage=loadImage("images/background1.png")
}

function setup(){
    canvas= createCanvas(windowWidth,windowHeight)
    database= firebase.database()
    // console.log(database)

    game= new Game()
    game.start()


}
function draw(){
    background(backgroundImage)

}