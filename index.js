//console.log('Benvindo a barbearia Alura')

//Variável Comum
var nome = 'Oswaldo'
console.log(nome)

//Arrays
var saladaDeFrutas = ['banana', 'maça', 'pera', 'uva', 'acerola']
alert(saladaDeFrutas[0]) //o indice [0] sinaliza qual item da lista (array) será visualizado
saladaDeFrutas.push('graviola') // adiciona itens no final da lista
saladaDeFrutas.pop() // retira o ultimo item da lista
saladaDeFrutas.shift() //retira o primeiro item da lista
saladaDeFrutas.unshift('jabuticaba') //adiciona itens ao começo da lista
saladaDeFrutas.reverse() //inverte a ordem atual da lista
//saladaDeFrutas.sort() //organiza a lista em ordem alfabetica

console.log(saladaDeFrutas.length) //mostra o numero e itens na lista
console.log(saladaDeFrutas) //mostra todos os itens da lista
console.log(saladaDeFrutas.toString()) //transforma a lista em texto
console.log(saladaDeFrutas.join('# ')) //juntar os elementos da lista com algo entre eles

//Objeto
var pessoa = {
  idade: 30,
  nome: 'Ricardo',
  casado: true,
  andar: function () {
    alert('andando')
  }
}
alert(pessoa.nome, pessoa.andar()) // ou alert(pessoa["nome"])s

//Operações matemáticas
var x = 10,
  y = 13,
  z = 4
var resultadoSoma = x + y + z
console.log(resultadoSoma)

//Funções
function alerta(mensagem) {
  alert(mensagem)
}
function metade(num) {
  return num / 2 // o return pode ser usado para armazenar um resultado sem que seja necessário exibi-lo
}
alerta('A metade de 15 é: ' + metade(15)) //chamar a função

function soma(a, b) {
  console.log(a + b)
}
soma(3, 6)

//Strings
var txt = " Pegou fOgo na caixa d'agua fogo " //  usa-se \ antes de um caractere especial para não interpreta-lo como simbolo js
console.log(txt.length) //mostra o numero de caracteres da variavel
console.log(txt.indexOf('fogo')) // txt.search faz a mesma função//encontra em qual caractere está a primeira ocorrencia da palavra
console.log(txt.lastIndexOf('fogo')) //encontra em qual caractere está a ultima ocorrencia da palavra
console.log(txt.slice(3, 10)) // txt.substring faz a mesma função //extrai partes da string dentro de dois parametros
console.log(txt.substr(3, 10)) // primeiro parametro diz qual caractere começar, e o segundo quantos caracteres pegar
console.log(txt.replace('fogo', 'ar')) // muda o primeiro parametro pelo segundo
console.log(txt.toUpperCase()) // converte o texto em letras MAIUSCULAS
console.log(txt.toLocaleLowerCase()) // converte texto para letras minusculas

//  Numeros
