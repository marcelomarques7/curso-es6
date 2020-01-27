class List {
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List{
    constructor(){
        super();
        
        this.usuario = 'Marcelo';
    }

    mostraUsuario(){
        console.log(this.usuario);
    }

}


var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();


// EXEMPLO METODO ESTATICO
class Matematica {
    static soma(a,b){
        return a + b;
    }
}

console.log(Matematica.soma(1,2));
const a = 1; 
// a = 3; NÃO É POSSIVEL REATRIBUIR VALOR EM CONST

const usuario = {nome: 'Marcelo'};
usuario.nome = 'Diego';
console.log(usuario);
//MUTAÇÃO É POSSIVEL EM CONST

function teste(x){
    let y =2; //LET  FUNCIONA SOMENTE NO ESCOPO

    if (x>5){
        let y = 4;
        console.log(x,y);
    }
}
teste(10);
//console.log(y); //NÃO CONSEGUE VER O Y POR NÃO ESTAR NO ESCOPO


const arr = [1, 3, 4, 5, 8, 10];

const newArr = arr.map(function(item) {
    return item * 2;
});
console.log(newArr);


//SOMO DE TODO ARRAY
const sum = arr.reduce(function(total, next){
    return total + next;
});
console.log(sum);

//RETORNA TODOS OS NÚMERO PARES DO ARRAY
const filter = arr.filter(function(item){
    return item % 2 === 0;
});
console.log(filter);

//PROCURA UM ITEM DENTRO DO ARRAY
const find = arr.find(function(item){
    return item === 4;
});
console.log(find);


//ARROW FUNCTIONS
const arr2 = [1, 3, 4, 5, 6];
const newArr2 = arr.map(item => item * 2); //DIMINUIU BASTENTE O CODIGO
console.log(newArr2);

const teste2 = () => ({nome: 'Marcelo'});
console.log(teste2());

const soma = (a = 3, b = 6) => a + b;
//VALORES PADRÃO NUMA FUNCAO DE SOMA
console.log(soma(1,2)); //3
console.log(soma(1));   //7
console.log(soma());    //9


const usuario2 = {
    nome: 'Marcelo',
    idade: 26,
    endereco:{
        cidade: 'Biguaçu',
        estado: 'SC',
    },
};
//const nome = usuario2.nome;
//const idade = usuario2.idade;
//const cidade = usuario2.endereco.cidade;
//CONCEITO DE DESESTRUTURAÇÃO
const { nome, idade, endereco: { cidade } } = usuario2;
console.log(nome);
console.log(idade);
console.log(cidade);
function mostraNome({nome, idade}){
    console.log(nome,idade);
}
mostraNome(usuario2);


// REST
const usuario3 = {
    nome3: 'Marcelo',
    idade3: 26,
    empresa3: 'TrustTech'
};
const { nome3, ...resto } = usuario3;
console.log(nome3);
console.log(resto); //resto do objeto

const arr3 = [1, 2, 3, 4];
const [ a3, b3, ...c3 ] = arr3;

console.log(a3);
console.log(b3);
console.log(c3); //resto do objeto

function soma3(a, b, c){
    return a + b;
}

console.log(soma3(1, 3, 4));

function soma4(...params){
    return params.reduce((total, next) => total + next);
}
console.log(soma4(1,3,4));

// SPREAD
const arr4 = [1,2,3];
const arr5 = [4,5,6];
const arr6 = [...arr4, ...arr5];
console.log(arr6);

const usuario4 = {
    nome: 'Marcelo',
    idade: 26,
    empresa: 'Rocketseat',
};
const usuario5 = {...usuario4, nome: 'Diego'};
console.log(usuario5);

//Template Literals
const nome4 = 'Marcelo';
const idade4 = 26;

console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos.');
console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);

//Object Short Syntax
const usuario6 = {
    nome4,
    idade4,
    empresa: 'TrustTech',
};
console.log(usuario6);

//IMPORTAR
import { somateste, sub } from './funcoes';
console.log(somateste(1,2));
console.log(sub(4,2));