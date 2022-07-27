const funcionarioD = require('../data/funcionario.data');
exports.createFuncionario = async function (data) {
    const novoFuncionario = data;
    return funcionarioD.createFuncionario(novoFuncionario);
}

exports.loginFuncionario = async function (data) {
    const funcionario = await funcionarioD.findByCodigo(data.codigo);
    if (!funcionario) { throw new Error('Falha no login'); }

    if (data.senha !== funcionario.senha) { throw new Error('Falha no login'); }

    console.log(funcionario);
    return funcionario;
}