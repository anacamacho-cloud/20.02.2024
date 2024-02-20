var variavel1 = "valor somente leitura";//const é outra forma de declarar uma variável que não pode ser mudada so lida
var variavel2 = "valor editável";

try {
    variavel1="valor não permitido";
    console.log("A variavel2 foi alterada para:", variavel1)
} catch (e){// o (e) é uma variável de erro
    console.error("Ops! ocorreu um erro",e);
}

try {
    variavel2="valor permitido";
    console.log("A variavel2 foi alterada para:", variavel2)
} catch (e){
    console.error("Ops! ocorreu um erro",e);
}