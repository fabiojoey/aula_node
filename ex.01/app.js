// importando o módulo padrão http
var http = require('http'); 

// criar um servidor http
var server = http.createServer(function (request, reponse) {
    // Envia uma resposta para o cliente
    reponse.writeHead(200, {'Content-Type' : 'text/plain'});
    reponse.end('Hello World\n');
});

// Iniciar o servidor porta 3000 
server.listen(3000, function(){
    console.log('Servidor iniciado na porta 3000 jovem');
});
