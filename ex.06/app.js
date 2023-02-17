import * as fs from 'fs';
import { isBuffer } from 'util';

fs.readFile('meuarquivo.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toLocaleString());
});