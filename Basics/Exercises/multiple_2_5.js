function sum(limit){
    sum =0;
    for(let i=1; i<=limit; i++){
        if(i % 3 ===0) 
            sum+=i;

        if(i % 5 ===0)
            sum+= i;
    }
return sum;
}

console.log(sum(15));