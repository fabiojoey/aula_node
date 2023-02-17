import * as fs from 'fs';

fs.writeFile('meuarquivo.doc', 'AHHHHHHHHHHHHHHHHHHHHHHH', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('Arquivo criado com sucesso.')
});