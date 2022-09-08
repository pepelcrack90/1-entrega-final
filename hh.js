const productos = []
const IVA = 1.17
let valor1 = parseFloat(prompt("ingrese el total de productos en su carrito: "))
agregarProducto(valor1)
if (confirm("quiere ver su carrito?")) {
    console.table(productos)
}
const suma = productos.reduce((acc, el) => acc + el.precio, 0)
console.log(suma)
console.log("el total mas impuestos:", total(suma))



function agregarProducto(num1) {
    for (let i = 0; i < num1; i++) {
        let nombre = prompt("Ingresa el nombre del producto:")
        let importe = parseInt(prompt("Ingresa el precio del producto:"))
        const prod = { nombre: nombre, precio: importe }
        productos.push(prod)
    }

}

function total(num1) {
    if (confirm("su producto viene del exterior?")) {
        if (num1 >= 7000) {
            let mitad = num1 / 2 //impuesto de aduana
            let suma1 = num1 + mitad //impuesto de aduana
            let iva = suma1 / IVA //impuesto al valor añadido
            let total = suma1 + iva //impuesto al valor añadido
            return total
        } else {
            let iva = num1 / IVA //impuesto al valor añadido
            let total = num1 + iva //impuesto al valor añadido
            return total
        }
    } else {
        if (confirm("su producto viene por envio?")) {
            let peso = prompt("ingrese el tamaño de su produto(grande chico mediano): ")
            let iva1 = 0
            let total1 = 0
            switch (peso) {
                case "grande":
                    iva1 = num1 / IVA //impuesto al valor añadido
                    total1 = num1 + iva1 + 1.910 //impuesto al valor añadido
                    return total1
                case "mediano":
                    iva1 = num1 / IVA //impuesto al valor añadido
                    total1 = num1 + iva1 + 1.570 //impuesto al valor añadido
                    return total1
                case "chico":
                    iva1 = num1 / IVA //impuesto al valor añadido
                    total1 = num1 + iva1 + 1.190 //impuesto al valor añadido
                    return total1
            }
        } else {
            let iva = num1 / IVA //impuesto al valor añadido
            let total = num1 + iva //impuesto al valor añadido
            return total
        }
    }
}