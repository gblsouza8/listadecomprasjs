function cadastrarProduto() {
    var inProduto = document.getElementById("inProduto");

    var produto = inProduto.value;

    // se o produto estiver em branco, exibe alerta e volta ao campo para digitar
    if (produto == "") {
        alert("Insira algum produto!");
        inProduto.focus();
        return;
    }

    // caso ja exista uma listadeprodutos salva no localstorage, irá adicionar o novo produto com um ; antes dele
    if (localStorage.getItem("listadeProdutos")) {
        var listadeProdutos = localStorage.getItem("listadeProdutos") + ";" + produto;
        localStorage.setItem("listadeProdutos", listadeProdutos);
        // caso não exista, irá somente adicionar o novo produto
    } else {
        localStorage.setItem("listadeProdutos", produto);
    }
    exibirLista();
    // limpa o campo para digitar após o produto ser adicionado e foca nele
    inProduto.value = "";
    inProduto.focus();
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", cadastrarProduto);

function exibirLista() {

    var outLista = document.getElementById("outLista");

    // caso nao exista nada armazenado no localstorage, irá exibir um espaço vazio
    if (!localStorage.getItem("listadeProdutos")) {
        outLista.textContent = "";
        return;
    }

    // separa a lista de produtos do localstorage utilizando os ;
    var espacos = localStorage.getItem("listadeProdutos").split(";")
    // armazena a quantidade de ; que tem na lista na variavel tam
    var tam = espacos.length;
    // inicia a variavel que irá ficar a mensagem a ser exibida
    var lista = "Produtos Adicionados\n-------------------\n"
    // percorre por toda a lista e adiciona os produtos separados pelo ";" + uma quebra de linha
    for (i = 0; i < tam; i++) {
        lista += espacos[i] + "\n";
    }
    // altera o conteudo do id outLista
    outLista.textContent = lista;
}

function limparLista () {
    // pergunta se o usuario realmente deseja limpar a lista e caso a resposta seja sim, limpa a lista
    if (confirm("Deseja realmente limpar a lista de produtos?")) {
        localStorage.removeItem("listadeProdutos");
        exibirLista();
    }
}

var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparLista);

// roda a função exibirlista sempre que a pagina carega
exibirLista();