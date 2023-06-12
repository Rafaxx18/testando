var database = require("../database/config");

function buscarUltimasMedidas(idVoto) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select  top ${limite_linhas}
                 qtdVotos  
                from votos  
                 where idVoto = ${idVoto}
                 order by qtdVotos asc`
        } 
        
          
        else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
            if(idVoto == 1){       
                instrucaoSql = `  select nome, count(nome) as VOTO
                from votos
                group by nome;`;
        }else{
                        instrucaoSql = `  select resultado, count(resultado) as PNG
                        from quiz
                         group by resultado;`; 
        }
     
                            
    
    //select top ${limite_linhas}
    //     dht11_temperatura as temperatura, 
    //     dht11_umidade as umidade,  
    //                     momento,
    //                     FORMAT(momento, 'HH:mm:ss') as momento_grafico
    //                 from medida
    //                 where fk_aquario = ${idVoto}
    //                 order by id desc`;
    // } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    //     instrucaoSql = `select 
    //     dht11_temperatura as temperatura, 
    //     dht11_umidade as umidade,
    //                     momento,
    //                     DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
    //                 from medida
    //                 where fk_aquario = ${idVoto}
    //                 order by id desc limit ${limite_linhas}`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// function buscarMedidasEmTempoReal(idAquario) {

//     instrucaoSql = ''

//     if (process.env.AMBIENTE_PROCESSO == "producao") {
//         instrucaoSql = `select top 1
//         dht11_temperatura as temperatura, 
//         dht11_umidade as umidade,  
//                         CONVERT(varchar, momento, 108) as momento_grafico, 
//                         fk_aquario 
//                         from medida where fk_aquario = ${idAquario} 
//                     order by id desc`;

//     } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
//         instrucaoSql = `select 
//         dht11_temperatura as temperatura, 
//         dht11_umidade as umidade,
//                         DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
//                         fk_aquario 
//                         from medida where fk_aquario = ${idAquario} 
//                     order by id desc limit 1`;
//     } else {
//         console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
//         return
//     }

//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }


module.exports = {
    buscarUltimasMedidas
    // buscarMedidasEmTempoReal
}
