function getData(callbackFunc) {
    let result = true;
    callback(result, callbackFunc);
}

var callbackFunc1 = function(response, callbackFunc){
    if (response==true) {
        callbackFunc1(response);
    } else{
        console.log("callbackFunc1 Error")
    }
}

var callbackFunc2 = function(response){
    console.log(response);
}
getData(callbackFunc1);