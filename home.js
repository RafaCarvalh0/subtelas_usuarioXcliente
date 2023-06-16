document.addEventListener("DOMContentLoaded", function () {
    const btnFuncionarios = document.getElementById("btnFuncionarios");
    const btnClientes = document.getElementById("btnClientes");
    const subTelaFuncionarios = document.getElementById("subTelaFuncionarios");
    const subTelaClientes = document.getElementById("subTelaClientes");
    const formFuncionarios = document.getElementById("formFuncionarios");
    const formClientes = document.getElementById("formClientes");
    const listaFuncionarios = document.getElementById("listaFuncionarios");
    const listaClientes = document.getElementById("listaClientes");

    btnFuncionarios.addEventListener("click", function () {
        subTelaFuncionarios.classList.add("active");
        subTelaClientes.classList.remove("active");
    });

    btnClientes.addEventListener("click", function () {
        subTelaClientes.classList.add("active");
        subTelaFuncionarios.classList.remove("active");
    });


    // Funcionalidade de adicionar funcionário
    document.getElementById("formFuncionarios").addEventListener("submit", function (event) {
        event.preventDefault();

        const nomeCompleto = document.getElementById("nomeCompletoFunc").value;
        const cpf = document.getElementById("cpfFunc").value;
        const email = document.getElementById("emailFunc").value;
        const funcao = document.getElementById("funcaoFunc").value;

        const funcionario = {
            nomeCompleto,
            cpf,
            email,
            funcao
        };

        const listaFuncionarios = document.getElementById("listaFuncionarios");
        const listItem = document.createElement("li");
        listItem.textContent = `Nome: ${funcionario.nomeCompleto} | CPF: ${funcionario.cpf} | Email: ${funcionario.email} | Função: ${funcionario.funcao}`;
        listaFuncionarios.appendChild(listItem);

        // Limpar os campos do formulário
        document.getElementById("nomeCompletoFunc").value = "";
        document.getElementById("cpfFunc").value = "";
        document.getElementById("emailFunc").value = "";
        document.getElementById("funcaoFunc").value = "";
    });

    // Funcionalidade de adicionar cliente
    document.getElementById("formClientes").addEventListener("submit", function (event) {
        event.preventDefault();

        const nomeCompleto = document.getElementById("nomeCompletoCli").value;
        const cpf = document.getElementById("cpfCli").value;
        const email = document.getElementById("emailCli").value;
        const cep = document.getElementById("cepCli").value;

        const cliente = {
            nomeCompleto,
            cpf,
            email,
            cep
        };

        const listaClientes = document.getElementById("listaClientes");
        const listItem = document.createElement("li");
        listItem.textContent = `Nome: ${cliente.nomeCompleto} | CPF: ${cliente.cpf} | Email: ${cliente.email} | CEP: ${cliente.cep}`;
        listaClientes.appendChild(listItem);

        // Limpar os campos do formulário
        document.getElementById("nomeCompletoCli").value = "";
        document.getElementById("cpfCli").value = "";
        document.getElementById("emailCli").value = "";
        document.getElementById("cepCli").value = "";
    });
});
