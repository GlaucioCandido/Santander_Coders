/* exercicio - 1 */
var numpos = 20;
var numnev = -30;
var numdec = 100;
var namestr = "Glaucio";
var nonulo = "X";

/* Exercicio - 2 */
console.log(numpos);
console.log(numnev);
console.log(numdec);
console.log(namestr);
console.log(nonulo);

/* Exercicio - 3  Contatenar*/
var nome="Glaucio";
var sobrenome="Candido";
var todos=nome+" "+sobrenome  /* joguei o valor da contatenação em uma nova variavel todos */
console.log(todos);
console.log(nome+" "+sobrenome);

/* Exercicio - 4 */
var nome1="Clara";
console.log(nome1);
/* Erro por que a variavel para imprimir nao  existe "Nome" com N maiusculo*/

/* Exercicio - 5 */
var nome2 = "Clara";
console.log(nome2, sobrenome);
/* Pegou o sobrenome declarado anteriormente, se tivesse deixado a variavel com nome nome, ele iria 
soprepor o valor da variavel pela ultima declarada*/


/*Exercicio - 6 */
var texto="Digital House, a escola de programação que forma novas gerações de coders e profissionais digitais para imaginar, inovar e criar o que sempre sonharam";
console.log(texto) ;



/*/ valor nulo*/
var varia1;
var varia2= null;
console.log(varia1);
console.log(varia2);

/* array*/

var frutas=["banana","abacaxi","goiaba","manga","uva"];
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);



/*     IF */
var idade = 18;
if (idade > 18){
    console.log("Maior de idade!");
}else{
    console.log("Menor de idade!");
}
