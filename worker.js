onmessage= (message)=>{
    console.log('worker has started working')
    
    let total = 0;
    for (let i = 0; i < 10000000000; i++) {
        total += i;
        
    }
    
    console.log('worker has finished working')

    postMessage(total)
}