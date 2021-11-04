"use strict";


function calcularPrecioConDescuento(precio, descuento) {

    const porcentajeConDescuento = 100 - descuento;
    const total = (precio * porcentajeConDescuento / 100);
    return total;
}

function buttonPriceDiscount(){
    const priceValue = document.getElementById("inputPrice").value;
    const couponValue = document.getElementById("inputCoupon").value;

    const coupons = [
        {
            name: 'ABCD123',
            discount: 15
        },
        {
            name: 'EFGH456',
            discount: 25
        },
        {
            name: 'IJKL789',
            discount: 30
        }
    ];
    const isCouponValid = function(coupon) {
        return coupon.name === couponValue;
    }
    const userCoupon = coupons.find(isCouponValid);

    if (!userCoupon) 
    {
        alert("El cupón " + couponValue + "no es válido"); 
    }

    /* if (!coupons.includes(couponValue)) 
    {
        alert("El cupón " + couponValue + "no es válido"); 
    }
    else 
    {
        switch(couponValue) 
        {
            case coupons[0]:
                descuento = 15;
                break;
            case coupons[1]:
                descuento = 25;
                break;
            case coupons[2]:
                descuento = 30;
                break;
            default:
                mensajeDefault.innerText ="No has elegido ningun cupon valido";
        }
    } */
    else 
    {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

        const mensaje = document.getElementById("resultadoP");
        mensaje.innerText ="El costo del producto con descuento es:" + precioConDescuento;
    }
}