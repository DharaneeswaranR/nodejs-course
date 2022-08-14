const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Something wrong")
    }, 2000)
})

doWorkPromise.then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})


//
//                        Fulfilled
//                       /
//  Promise -> Pending -> 
//                       \
//                        Rejected
//