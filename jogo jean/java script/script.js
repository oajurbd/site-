// Lista de palavras corretas
const palavrasCorretas = ["avião", "navio", "casa", "gato", "princesa", "cachorro", "cavaleiro"]; // Adicione as palavras correspondentes às imagens
const coresDeFundo = ["#FFDDC1", "#C1E1FF", "#C1FFD7", "#ffc1c1", "#fff9c1", "#c1fffa", "#e8c1ff"];  // Adicione cores para cada imagem

// Índice da imagem atual no carrossel
let imagemAtual = 0;

// Função para verificar a palavra digitada
function verificarPalavra() {
    const userInput = document.getElementById('userInput').value.toLowerCase();
    const resultado = document.getElementById('resultado');

    if (userInput === palavrasCorretas[imagemAtual].toLowerCase()) {
        resultado.textContent = "Correto!";
        resultado.style.color = "green";

        // Avança para a próxima imagem
        proximaImagem();
    } else {
        resultado.textContent = "Incorreto. Tente novamente.";
        resultado.style.color = "red";
    }
}

// Função para avançar para a próxima imagem no carrossel
function proximaImagem() {
    // Incrementa o índice da imagem
    imagemAtual++;

    // Verifica se ainda há mais imagens
    if (imagemAtual < palavrasCorretas.length) {
        // Atualiza a imagem exibida no carrossel
        document.getElementById('imagemCarrossel').src = `./imagemCarrossel/imagem${imagemAtual + 1}.jpg`;
        // Limpa o campo de input e o resultado
        document.getElementById('userInput').value = "";
        document.getElementById('resultado').textContent = "";

        document.body.style.backgroundColor = coresDeFundo[imagemAtual];

    } else {
        // Se não houver mais imagens, exibe uma mensagem de conclusão
        document.getElementById('resultado').textContent = "Parabéns! Você concluiu todas as palavras.";
        document.getElementById('userInput').disabled = true;
        document.getElementById('userInput').style.display = 'none';  // Esconde o campo de input
        document.getElementById('reiniciarBtn').style.display = 'block';  // Mostra o botão de reiniciar
        document.getElementById('verificarBtn').style.display = 'none';
    }
}


// Função para reiniciar o jogo
function reiniciarJogo() {
    imagemAtual = 0;
    document.getElementById('imagemCarrossel').src = `./imagemCarrossel/imagem1.jpg`;  // Reinicia para a primeira imagem
    document.getElementById('userInput').value = "";  // Limpa o campo de input
    document.getElementById('resultado').textContent = "";  // Limpa o resultado
    document.getElementById('userInput').disabled = false;  // Habilita o campo de input novamente
    document.getElementById('userInput').style.display = 'block';  // Exibe o campo de input
    document.getElementById('reiniciarBtn').style.display = 'none';  // Esconde o botão de reiniciar
    document.getElementById('verificarBtn').style.display = 'block';

    document.body.style.backgroundColor = coresDeFundo[0];
}
