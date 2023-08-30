var sayNode = function() {
    console.log("Node");
}

var num = 1;

var oldObject = {
    sayJs : function() {
        console.log("JS");
    },
    sayNode : sayNode,
}
oldObject.sayJs();

console.log(oldObject);