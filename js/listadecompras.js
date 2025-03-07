function cadastrarProduto() {
    var inProduto = document.getElementById("inProduto");

    var produto = inProduto.value;

    if (produto == "") {
        alert("Insira algum produto!");
        inProduto.focus();
        return;
    }

    if (localStorage.getItem("listadeProdutos")) {
        var listadeProdutos = localStorage.getItem("listadeProdutos") + ";" + produto;
        localStorage.setItem("listadeProdutos", listadeProdutos);
    } else {
        localStorage.setItem("listadeProdutos", produto);
    }
    exibirLista();

    inProduto.value = "";
    inProduto.focus();
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", cadastrarProduto);

function exibirLista() {

    var outLista = document.getElementById("outLista");


    if (!localStorage.getItem("listadeProdutos")) {
        outLista.textContent = "";
        return;
    }

    var espacos = localStorage.getItem("listadeProdutos").split(";")
    var tam = espacos.length;
    var lista = "Produtos Adicionados\n-------------------\n"
    for (i = 0; i < tam; i++) {
        lista += espacos[i] + "\n";
    }
    outLista.textContent = lista;
}

function limparLista () {
    if (confirm("Deseja realmente limpar a lista de produtos?")) {
        localStorage.removeItem("listadeProdutos");
        exibirLista();
    }
}

var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparLista);

exibirLista();