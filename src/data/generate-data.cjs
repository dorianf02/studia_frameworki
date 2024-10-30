const fs = require('fs');

const count = Number(process.argv[2]); // odczyt liczby obiektów
let names = [];                        // tablica z obiektami 
const eyeColors = ['blue', 'green', 'brown', 'gray'];

function getRandomBirthdate() {
    const start = new Date(1970, 1, 1);
    const end = new Date(2015, 12, 31);
    const birthdate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return birthdate.toISOString().split('T')[0];
}

function getRandomEyeColors() {
    return eyeColors[Math.floor(Math.random() * eyeColors.length)];
}

fs.readFile('./names.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    //podział łańcucha z imionami na wiersze.
    names = data.split("\n").map(s => s.trim()).filter(n => n.length != 0);
    console.log(names);
    let content = "export const data = [";
    for(let i = 0; i < count; i++){
        //losowanie imienia z bilioteki imion
        //content += `"${names[~~((Math.random() * names.length) / 1)]}",`; 
        const id = i + 1;
        const name = names[~~(Math.random() * names.length)];
        const birth = getRandomBirthdate();
        const eyes = getRandomEyeColors();

        content += ` {\n  id: ${id}, \n  name: "${name}",\n  birth: "${birth}",\n  eyes: "${eyes}",\n },\n`;
    }
    content += "];"
    //zapis łańcucha do pliku 
    fs.writeFile('/src/data/module-data.js', content, (err) => {
        if (err) {
           console.error(err);
        }
        console.log("module-data.js generated");
       });
});