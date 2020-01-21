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