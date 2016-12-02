
window.onload = function(){
    var titulo = findGetParameter('titulo');
    var contenido = findGetParameter('contenido');
    var extra = findGetParameter('extra');
    document.getElementById('articulo').innerHTML = '<article><div><h1>' + titulo + '</h1></div><div><p>' + contenido+ '</p> <br>' +
        '<p>'+extra+'</p></div> </article>';

};

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}