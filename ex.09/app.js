import * as fs from 'fs';

fs.appendFile('arquivo.txt', ' - Senac', (err) => {
    if (err) {
        console.log(err)
    }
    console.log('Arquivo atualizado com Sucesso!')
});
