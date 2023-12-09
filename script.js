
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

    // Criar variavel resultdo para realizar a operação escolhida
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


            // Altera os numeros do resultado e também altera o texto, igual ao show de botões. *********************** iTEM IMPORTANTE - ATENÇÃO ***************************
            // Mostra o resultado innerHTML
            document.getElementById('resultado').innerHTML = resultado


            break;
        case 'Subtrair':
            resultado = n1 - n2;


            // Altera os numeros do resultado e também altera o texto, igual ao show de botões. *********************** iTEM IMPORTANTE - ATENÇÃO ***************************
            // Mostra o resultado innerHTML
            document.getElementById('resultado').innerHTML = resultado

            break;
        case 'Multiplicar':
            resultado = n1 * n2;


            // Altera os numeros do resultado e também altera o texto, igual ao show de botões. *********************** iTEM IMPORTANTE - ATENÇÃO ***************************
            // Mostra o resultado innerHTML
            document.getElementById('resultado').innerHTML = resultado

            break;
        case 'Dividir':


            // Criar condição se for calcular numeros dividido por zero
            if (n1 == 0 || n2 == 0) {

                // criar uma variavel para uma mensagem de que Não é possivel dividir por 0
                const resp = 'Não é possivel dividir por 0. '
                document.getElementById('resultado').innerHTML = resp


            }
            else {
                resultado = n1 / n2;

                // Altera os numeros do resultado e também altera o texto, igual ao show de botões. *********************** iTEM IMPORTANTE - ATENÇÃO ***************************
                // Mostra o resultado innerHTML
                document.getElementById('resultado').innerHTML = resultado



            }
            break;

        default:
            alert(`Opção Inválida`)
            break;
    }

}






