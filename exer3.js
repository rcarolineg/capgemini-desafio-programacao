function anagramas(string) {
    let palavra = [];
    let contador = 0;
  
    for (let i = 0; i < string.length; i++) {
        for (let j = i + 1; j < string.length + 1; j++) {
            palavra.push(string.substring(i, j).split("").sort().join(""));
        }    
    }  
    for(let i = 0; i < palavra.length - 1; i++) {
        for(let j = i + 1; j < palavra.length; j++) {
            if(palavra[i] == palavra[j]) {
                contador++;                  
            } 
        }
    }
    console.log(contador);
}


anagramas("ovo");
anagramas("ifailuhkqq"); 
