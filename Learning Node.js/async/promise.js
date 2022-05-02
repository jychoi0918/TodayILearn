// Producer

const promise = new Promise((resolve, reject)=>{
    console.log("doing something...");
    setTimeout(()=>{
        resolve("짜요니");
    },2000);
});

// 2 Consumers
promise.then(value =>{
    console.log(value)
})