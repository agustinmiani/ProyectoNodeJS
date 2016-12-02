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
            document.getElementById('articulo' + i).innerHTML = '<div class="container" style="float: left; border: 1px solid gray ; height: 200px; width: 200px;"><div style="height: 20px;"><div ><a onclick="abrirNoticia(\'' + this.id + '\')">' + this.getTitulo() + this.id + '</a></div><div><p>' + this.getContenido() + '</p></div> </div>';
        }
        else{
            document.getElementById('articulo' + i).innerHTML = '<div class="container" style="border: 1px solid gray ; height: 200px; width: 200px;"><div class="caption" style="height: 20px;"><div><a onclick="expandirNoticia(\'' + this.id + '\')">' + this.getTitulo() + this.id + '</a></div><div><p>' + this.getContenido() + '</p></div> </div>';
        }
    }else{
        document.getElementById('articulo' + i).innerHTML = '<div  class="container" style="  border: 1px solid gray ; height: 200px; width: 200px;"><div class="col-xs-12 col-sm-6 col-md-3" style="height: 20px;"><div><h1>' + this.getTitulo() + '</h1></div><div><p>' + this.getContenido() + '</p></div> </div>';
    }
};

function abrirNoticia (id){
    aux = Articulos.articulos[id];
    location.href ='noticia.html?titulo='+aux.titulo+'&contenido='+aux.contenido+'&extra='+aux.extra;
};

function expandirNoticia (id){
    aux = Articulos.articulos[id];
    document.getElementById('articulo' + id).innerHTML = '<article style="border: 1px solid gray; height: 200px; width: 200px "><div style="height: 20px;"><a onclick="expandirNoticia(\'' + this.id + '\')">' + aux.titulo + this.id + '</a></div><div><p>' + aux.contenido + '</p><br>' +
        '<p>'+aux.extra+'</p></div> <br>' +
        '<a onclick="contraerNoticia(\'' + aux.id + '\')"> Contraer</a> </article>';
}

function contraerNoticia (id){
    aux = Articulos.articulos[id];
    document.getElementById('articulo'+ id).innerHTML = '<article style="border: 1px solid gray ; height: 200px; width: 200px "><div style="height: 20px;"><div><a onclick="expandirNoticia(\'' + aux.id + '\')">' + aux.getTitulo() + aux.id + '</a></div><div><p>' + aux.getContenido() + '</p></div> </article>';
}




