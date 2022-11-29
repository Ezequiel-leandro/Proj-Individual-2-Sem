var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        
        usuarioModel.entrar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var fkFilial = req.body.fkFilialServer;
    var fkCredencial = req.body.fkCredencialServer;
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.passwordServer;
    
    console.log(nome)
    console.log(email)
    console.log(senha)
    console.log(fkFilial)
    console.log(fkCredencial)
    // Faça as validações dos valores
    if (fkFilial == undefined) {
        res.status(400).send("Sua fkFilial está undefined!");
    } else if (fkCredencial == undefined) {
        res.status(400).send("Sua fkCredenciall está undefined!");
    } else if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(fkFilial, fkCredencial, nome, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function alertas(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var componente = req.body.componenteServer;
    var metrica = req.body.metricaServer;
    var empresa = req.body.empresaServer;
    var criticidade = req.body.criticidadeServer;
    
    console.log(componente)
    console.log(metrica)
    console.log(empresa)
    console.log(criticidade)
    // Faça as validações dos valores
    if (componente == undefined) {
        res.status(400).send("Seu componente está undefined!");
    } else if (metrica == undefined) {
        res.status(400).send("Sua metrics está undefined!");
    } else if (empresa == undefined) {
        res.status(400).send("Seu empresa está undefined!");
    } else if (criticidade == undefined) {
        res.status(400).send("Sua criticidade está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.alertas(componente,metrica,empresa,criticidade)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function listar2(req, res) {
    usuarioModel.listar2()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}



function ObterFilial(req, res) {
    var fkFilial = req.body.fkFilialServer;
    
    if(fkFilial == undefined) {
        res.status(400).send("Seu fkEmpresa está undefined!");
    }else {
        
usuarioModel.ObterNomeEmp(fkEmpresa)
    .then(
        function (resultado) {
            console.log(`\nResultados encontrados: ${resultado.length}`);
            console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

            if (resultado.length != 0) {
                console.log(resultado);
                res.json(resultado);
            } else if (resultado.length == 0) {
                res.status(403).send("Não tem torre");
            }
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao realizar o encontrar nome emp! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}}


function listarMaq(req, res) {
    var fkFilial = req.body.fkFilialServer;
    
    if(fkFilial == undefined) {
        res.status(400).send("Seu fkEmpresa está undefined!");
    }else {
        
usuarioModel.ObterNomeEmp(fkEmpresa)
    .then(
        function (resultado) {
            console.log(`\nResultados encontrados: ${resultado.length}`);
            console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

            if (resultado.length != 0) {
                console.log(resultado);
                res.json(resultado);
            } else if (resultado.length == 0) {
                res.status(403).send("Não tem torre");
            }
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao realizar o encontrar nome emp! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}}





// function entrar2(req, res) {
//     var fkFilial = req.body.fkFilialServer;

//     if (fkFilial == undefined) {
//         res.status(400).send("Id da Filial não encontrado");
//     } else {
        
//         usuarioModel.entrar2(fkFilial)
//             .then(
//                 function (resultado) {
//                     console.log(`\nResultados encontrados: ${resultado.length}`);
//                     console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

//                     if (resultado.length == 1) {
//                         console.log(resultado);
//                         res.json(resultado[0]);
//                     } else if (resultado.length == 0) {
//                         res.status(403).send("Empresa não encontrada");
//                     } 
//                 }
//             ).catch(
//                 function (erro) {
//                     console.log(erro);
//                     console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
//                     res.status(500).json(erro.sqlMessage);
//                 }
//             );
//     }

// }

// function listar3(req, res) {
//     var idFilial = req.body.idFilialServer;
//     var nomeFantasia = req.body.nomeFantasiaServer;

//     if (idFilial == undefined) {
//         res.status(400).send("Id da Filial não encontrado");
//     } else if (nomeFantasia == undefined) {
//         res.status(400).send("NomeFantasia não encontrado");
//     } else {
        
//         usuarioModel.listar3(idFilial)
//             .then(
//                 function (resultado) {
//                     console.log(`\nResultados encontrados: ${resultado.length}`);
//                     console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

//                     if (resultado.length == 1) {
//                         console.log(resultado);
//                         res.json(resultado[0]);
//                     } else if (resultado.length == 0) {
//                         res.status(403).send("Filial não encontrada");
//                     } 
//                 }
//             ).catch(
//                 function (erro) {
//                     console.log(erro);
//                     console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
//                     res.status(500).json(erro.sqlMessage);
//                 }
//             );
//     }

// }

module.exports = {
    entrar,
    cadastrar,
    listar,
    testar,
    alertas,
    listar2,
    ObterFilial,
    listarMaq
    // entrar2
}