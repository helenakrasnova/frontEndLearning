window.onload = function () {
//promise
// let item = (item)=>item+2;
// function a(item){
//     console.log(item);
// }
// a(item(2));
// let promise = new Promise(function (resolve, reject) {
//     let x = prompt('hi', 50);
//     if (x > 10) resolve('true');
//     reject('false');
// });
// //resolve = true
// //reject = false
// promise.then((value) => {
//     console.log(value);
// }).catch((value) => {
//     console.log(value);
// });
// console.log(promise);


const ajax = (url, params) => {
    return new this.Promise((resolve, reject) => {
        let xhr = new this.XMLHttpRequest();
        xhr.open(params.method, url, params.async);
        xhr.send();
        xhr.onload = function () {
            resolve(JSON.parse(xhr.response));
        }
        xhr.onerror = function () {
            reject(JSON.parse(xhr.response));
        }
    })
}
ajax('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    async: true,
}).then((value) => {
    console.log(value);
    let id = value[78].userId;
}).catch((error) => {
    console.log(error);
})
}