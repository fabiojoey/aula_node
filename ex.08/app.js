import * as fs from 'fs';


let data = fs.readFileSync('meuarquivo.txt');
console.log(data.toString());