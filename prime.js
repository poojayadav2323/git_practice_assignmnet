function check_prime(num){
    let count=0;
    for(let i=1; i<=num; i++){
        if(num%1==0){
            count++;
        }
    }
    if(count==2){
        console.log("prime")
    }else{
        console.log("not prime")
    }
}
check_prime(13);