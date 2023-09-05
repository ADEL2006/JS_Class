// let Shape = function () {
//     this.stroke = 1;
//     this.color = 'white';
//     function draw() {
//         console.log("draw====>");
//     }
// }

let Shape = {
    stroke: 1,
    color: 'white',
    draw: function () {
        console.log("draw");
    }
}

let rectangle = new Shape();
let circle = new Shape();

rectangle.background_Color='green';
Shape.prototype.backgroundColor='pink';
console.log(rectangle.backgroundColor);
console.log(circle.backgroundColor);
circle.move = function(x, y){
    console.log("move: " + x + " : " + y);
}
circle.move(10,20)