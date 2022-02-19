let regex = /\W|_/;
let regex2 = /[A-Z]/;
let regex3 = /[a-z]/;

let senha = "12@!3sdaAs";



let testeSenha = regex.test(senha);
let testeSenha2 = regex2.test(senha);
let testeSenha3 = regex3.test(senha);

if(testeSenha == true && testeSenha2 == true && testeSenha3 == true && senha.length >=6){
    console.log("Senha ok")
}else if(senha.length <6){
    console.log("digite mais " + (6- senha.length) + " digitos");
} 
else{
    console.log("senha invalida")
}

