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