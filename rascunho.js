let lista1 = {
    nome: 'mateus',
    numero: 2
};

let lista2 = {
    nome: 'quintas',
    numero: 1
};

let lista3 = {
    nome: 'jão',
    numero: 3
};

lista = [lista1, lista2, lista3];

lista.sort(function(a, b){
    return b.numero - a.numero;
});

 lista1.data  =  1 ;

console.log(lista);

