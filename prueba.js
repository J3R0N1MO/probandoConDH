function asientosDisponibles(disponibles, deseado){
    let cantidad = disponibles.length;

    if (cantidad===0){
        return ('Lo sentimos, el asiento número '+deseado+' está ocupado y no quedan asientos disponibles');
    }
    let lugar= (disponibles.indexOf(deseado));
    if (lugar == -1){
        return ("Lo sentimos, el asiento número "+deseado+" está ocupado, pero aún quedan "+cantidad+" asientos disponibles");
    }
    else{
        return("Felicitaciones, el asiento número "+deseado+" está disponible");
    }
}


console.log(asientosDisponibles([3, 15, 18, 25], 25));