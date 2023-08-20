function copiarTexto() {
    const conteudo = document.getElementById('conteudo').innerText;

    // Cria um elemento temporário (input) para copiar o texto
    const inputTemporario = document.createElement('input');
    inputTemporario.setAttribute('value', conteudo);
    document.body.appendChild(inputTemporario);

    // Seleciona o texto dentro do input temporário
    inputTemporario.select();

    // Executa o comando de cópia
    document.execCommand('copy');

    // Remove o input temporário
    document.body.removeChild(inputTemporario);

    // Mensagem de feedback (opcional)
    alert('Texto copiado para a área de transferência!');
}
