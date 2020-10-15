/*
//Declaração de variavel
//Quando for texto coloca "" e numero só adiciona
var nome = "Nicolas Lira";
//Var idade e idade2 são int
var idade = 16;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo"
Aqui as variaveis idade3 e idade4 são string, então se eu contatenar junta os numeros, não os soma
var idade3 = "16";
var idade4 = "14";

// Alerta
alert("Bem vindo " + nome + " Tem " + idade + [Concatenação de texto com +] " anos");
//Fazendo soma no alert

alert(idade + idade2);

//inspecionar elemento - em console conseguimos ver essa modificação. EXECULTA NO NAVEGADOR
console.log(nome);
console.log(idade + idade2);
//Estou trocando a palavra Japão pro brasil
console.log(frase.[Aqui troca]replace("Japão", "Brasil"));
//Deixa tudo em maiusculo
console.log(frase.toUpperCase());
//Deixa tudo em minusculo
console.log(frase.toLowerCase());
//Multiplicação *
console.log(idade * idade2);
//divisão 
console.log(idade/idade2);
//Soma
console.log(idade + idade2);
//subtração
console.log(idade - idade2);

****************************************************************
ARRAY
Escolhendo o que mostrar, posição
var lista = ["maça", "pêra", "laranja"];
lista.push("Uva"); Adicionando novo item na lista como ultimo elemento
lista.pop() tiro item da lista
console.log(lista[[Aqui eu escolho a posição para exibir]2]);
alert(lista[0]);
console.log(lista.length); Ver tamanho da lista, quantidade de itens
console.log(lista.reverse()); mostrar de forma reversa a lista, de trás para frente
console.log(lista.toString()); Transforma tudo em string.
console.log(lista.join(" - ")); Comando que separa os itens da ARRAY ao ser tranformado em string


DICIONARIO
var fruta = {nome:"maça", cor:"vermelha"}; Declarando dicionario fruta
console.log(fruta); Exibe todo dicionario
console.log(fruta.cor); Exibe apenas cor

bLISTA DE DICIONARIOS
var frutas = [{nome:"Maça",cor:"Vermelha"},{nome:"Banana", cor:"Amarelo"},{nome:"Pêra",cor:"Verde/Amarelo"}]
console.log(frutas); Exibe a lista de dicionarios
console.log(frutas[1].nome) Exibe apenas o item com numero da lista e nome do que será exibido


************************************************************

CONDICIONAIS, LAÇOS DE REPETIÇÃO E DATE

CONDICIONAIS = IF

var idade = prompt("Qual sua idade ?"); Faz uma pergunta, exibe o texto e uma caixa para receber o valor
if [SE] ([condição idade] >= 18) {
    alert("Maior de Idade"); [Comandos]
}else [Senão]{
    alert("Menor de idade"); [Comando]
};

LAÇOS DE REPETIÇÃO WHIRE E FOR
 
var caut = 0;
while [Enquanto] ([Condição] caut <5) {
    console.log(caut); [Comando]
    caut++;
    
};

var valor;

for (valor = 0 [Valor inicial]; valor < 5 [Condição]; valor++ [O que vai fazer]) {
    console.log(valor);
    
};

********************************************************************

DATE

var d = new Date();
alert(d.getMonth()+1); Exibir mês
alert(d.getMinutes()); Mostra minutos
alert(d.getDay());Exibe o dia
alert(d.getHours()); exibe as horas

********************************************************************* 

FUNÇÕES

function [Nome da função]soma(n1, n2[Parametros]) {
    return [Retorna= ] n1 + n2;
}

alert(soma[Chama função] ([Parametros] 5,10)); 

function setReplase(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome);
}
alert(setReplase("Vai Japão", "Japão",  "Brasil"))

*************EXEMPLOS**************
*/

/*
function botao() {
    document.getElementById("agradecimento").innerHTML = "<b>obrigado por clicar</b>"; //Troca o html, busca o documento com id e troca ele.
    //console.log(ag);
    //alert("Obrigado por clicar");
};

function redirecionar() {
    //window.open("https://developer.mozilla.org/pt-BR/docs/Web/API/Element/innerHTML"); abre em uma nova janela
    //window.location.href =("https://developer.mozilla.org/pt-BR/docs/Web/API/Element/innerHTML"); Abre na pagina local
}
*/
function trocar(elemento) {
    elemento.innerHTML = "<p>Obrigado por passar o mouse</p>";
}

function volta(elemento) {
   elemento.innerHTML = "<p>Passe o mouse</p>";
}

function charce(elemento) {
    alert(elemento.value);
    
}

