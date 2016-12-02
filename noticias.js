module.exports = {
    get: function(){
        var articulos = [];
        var nuevo = new Articulo(0,"Chapecoense","Gana la copa", true, "aca tiro fruta");
        var nuevo1 = new Articulo(1,"Manu","Compra su Quemador de grasas", false, "aca tiro fruta");
        var nuevo2 = new Articulo(2,"Manu","Le pega a todos por locura de la pill", true, "aca tiro fruta");
        articulos.push(nuevo);
        articulos.push(nuevo1);
        articulos.push(nuevo2);

        return articulos;
    },
};


var Articulo = function (id,titulo, contenido, link, extra) {
    this.id = id;
    this.titulo = titulo;
    this.contenido = contenido;
    this.link = link;
    this.extra = extra;
};