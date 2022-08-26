//e supermercado

let productos = [
    ["Cafe","800"],
    ["Yerba","350"],
    ["Platos","250"],
    ["Alfajor","150"],
    ["Tazas","425"],
    ["Pelota futbol","1500"],
    ["Chocolate","125"],
    ["Té","225"],
    ["Mani","160"],
    ["Leche","220"],
    ["Galletitas","200"],
    ["Tostadas","370"],
    ["Azucar","215"],
    ["Cuchillo","175"],
    ["Tenedor","175"],
    ["Papel Higienico","260"],
]


/*function listado(){

    for (let index = 0; index < productos.length; index++) {
        
        console.log(productos[index]);
    };
};console.log( );
*/


function consultas(str){

    if (str=="listado"){
        console.log(productos);
    }else if (str=="mayorprecio") {
            let mayor=0;
            let articulo=[];
            for (let index = 0; index < productos.length; index++) {
                if (mayor < parseInt(productos[index][1])){
                    articulo =(productos[index]);
                    mayor=parseInt(productos[index][1]);
                }
            }
            console.log("Producto con mayor valor ="+ articulo[0]+" " +articulo[1]);
        }else if (str=="menorprecio") {
                let menor=999999;//maxint
                let articulo =[];
                for (let index = 0; index < productos.length; index++) {
                    if (menor > parseInt(productos[index][1])){
                        articulo =(productos[index]);
                        menor =parseInt(productos[index][1]);
                    }
                }
                console.log("Producto con menor valor ="+ articulo[0]+" " +articulo[1]);
                
        }else{
                console.log("comando no concido, solo listado, mayorprecio y menorprecio se conocen")
        }

};


consultas("listado");
consultas("mayorprecio");
consultas("menorprecio");
consultas("quevendenacaeh??");

function PreciosIguales(articuloUno,articuloDos){
    let valorUno =-1;
    let valorDos=-2;
    //let lugarUno = productos.indexOf(articuloUno)
    for (let index = 0; index < productos.length; index++) {
        if (articuloUno === productos[index][0]){
            valorUno= productos[index][1];
            
        }
    }
    for (let index = 0; index < productos.length; index++) {
        if (articuloDos === productos[index][0]){
            valorDos= productos[index][1];
            
        }
    }
    if (valorUno === valorDos) {
        console.log('Igual precio')
    }else{
        console.log('Distinto Precio')
    }

}

PreciosIguales('Tostadas', 'Cuchillo');
PreciosIguales('Tenedor', 'Cuchillo');
console.log('')

function eliminarProducto(articulo){
    let muestro;
    for (let index = 0; index < productos.length; index++) {
        if (articulo === productos[index][0]){
            muestro=productos[index][0];
            productos[index]=productos.pop();            
        }
    }
    let frase='El producto >'+muestro+ '< fue eliminado';
return (frase);
}

console.log(eliminarProducto('Leche'));
console.log(productos);


function agregarProducto(nombre, precio){

    productos.push([nombre, precio]);
    console.log('Se agrego el producto >'+nombre+' <')

}

agregarProducto('basura', '2');
console.log(productos);

