var expandir = true;


var ManejadorDeArticulos = function () {
    var articulos;
};

ManejadorDeArticulos.prototype.load = function () {

    var nuevo = new Articulo(0,"Chapecoense","Gana la copa", true, "aca tiro fruta");
    var nuevo1 = new Articulo(1,"Manu","Compra su Quemador de grasas", false, "aca tiro fruta");
    var nuevo2 = new Articulo(2,"Manu","Le pega a todos por locura de la pill", true, "aca tiro fruta");
    this.articulos = [];
    this.articulos.push(nuevo);
    this.articulos.push(nuevo1);
    this.articulos.push(nuevo2);

};

ManejadorDeArticulos.prototype.render = function () {

    for(var i=0; i<this.articulos.length; i++){
        this.articulos[i].render(i);
    }
};

window.onload = function(){
    Articulos = new ManejadorDeArticulos();
    Articulos.load();
    Articulos.render();
};

window.onmousemove = function(){
    var x = Math.floor(Math.random()*11);
    var resultado = 1;

    for(var i=1; i<=x; i++) {
        resultado *= i;
    }
    document.getElementById('numero').innerHTML= ' numero  '+ x + '   factorial ' + resultado;
};


var Articulo = function (id,titulo, contenido, link, extra) {
    this.id = id;
    this.titulo = titulo;
    this.contenido = contenido;
    this.link = link;
    this.extra = extra;
};


Articulo.prototype.getTitulo = function(){
    return this.titulo;
};

Articulo.prototype.getContenido = function () {
    return this.contenido;

};


Articulo.prototype.render = function (i) {

    if(this.link == true) {
        if(expandir == false) {
            document.getElementById('articulo' + i).innerHTML = '<article><div><a onclick="abrirNoticia(\'' + this.id + '\')">' + this.getTitulo() + this.id + '</a></div><div><p>' + this.getContenido() + '</p></div> </article>';
        }
        else{
            document.getElementById('articulo' + i).innerHTML = '<article><div><a onclick="expandirNoticia(\'' + this.id + '\')">' + this.getTitulo() + this.id + '</a></div><div><p>' + this.getContenido() + '</p></div> </article>';
        }
    }else{
        document.getElementById('articulo' + i).innerHTML = '<article><div><h1>' + this.getTitulo() + '</h1></div><div><p>' + this.getContenido() + '</p></div> </article>';
    }
};

function abrirNoticia (id){
    aux = Articulos.articulos[id];
    location.href ='noticia.html?titulo='+aux.titulo+'&contenido='+aux.contenido+'&extra='+aux.extra;
};

function expandirNoticia (id){
    aux = Articulos.articulos[id];
    document.getElementById('articulo' + id).innerHTML = '<article><div><a onclick="expandirNoticia(\'' + this.id + '\')">' + aux.titulo + this.id + '</a></div><div><p>' + aux.contenido + '</p><br>' +
        '<p>'+aux.extra+'</p></div> </article> <br>' +
        '<a onclick="contraerNoticia(\'' + aux.id + '\')"> Contraer</a>';
}

function contraerNoticia (id){
    aux = Articulos.articulos[id];
    document.getElementById('articulo'+ id).innerHTML = '<article><div><a onclick="expandirNoticia(\'' + aux.id + '\')">' + aux.getTitulo() + aux.id + '</a></div><div><p>' + aux.getContenido() + '</p></div> </article>';
}




