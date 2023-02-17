import * as fs from 'fs';
import { isBuffer } from 'util';

fs.readFile('meuarquivo.doc', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toLocaleString());
});