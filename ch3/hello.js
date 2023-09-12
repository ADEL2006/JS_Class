function Hello() {
    console.log("Hello");
    Node();
}
var Hello1 = () => {
    console.log("Hello");
    (()=>{
        console.log("Node");
    })();
}
function Node(){
    console.log("Node");
}

Hello_arrow();