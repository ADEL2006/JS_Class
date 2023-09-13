function helloWorld() {
    console.log('hello world');
    helloNode();
}

function helloNode() {
    console.log('hello node');
}

helloWorld();
console.log(__filename);
console.log(__dirname);