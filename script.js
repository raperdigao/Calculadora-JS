
// Puxando os ID do html do input
// e colocar no final .value para captura o valor que o usuario digitar
function Calcular() {

    // Previme que a pagina carregue automaticamente
    // Esta função mantém os números digitados no site
    event.preventDefault()

    // Criar variaveis e pegar os IDS do HTML
    let n1 = parseInt(document.getElementById(`num1`).value)
    let n2 = parseInt(document.getElementById(`num2`).value)
    let operacao = document.getElementById(`operacao`).value
    let resultado;

    // Validação para o usuarios não digitar palavras apenas números 

    // Nora number é NAN valida se é numero e não string - Não funcionou em aula,
    // não utilizar
    // if (NaN(n1) && NaN(n2)) {
    //     alert("Somente números")

    // }


    // Puxando informação do ID Operação
    switch (operacao) {
        case 'Somar':
            resultado = n1 + n2;
            alert(`O resultado da soma é: ${resultado}`)

            break;
        case 'Subtrair':
            resultado = n1 - n2;
            alert(`O resultado da subtração é: ${resultado}`)

            break;
        case 'Multiplicar':
            resultado = n1 * n2;
            alert(`O resultado da multiplicação é: ${resultado}`)

            break;
        case 'Dividir':
            resultado = n1 / n2;
            alert(`O resultado da divisão é: ${resultado}`)

            break;

        default:
            alert(`Opção Inválida`)
            break;
    }


}