function getData(callbackFunc) {
    let result = true;
    // callback(result, callbackFunc);
    if (callbackFunc) {

    }

}

var callbackFunc1 = function (result) {
    return new Promise((resolve, reject) => {
        if (result) {
            resolve(result);
        } else {
            reject(result)
        }
    })
}

var callbackFunc2 = function (response) {
    console.log(response);
}
getData()
    .then(response => callbackFunc1(response))
    .then(response => callbackFunc2(response))
    .catch((error) => {
        console.log(error);
    });

function getData_await() {
    try {
        let result = await getData();
        result = await callbackFunc1(result);
        if (result) {
            console.log("success");
            console.log(result);
        }
    }catch(error) {
        console.log("failed");
        console.log(error);
    }
}
getData_await();