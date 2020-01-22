"use strict";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var List =
/*#__PURE__*/
function () {
  function List() {
    _classCallCheck(this, List);

    this.data = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
      console.log(this.data);
    }
  }]);

  return List;
}();

var TodoList =
/*#__PURE__*/
function (_List) {
  _inherits(TodoList, _List);

  function TodoList() {
    var _this;

    _classCallCheck(this, TodoList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TodoList).call(this));
    _this.usuario = 'Marcelo';
    return _this;
  }

  _createClass(TodoList, [{
    key: "mostraUsuario",
    value: function mostraUsuario() {
      console.log(this.usuario);
    }
  }]);

  return TodoList;
}(List);

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
  MinhaLista.add('Novo todo');
};

MinhaLista.mostraUsuario(); // EXEMPLO METODO ESTATICO

var Matematica =
/*#__PURE__*/
function () {
  function Matematica() {
    _classCallCheck(this, Matematica);
  }

  _createClass(Matematica, null, [{
    key: "soma",
    value: function soma(a, b) {
      return a + b;
    }
  }]);

  return Matematica;
}();

console.log(Matematica.soma(1, 2));
var a = 1; // a = 3; NÃO É POSSIVEL REATRIBUIR VALOR EM CONST

var usuario = {
  nome: 'Marcelo'
};
usuario.nome = 'Diego';
console.log(usuario); //MUTAÇÃO É POSSIVEL EM CONST

function teste(x) {
  var y = 2; //LET  FUNCIONA SOMENTE NO ESCOPO

  if (x > 5) {
    var _y = 4;
    console.log(x, _y);
  }
}

teste(10); //console.log(y); //NÃO CONSEGUE VER O Y POR NÃO ESTAR NO ESCOPO

var arr = [1, 3, 4, 5, 8, 10];
var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr); //SOMO DE TODO ARRAY

var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum); //RETORNA TODOS OS NÚMERO PARES DO ARRAY

var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter); //PROCURA UM ITEM DENTRO DO ARRAY

var find = arr.find(function (item) {
  return item === 4;
});
console.log(find); //ARROW FUNCTIONS

var arr2 = [1, 3, 4, 5, 6];
var newArr2 = arr.map(function (item) {
  return item * 2;
}); //DIMINUIU BASTENTE O CODIGO

console.log(newArr2);

var teste2 = function teste2() {
  return {
    nome: 'Marcelo'
  };
};

console.log(teste2());

var soma = function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
}; //VALORES PADRÃO NUMA FUNCAO DE SOMA


console.log(soma(1, 2)); //3

console.log(soma(1)); //7

console.log(soma()); //9

var usuario2 = {
  nome: 'Marcelo',
  idade: 26,
  endereco: {
    cidade: 'Biguaçu',
    estado: 'SC'
  }
}; //const nome = usuario2.nome;
//const idade = usuario2.idade;
//const cidade = usuario2.endereco.cidade;
//CONCEITO DE DESESTRUTURAÇÃO

var nome = usuario2.nome,
    idade = usuario2.idade,
    cidade = usuario2.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostraNome(usuario2); // REST

var usuario3 = {
  nome3: 'Marcelo',
  idade3: 26,
  empresa3: 'TrustTech'
};

var nome3 = usuario3.nome3,
    resto = _objectWithoutProperties(usuario3, ["nome3"]);

console.log(nome3);
console.log(resto); //resto do objeto

var arr3 = [1, 2, 3, 4];
var a3 = arr3[0],
    b3 = arr3[1],
    c3 = arr3.slice(2);
console.log(a3);
console.log(b3);
console.log(c3); //resto do objeto

function soma3(a, b, c) {
  return a + b;
}

console.log(soma3(1, 3, 4));
