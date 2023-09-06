function outerFunc(){
    var x=10;
    var innerFunc=function(){console.log(x);};
    innerFunc;
}

var inner = outerFunc();
inner();

var a=10;
function add() {
    a=a+1;
    console.log(a);
}