import { useState } from "react";
import { ProductosItem } from "./ProductosItem";

const productos = [
    { ID: 1, nombre: "Lápiz", precio: 500 },
    { ID: 2, nombre: "Cuaderno", precio: 1200 },
    { ID: 3, nombre: "Borrador", precio: 300 },
    { ID: 4, nombre: "Tijeras", precio: 2000 },
    { ID: 5, nombre: "Pegamento", precio: 1500 }
];

export const ProductosList = () => {

    const [total, useTotal] = useState(0);
    
    const updateTotal = (curSubTotal, newSubtotal) => {
        useTotal(total - curSubTotal + newSubtotal);
    } 

    const listProducts = productos.map(producto => 
        <ProductosItem 
        nombre={producto.nombre}
        precio={producto.precio}
        updateTotal={updateTotal}
        key={producto.ID} />);

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {listProducts}
                    <tr>
                        <td className="fs-2 p-3 m-2" colSpan="4">Total: $<span>{total}</span></td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}