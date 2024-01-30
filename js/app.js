let amigos = [];

// Adicionando amigos em 'amigos incluidos'
function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo');
        if(nomeAmigo.value == ''){
            alert('Informe o nome do amigo!');
            return;
        } else if (amigos.includes(nomeAmigo.value)){
            alert('Nome já adicionado');
            return;
        }
    let lista = document.getElementById('lista-amigos');
    amigos.push(nomeAmigo.value);
    if(lista.textContent == ''){
        lista.textContent = nomeAmigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + nomeAmigo.value;
    }
    nomeAmigo.value = '';
    nomeAmigo.focus();
    atualizarLista();
    atualizarSorteio();
   
}


// Sorteando os amigos
function sortear() {
    if (amigos.length < 4){
        alert('Não é possivel realizar o sorteio, adicione pelo menos 4 amigos');
        return;
    }
    embaralhar(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1){
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[i + 1] + '<br/>';
        }
    }

}


// Excluindo amigos já adicionado
function excluirAmigo(){
    amigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

// Atualizando o sorteio
function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}

// Atualizando a lista
function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';


    for (let i = 0; i < amigos.length; i++) {
        // Cria um elemento de parágrafo para cada amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];
       
        // Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        });


        // Adiciona o parágrafo à lista
        lista.appendChild(paragrafo);
    }
}

// Reiniciando o sorteio
function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML ='';
    document.getElementById('lista-sorteio').innerHTML='';
}

// Função de embaralhar
function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}
