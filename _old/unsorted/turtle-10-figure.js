/* Нарисуйте 10 вложенных правильных многоугольников. Используйте функцию, рисующую правильный n-угольник. Формулы для нахождения радиуса описанной окружности. */

function drawFigure(length, count) {
    var st = 180/count;
    Turtle.turnLeft(st);
    for(var i=0; i<count; i++) {
        Turtle.moveForward(length);
        Turtle.turnLeft(st*2);
    }
    Turtle.turnRight(st);
}

function sinAngle(angle) {
    angle *= Math.PI/180;
    return Math.round(Math.sin(angle)*1000)/1000;
}

function figureRadius (length, coals) {
    return length / 2 / sinAngle(360/2/coals);
}

function nextLength(radius, coals) {
    var length = radius*2*sinAngle(180/coals);
    return length;
}

function stepRigth (x) {
    Turtle.turnRight(90);
    Turtle.penUp();
    Turtle.moveForward(x);
    Turtle.penDown();
    Turtle.turnLeft(90);
}

function startDraw(len, cou, step, figure) {
    for(var i=0; i<figure; i++){
        drawFigure(len, cou);
        stepRigth(step);
        var radius = figureRadius(len,cou)+step;
        cou+=1
        len = nextLength(radius, cou);
    }
}

var len = 30;
var cou = 3;
var step = 15;
var figure = 10;

startDraw(len, cou, step,figure);

// спираль закругленная

function drawFigure(length, count) {
    var st = 180/count;
    Turtle.turnLeft(st);
    
    for(var i=0; i<count*10; i++) {
        Turtle.moveForward(length);
        Turtle.turnLeft(st*2);
        length+=0.01;
    }
    
    Turtle.turnRight(st);
}

drawFigure(0.1, 100);

//спираль угловатая

function drawFigure(length, count) {
    var st = 180/count;
    Turtle.turnLeft(st);
    
    for(var i=0; i<count*10; i++) {
        Turtle.moveForward(length);
        Turtle.turnLeft(st*2);
        length+=5;
    }
    
    Turtle.turnRight(st);
}

drawFigure(3, 4);

// рисуем цветок

function drawFigure(length, count, minus) {
    var st = minus*180/count;
    Turtle.turnLeft(st);
    
    for(var i=0; i<count; i++) {
        Turtle.moveForward(length);
        Turtle.turnLeft(st*2);
        
    }
    Turtle.turnRight(st);
}

function drawFlower (length, count) {
    var minus = 1;
    for(var i = 0; i<3; i++) {
        drawFigure(length,count,minus)
        minus = -1;
        drawFigure(length,count,minus)
        Turtle.turnRight(120);
        minus = 1;
    }
}

drawFlower(5,60);

// Пружиина

function drawFigure(length, count, minus) {
    var st = minus*180/count;
    Turtle.turnLeft(st);
    
    for(var i=0; i<count/2; i++) {
        Turtle.moveForward(length);
        Turtle.turnLeft(st*2);
        
    }
    Turtle.turnRight(st);
}

function drawFlower (length, count) {
    var minus = 1;
    for(var i = 0; i<4; i++) {
        drawFigure(length,count,minus)
        drawFigure(length/4,count,minus)
    }
}

drawFlower(5,60);

// звезда 11

function drawFigure(length, count) {
    var st = 360/count*5;
    for(var i=0; i<count; i++) {
        Turtle.moveForward(length);
        Turtle.turnLeft(st);
    }
}

drawFigure(300,11);


// звезда 5