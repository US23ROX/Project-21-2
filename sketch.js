var box;
var surface1, surface2, surface3, surface4;
var edge1, edge2, edge3; 

function setup(){
    createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(20,590,175,20);
    surface1.shapeColor="red";

    surface2 = createSprite(215,590,175,20);
    surface2.shapeColor="blue";

    surface3 = createSprite(390,590,175,20);
    surface3.shapeColor="yellow";

    surface4 = createSprite(565,590,175,20);
    surface4.shapeColor="green";

    edge1 = createSprite(790,300,20,800);
    edge2 = createSprite(10,300,20,800);
    edge3 = createSprite(300,10,800,20);



    //create box sprite and give velocity
    box = createSprite(Math.round(random(20,750)),200,30,30);
    box.velocityX = 3;
    box.velocityY = 3;

}

function draw() {
    background("white");
    
    //create edgeSprite

    box.bounceOff(edge1);
    box.bounceOff(edge2);
    box.bounceOff(edge3);
    

    if(box.isTouching(surface1)){
        box.bounceOff(surface1);
        box.shapeColor="red"
    }

    if(box.isTouching(surface2)){
        box.bounceOff(surface2);
        box.shapeColor="blue"
    }

    if(box.isTouching(surface3)){
        box.bounceOff(surface3);
        box.shapeColor="yellow"
    }

    if(box.isTouching(surface4)){
        box.bounceOff(surface4);
        box.shapeColor="green";

        drawSprites();
    }



    //add condition to check if box touching surface and make it box
}
