let num = 1;
setInterval(()=> {
    console.log(num++);
},1000); //1000ms = 1 초


setTimeout(()=>{
    console.log('Timeout!!!');
    clearInterval(interval);
},4000);