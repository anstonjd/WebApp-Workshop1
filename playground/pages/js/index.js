
// console.log("start");
// const myPromise = new Promise(  (res, rej) => {
//      setTimeout(() => {
//           res("wait finissh")
//     }, 3000);
// })  

// myPromise
//     .then((data) => {
//         console.log(data);
//         console.log("end");
//     })
//     .catch((err) => {
//         console.log(err.message);
//     })

//     console.log("yes finsied");


// async function demo() {
//     console.log("Data");
// }
// console.log(demo());




// async function demo() {
//     setTimeout(() => {
//         console.log("inside async function");
//     }, 3000)
// }
// async function main(){
//     console.log("start");
//     await demo()
//     console.log("End");
// }
// function end(){

// }

// main()

demo = new Promise((res, rej) => {
    setTimeout(() => {
        console.log("inside async function");
        res();
    }, 3000)
    
})
async function main() {
    console.log("start");
    await demo.then(() => {
        console.log("end");
    })

}


main()

