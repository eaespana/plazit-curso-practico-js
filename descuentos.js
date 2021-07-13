function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function ButtonPriceDiscount () {
    
    const inputPrice = document.getElementById("InputPrice").value;
    //const inputDiscount = document.getElementById("InputDisconunt").value;
    const InputCupon = document.getElementById("InputCupon").value;

    if(inputPrice === "" || InputCupon === ""){
        document.getElementById("ResultadoFinal").innerText = "Por favor diligencie todos los campos.";
    }else {
        let descuento = 0;
        switch(InputCupon){
            case "PLATZI01":
                descuento = 15;
            break;
            case "PLATZI02":
                descuento = 18;
            break;
            case "PLATZI03":
                descuento = 21;
            break;
            case "PLATZI04":
                descuento = 25;
            break;
            default:
                document.getElementById("ResultadoFinal").innerText = "Por favor diligencie un cupón valido.";
                return;
            break;
        }
        const precioConDescuento = calcularPrecioConDescuento(inputPrice,descuento);
        document.getElementById("ResultadoFinal").innerText = "El valor final a pagar " 
                                                                + precioConDescuento
                                                                + " Se aplico un descuento de "
                                                                + descuento + " porciento";
    }
    
}