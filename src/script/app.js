let l = new Function("mensage", "console.log(mensage)");

let textoEntradaUsuario = document.getElementById("areaDoTexto1");

let textoSaida = document.getElementById("areaDoTexto2");
let mensagem = document.getElementById("paginaMensagem");
let paginaSaida = document.getElementById("paginaCriptografia");

padraoCaracteres();

function ativaCriptografia(){
    textoSaida.value = textoEntradaUsuario.value;
    criptografar();
    mostrarPaginas();
    textoEntradaUsuario.value = "";
}


function criptografar(){
    let criptografar = textoEntradaUsuario.value;
    textoSaida.value = criptografar.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat").replace(/ /g,"cq");   
}

function desativaCriptografia(){
    let descriptografar = textoEntradaUsuario.value;
    textoSaida.value = descriptografar.replace(/enter/g,"e").replace(/ai/g,"a").replace(/imes/g,"i").replace(/ober/g,"o").replace(/ufat/g,"u").replace(/cq/g," ");
    mostrarPaginas();
    textoEntradaUsuario.value = "";

}

function mostrarPaginas(){
        if (textoEntradaUsuario.value == "") {
            mensagem.classList.add("selecionado");
            paginaSaida.classList.remove("selecionado");
        }else {
            mensagem.classList.remove("selecionado");
            paginaSaida.classList.add("selecionado");
        }
}

function copiar(){
    navigator.clipboard.writeText(textoSaida.value);
    alert("Texto copiado com sucesso!!");
    mostrarPaginas();
}

function padraoCaracteres (){
    addEventListener("keypress",function(ativar){
        console.log(ativar);
        if(negarCaracteres(ativar)){
            ativar.preventDefault();
        }
    });
}

function negarCaracteres(letra){
    let caracteresCode = letra.key;
    let negar = new RegExp("[^a-z ]+$");
    if(negar.test(caracteresCode)){
        return true;
    }
}