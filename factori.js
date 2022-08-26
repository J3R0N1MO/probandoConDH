function factorear(numero){

    let coleccion = [1];
    let primo=false;
    
    /*for(let i = 2, s = Math.sqrt(numero); i <= s; i++)
        if(num % i === 0); 
        if (num > 1) 

        
    */
    i = 2;
    
    while (!(numero===1)) {
        
        if (numero%i === 0){
            coleccion.push(i)
            numero/= i;
        }
        else{
            i++;
        }
    }

    return coleccion;
}


console.log(factorear(45));