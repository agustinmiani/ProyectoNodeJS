// var fs = require('fs');


// var content;
// // First I want to read the file
// fs.readFile('//Users/amiani/Desktop/archivo.txt', function read(err, data) {
//     if (err) {
//         throw err;
//     }
//     content = data;
//
//     var lineas = 1;
//
//     for (i=0; i<data.length ; i++){
//         // if(data[i] == '\n'){
//         if(data[i] == '\n'){
//             lineas++;
//         }
//     }
//     // Invoke the next step here however you like
//     console.log(content);
//     console.log(lineas);
//     processFile();          // Or put the next step in a function and invoke it
// });
//
// function processFile() {
//     console.log(content);
// }


// fs = require('fs');
// // fs.readFile('//Users/amiani/Downloads/main.cpp', 'utf8', function (err, data) {
// fs.readFile('//Users/amiani/Desktop/archivo.txt', 'utf8', function (err, data) {
//     if (err) {
//         return console.log(err);
//     }
//     var count = 1;
//     for (var i = 0; i < data.length; i++) {
//         if (data[i] == '\n') {
//             count++;
//         }
//     }
//     console.log(data);
//     console.log(count);
// });

function agregarPalabra (dict, longitud){
    if(dict[longitud] == null)
        dict[longitud] = 0;
    dict[longitud]++;
};

fs = require('fs');

fs.readFile('//Users/amiani/Downloads/main.cpp', 'utf8', function (err, data) {
// fs.readFile('//Users/amiani/Desktop/archivo.txt', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    var dict = {};


    var letras = 0;
    for (var i = 0; i < data.length; i++) {
        if (data[i] == '\n') {
        // if (data[i] == '\n' || data[i] == ' ') {
            agregarPalabra(dict, letras);
            letras = 0;
        }
        else{
            letras++;
        }
    }
    if(letras>0){
        agregarPalabra(dict,letras);
    }
    console.log(dict);
});


