var sayNode = function() {
    console.log("Node");
}

var oldObject = {
    sayJs : function() {
        console.log("JS");
    },
    sayNode : sayNode,
}

console.log(oldObject);