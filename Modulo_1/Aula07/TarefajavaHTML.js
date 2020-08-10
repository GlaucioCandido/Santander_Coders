/* Exercicio - 1  Par ou Impar 
function ParOuImpar  (numero){
    if (numero % 2 == 0){
        console.log("Numero "+numero+"  é par ! ")
    }else{
        console.log("Numero "+numero+" é Impar ! " )
    }
}
ParOuImpar(20);
*/

/* Exercicio -2 */ 

var Nprimo = (numero) => {    
            if(numero % 2 == 0){
      console.log("O número " + numero + " não é primo.");
        }
            if(numero/numero == 1 && numero % 2 != 0){
                console.log("O número " + numero + " é primo.");
               }
                        }
Nprimo(3);
Nprimo(10);
Nprimo(7);
Nprimo(248);


/* Exercicio - 3  */ 

function Ano_Novo1(){
    console.log(" ****** Feliz Ano Novo ****** ");
}

function contagemRegressiva(){
    for(var i = 10; i > 0; i--){
            console.log(i);
        }
    Ano_Novo1();
}


/* Exercicio - 5 */ 

const contagem = new Promise((resolve, reject) => {
             for(var i = 10; i > 0; i--){
             console.log(i);
     }})
 const Ano_Novo = new Promise((resolve, reject) => {
    setTimeout(function(){
        console.log(" **** Feliz Ano Novo ****")
    }, 1000);
})
const asyncFunction = async () => {
    try{
        const Parte1 = await contagem;
        const Parte2 = await Ano_Novo;
        console.log(Parte1)
        console.log(Parte2);
    }
    catch(erro){
        console.log(erro);
    }
}
asyncFunction();


/* Exercicio - 6 */ 


var a = [5.3, 4.7, 8.5, 7.1, 6.4, 9.2, 9.8, 5.5, 7.4, 7.0];

function leitura(array){
    for(var i = 0; i < array.length; i++){
        if(a[i] > 7.0){
            console.log(a[i]);
        }
    }
}
leitura(a);

/* Exercicio - 7 */ 

var produtos = [
    {nome: "Pao", preco: 5.50},
    {nome: "Cerveja", preco: 13.10},
    {nome: "Farinha de Flocao", preco: 2.78},
    {nome: "Frango", preco: 14.00},
    {nome: "Gelatina", preco: 2.99},
    {nome: "Oleo de Soja", preco: 4.65},
    {nome: "Mussarela", preco: 15.24}
]
//console.log(produtos[0].preco);
function Vtotal(array){
    var soma = 0;
    for(let i = 0; i < array.length; i++){
        soma += array[i].preco;
    }
    console.log("Valor total das Compras é " + soma);
}
Vtotal(produtos);


/* Exercicio - 8 */
var alunos = [
    {nome: "Mike Martins", serie: 9},
    {nome: "Guilherme David", serie: 8},
    {nome: "Alexandre Macarroni", serie: 9},
    {nome: "Luan Hortencio", serie: 9},
    {nome: "Glaucio Candido", serie: 8},
    {nome: "Gustavo Otama", serie: 9},
    {nome: "Gabriel Maia", serie: 8},
    {nome: "Nilvan Borges", serie: 9},
    {nome: "Daniel Leonard", serie: 9},
    {nome: "Leandro Santos", serie: 8},
    {nome: "Bruno Alves", serie: 8},
    {nome: "Ronaldo Marques", serie: 9},
    {nome: "Alexsandro Santos", serie: 9},
]
function aulasporaluno(array){
    for(var i = 0; i < array.length; i++){
        if(array[i].serie == 8){
            console.log("A disciplina da quarta-feira de " + array[i].nome + " é História");
        }if (array[i].serie == 9) {
            console.log("A disciplina da quarta-feira de " + array[i].nome + " é Física");
        }
    }
}
aulasporaluno(alunos);
