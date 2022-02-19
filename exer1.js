let lista = [];


let degraus = 7;

for(i=0; i<=degraus;i++){
    let espacos = degraus - 1;
    lista.push(" ".repeat(espacos) + "*".repeat(i));
}

for(i=0;i<lista.length;i++){
    console.log(lista[i]);
}


